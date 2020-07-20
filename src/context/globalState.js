import React, { useReducer, useCallback } from "react";
import INITIAL_STATE from "./initialState";

import appContext from "./appContext";
import { appReducer, UPDATE_WALLET, UPDATE_COINS } from "./reducers";
import {
  sortNameAsc,
  sortNameDsc,
  sortValueAsc,
  sortValueDsc,
} from "../components/Utils/SortHelper";

const GlobalState = (props) => {
  const [globalState, dispatch] = useReducer(appReducer, INITIAL_STATE);

  /**
   * Updates the wallet Id in our global context
   * @param walletId - Id of the wallet
   *
   * @returns none
   */

  const updateWallet = (walletId) => {
    dispatch({
      type: UPDATE_WALLET,
      payload: {
        walletId: walletId,
      },
    });
  };

  /**
   * Updates the coins array in our global context
   * @param coins - Array of coin objects
   *
   * @returns none
   */

  const updateCoins = useCallback((coins) => {
    dispatch({
      type: UPDATE_COINS,
      payload: {
        coins: coins,
      },
    });
  }, []);

  /**
   * Sorts according to method provided
   * @param coins - array of coin objects
   * @param method - method of sorting
   *
   * @returns none
   */

  const sortCoins = (coins, method) => {
    let newOrder;

    switch (method) {
      case "high-low":
        newOrder = sortValueDsc(coins);
        break;
      case "low-high":
        newOrder = sortValueAsc(coins);
        break;
      case "A-Z":
        newOrder = sortNameAsc(coins);
        break;
      case "Z-A":
        newOrder = sortNameDsc(coins);
        break;
      default:
        newOrder = sortValueDsc(coins);
        break;
    }

    dispatch({
      type: UPDATE_COINS,
      payload: {
        coins: newOrder,
      },
    });
  };

  return (
    <appContext.Provider
      value={{
        ...INITIAL_STATE,
        wallet: globalState.wallet,
        actions: {
          updateWallet: updateWallet,
          updateCoins: updateCoins,
          sortCoins: sortCoins,
        },
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default GlobalState;
