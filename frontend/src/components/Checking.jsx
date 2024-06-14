import Image from "next/image";
import React, { useContext, useState } from "react";
import checking from "@/../public/assets/Spinner-Filled-Circles.png";
import eth from "@/../public/assets/cryptocurrency-color_eth.png";
import more from "@/../public/assets/arrow-down.png";
import errorIcon from "@/../public/assets/icons8-error-48.png";
import subEth from "@/../public/assets/ethSub.png";
import { ActualFeesContext } from "@/context/ActualFeesContext";

function Checking() {
  const {
    ActualFees,
    success,
    error,
    errorMessage,
    open,
    toggleOpen,
    toggleIcon,
    icon,
  } = useContext(ActualFeesContext);

  const { hash, actualFee } = ActualFees;

  const shortHash = hash ? `${hash.slice(0, 14)}....` : "";

  const actualFeeInEth = actualFee
    ? (parseInt(actualFee) / 10 ** 18).toFixed(5)
    : "";

  return (
    <div className="w-[500px] h-[230.77px] flex flex-col dark:text-[#0C0D4F] gap-4 justify-center items-center">
      {!success && !error ? (
        <>
          <Image
            src={checking}
            alt="Checking"
            className="w-[48px] h-[48px] spin-and-grow"
          />
          <p className="text-[#0C0D4F] font-semibold text-[16px] leading-[25px]">
            Checking
          </p>
        </>
      ) : success && !error ? (
        <>
          <h3 className="font-semibold text-[16px] leading-[25px] text-[#0C0D4F]">
            Result
          </h3>
          <div className="flex justify-between gap-10">
            <div className="w-[128px] h-[67px] text-[14px] flex flex-col gap-4 leading-[25px] font-semibold">
              <p>Contract Address</p>
              <p>Estimated Gas fee</p>
            </div>
            <div className="w-[128px] h-[67px] text-[14px] leading-[25px] font-semibold flex flex-col items-end justify-between">
              <p className="self-start">{shortHash}</p>
              <div className="flex gap-2 items-center relative">
                <p> ${actualFeeInEth}</p>
                <Image src={icon ? eth : subEth} alt="ETH" />
                <Image
                  src={more}
                  alt="More"
                  className={
                    open ? "rotate-90 cursor-pointer" : "cursor-pointer"
                  }
                  onClick={toggleOpen}
                />
                {open && (
                  <Image
                    src={!icon ? eth : subEth}
                    alt="Toggle Icon"
                    className="cursor-pointer absolute top-full -right-1"
                    onClick={toggleIcon}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="font-semibold text-[16px] leading-[25px] text-[#0C0D4F] flex items-center">
            Something went wrong
            <Image src={errorIcon} alt="Error Icon" />
          </h3>
          <h3 className="text-red-700">{errorMessage}</h3>
        </>
      )}
    </div>
  );
}

export default Checking;
