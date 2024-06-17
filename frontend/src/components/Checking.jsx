import Image from "next/image";
import React, { useContext, useState } from "react";
import checking from "@/../public/assets/Spinner-Filled-Circles.png";
import eth from "@/../public/assets/cryptocurrency-color_eth.png";
import more from "@/../public/assets/arrow-down.png";
import errorIcon from "@/../public/assets/icons8-error-48.png";
import { ActualFeesContext } from "@/context/ActualFeesContext";

function Checking({ onClose }) {
  const { ActualFees, success, error, errorMessage } =
    useContext(ActualFeesContext);

  const { hash, actualFee } = ActualFees;

  const shortHash = hash ? `${hash.slice(0, 14)}....` : "";

  const voyagerScanUrl = hash ? `https://voyager.online/tx/${hash}` : "#";

  const actualFeeInEth = actualFee
    ? (parseInt(actualFee) / 10 ** 18).toFixed(5)
    : "";

  return (
    <div className="md:w-[500px] w-[256px] md:h-[230.77px] h-[150px]  flex flex-col dark:text-[#0C0D4F] gap-4 justify-center items-center relative">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            className=" absolute cursor-pointer top-0 right-0 text-gray-950 hover:fill-red-800 hover:scale-110"
            onClick={onClose}
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
          <h3 className="font-semibold text-[16px] leading-[25px] text-[#0C0D4F]">
            Result
          </h3>
          <div className="flex justify-between gap-10">
            <div className="w-[128px] h-[67px] text-[14px] flex flex-col gap-4 leading-[25px] font-semibold">
              <p>Transaction Hash</p>
              <p>Estimated Gas fee</p>
            </div>
            <div className="w-[128px] h-[67px] text-[14px] leading-[25px] font-semibold flex flex-col items-end justify-between">
              <p className="self-start">{shortHash}</p>
              <div className="flex gap-2 items-center relative">
                <p> ${actualFeeInEth}</p>
                <Image src={eth} alt="ETH" />
                <a
                  href={voyagerScanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={more} alt="More" className=" cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            className=" absolute cursor-pointer top-0 right-0"
            onClick={onClose}
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
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
