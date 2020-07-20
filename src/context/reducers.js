export const UPDATE_WALLET = "UPDATE_WALLET";
export const UPDATE_COINS = "UPDATE_COINS";

/**
 * Updates the global state with given Wallet Id
 * @param walletId - Id of the current wallet
 * @param state - global state stored in context
 *
 * @returns updatedState
 */

const updateWallet = (walletId, state) => {
  // console.log('ID --->' ,walletId);
  // console.log(state);
  const updatedState = { ...state, wallet: { ...state.wallet, id: walletId } };
  return updatedState;
};

/**
 * Updates the global state with given coins array
 * @param coins - array of coin objects
 * @param state - global state stored in context
 *
 * @returns updatedState
 */

const updateCoins = (coins, state) => {
  return { ...state, wallet: { ...state.wallet, coins: coins } };
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_WALLET:
      return updateWallet(action.payload.walletId, state);
    case UPDATE_COINS:
      return updateCoins(action.payload.coins, state);
    default:
      return state;
  }
};
