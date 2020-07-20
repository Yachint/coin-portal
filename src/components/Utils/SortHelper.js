import _ from "lodash";

/**
 * Sorts according to Price of coins : ASC -> DESC
 * @param coins - array of coin objects
 *
 * @returns sorted - array of sorted coin objects
 */
export const sortValueAsc = (coins) => {
  const sorted = _.sortBy(coins, [
    function (o) {
      return o.price;
    },
  ]).reverse();
  return sorted;
};

/**
 * Sorts according to Price of coins : DESC -> ASC
 * @param coins - array of coin objects
 *
 * @returns sorted - array of sorted coin objects
 */

export const sortValueDsc = (coins) => {
  const sorted = _.sortBy(coins, [
    function (o) {
      return o.price;
    },
  ]);
  return sorted;
};

/**
 * Sorts according to Name of coins : ASC -> DESC
 * @param coins - array of coin objects
 *
 * @returns sorted - array of sorted coin objects
 */

export const sortNameAsc = (coins) => {
  const sorted = _.sortBy(coins, [
    function (o) {
      return o.coin;
    },
  ]).reverse();
  return sorted;
};

/**
 * Sorts according to Name of coins : DESC -> ASC
 * @param coins - array of coin objects
 *
 * @returns sorted - array of sorted coin objects
 */

export const sortNameDsc = (coins) => {
  const sorted = _.sortBy(coins, [
    function (o) {
      return o.coin;
    },
  ]);
  return sorted;
};
