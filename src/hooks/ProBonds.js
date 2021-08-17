import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import orderBy from "lodash/orderBy";

export const makeProBondsArray = (alcxBondDiscount, spellBondDiscount, mimBondDiscount, floatBondDiscount) => {
  return [
    {
      name: "ALCX-ETH LP",
      value: "alcx_eth_lp",
      discount: Number(alcxBondDiscount),
      link: "https://etherscan.io/",
    },
    {
      name: "SPELL-ETH LP",
      value: "spell_eth_lp",
      discount: Number(spellBondDiscount),
      link: "https://etherscan.io/",
    },
    {
      name: "MIM-ETH LP",
      value: "mim_eth_lp",
      discount: Number(mimBondDiscount),
      link: "https://etherscan.io/",
    },
    {
      name: "FLOAT-ETH LP",
      value: "float_eth_lp",
      discount: Number(floatBondDiscount),
      link: "https://etherscan.io/",
    },
    {
      name: "UNI-ETH LP",
      value: "uni_eth_lp",
      discount: Number(0.05),
      link: "https://rinkeby.etherscan.io/token/0x4e99615101ccbb83a462dc4de2bc1362ef1365e5",
    },
  ];
};

const PLUTUS_BONDS_ARRAY = makeProBondsArray();

/**
 * Returns an array of partner bonds ordered by the most profitable ones first.
 * Each bond object contains its display name, value, and the discount amount.
 *
 * @returns {[{name: string, discount: number, value: string}, {name: string, discount: number, value: string}, {name: string, discount: number, value: string}, {name: string, discount: number, value: string}]}
 */
export default function useProBonds() {
  // const alcxBondDiscount = useSelector(state => {
  //   return state.bonding["alcx_eth_pro"] && state.bonding["alcx_eth_pro"].bondDiscount;
  // });

  // const spellBondDiscount = useSelector(state => {
  //   return state.bonding["spell_eth_pro"] && state.bonding["spell_eth_pro"].bondDiscount;
  // });

  // const mimBondDiscount = useSelector(state => {
  //   return state.bonding["mim_eth_pro"] && state.bonding["mim_eth_pro"].bondDiscount;
  // });

  // const floatBondDiscount = useSelector(state => {
  //   return state.bonding["float_eth_pro"] && state.bonding["float_eth_pro"].bondDiscount;
  // });

  // temporary values
  const alcxBondDiscount = 0.075;
  const spellBondDiscount = 0.081;
  const mimBondDiscount = 0.052;
  const floatBondDiscount = 0.065;

  const [pBonds, setPBonds] = useState(PLUTUS_BONDS_ARRAY);

  useEffect(() => {
    const bondValues = makeProBondsArray(alcxBondDiscount, spellBondDiscount, mimBondDiscount, floatBondDiscount);
    const mostProfitableBonds = orderBy(bondValues, "discount", "desc");
    setPBonds(mostProfitableBonds);
  }, [alcxBondDiscount, spellBondDiscount, mimBondDiscount, floatBondDiscount]);

  return pBonds;
}
