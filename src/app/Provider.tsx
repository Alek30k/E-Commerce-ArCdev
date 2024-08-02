"use client";

import { useState } from "react";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navbar from "@/components/Navbar";
import { CartUpdateContext } from "@/context/CartUpdateContext";
import Footer from "@/components/Footer";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [updateCart, setUpdateCart] = useState(true);

  return (
    // <PayPalScriptProvider
    //   options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
    // >
    <CartUpdateContext.Provider value={{ updateCart, setUpdateCart }}>
      <div className="px-10 md:px-20 relative mb-20">
        <Navbar />
        {children}
        <Footer />
      </div>
    </CartUpdateContext.Provider>
    // </PayPalScriptProvider>
  );
};

export default Provider;
