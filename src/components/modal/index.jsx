import React from "react";
import { WalletImg } from "../../assests";
import { MetamaskIcon, RightIcon, TimesIcon } from "../../assests/svgs";

export const Modal = ({closeModal}) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-modalbg inset-0 fixed z-[101] w-full top-0 left-0 pb-4 animate-scale"
      onClick={closeModal}
    >
      <div className="max-w-[600px] flex flex-col bg-white rounded-2xl w-full z-[200]">
        <div className="py-6 px-8 border-b border-[#CFD8DC] flex items-center justify-between">
          <h4 className="text-2xl text-[#333333]">Connect Wallet</h4>
          <TimesIcon />
        </div>
        <div className="flex flex-col gap-4 p-8 w-full">
          <p className="text-[#333333] text-base font-normal">
            Choose your preferred wallet:
          </p>
          <button className="flex items-center justify-between hover:bg-[#F8F9FA] border border-[#cfd8dc] rounded-xl px-5 py-3 text-black text-base font-semibold">
            <div className="flex items-center gap-4">
              <MetamaskIcon />
              <span>Metamask</span>
            </div>
            <RightIcon />
          </button>
          <button className="flex items-center justify-between hover:bg-[#F8F9FA] border border-[#cfd8dc] rounded-xl px-5 py-3 text-black text-base font-semibold">
            <div className="flex items-center gap-4">
              <img src={WalletImg} alt="wallet-icon" />
              <span>WalletConnect</span>
            </div>
            <RightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
