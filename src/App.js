import React from "react";
import { AuctionBody } from "./components/auctions/AuctionBody";
import { NavComp } from "./components/authentication/NavComp";
import { AuthProvider } from "./context/AuthContext";
import { FilterProvider } from "./context/FilterContext";

export const App = () => {
  return (
    <AuthProvider>
      <FilterProvider>
        <NavComp />
        <AuctionBody />
      </FilterProvider>
    </AuthProvider>
  );
};
