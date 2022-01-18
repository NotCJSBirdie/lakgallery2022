import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

const Dropdown = () => {
  const [currency, setCurrency] = useState("EUR");

  const changeCurrencyUSD = () => {
    setCurrency("USD");
  };

  const changeCurrencyEUR = () => {
    setCurrency("EUR");
  };

  const changeCurrencyAUD = () => {
    setCurrency("AUD");
  };

  const changeCurrencyCAD = () => {
    setCurrency("CAD");
  };

  const changeCurrencyGBP = () => {
    setCurrency("GBP");
  };

  const changeCurrencyCHF = () => {
    setCurrency("CHF");
  };

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="outline-none">
          <div className="px-9 py-5">
            <div className="flex flex-col">
              <div className="flex flex-row text-2xl items-center">
                <h1>{currency}</h1>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-down"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="bg-white border-2 border-black rounded-lg p-4 ">
          <DropdownMenu.Item onClick={changeCurrencyUSD}>
            <button className="text-2xl">USD</button>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={changeCurrencyEUR}>
            <button className="text-2xl">EUR</button>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={changeCurrencyAUD}>
            <button className="text-2xl">AUD</button>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={changeCurrencyCAD}>
            <button className="text-2xl">CAD</button>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={changeCurrencyGBP}>
            <button className="text-2xl">GBP</button>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={changeCurrencyCHF}>
            <button className="text-2xl">CHF</button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default Dropdown;
