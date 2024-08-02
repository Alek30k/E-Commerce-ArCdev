// import { createContext } from "react";

// export const CartUpdateContext = createContext(null);

import { createContext } from "react";

interface CartUpdateContextType {
  updateCart: boolean;
  setUpdateCart: (value: boolean) => void;
}

export const CartUpdateContext = createContext<CartUpdateContextType | null>(
  null
);
