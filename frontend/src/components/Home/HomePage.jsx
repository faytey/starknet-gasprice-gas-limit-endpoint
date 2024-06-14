"use client";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import background from "@/../public/assets/Group.png";
import checklist from "@/../public/assets/undraw_checklist__re_2w7v 1.png";
import CheckingModal from "../CheckingModal";
import Checking from "../Checking";
import { ActualFeesContext } from "@/context/ActualFeesContext";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getActualFee } = useContext(ActualFeesContext);

  const [address, setAddress] = useState("");

  const addressInputRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!addressInputRef.current.checkValidity()) {
      addressInputRef.current.reportValidity();
      return;
    }
    getActualFee(address);
    setAddress("");
    handleOpenModal();
  };

  const handleInvalid = (event) => {
    event.target.setCustomValidity("Please enter a valid contract address.");
  };

  const handleInput = (event) => {
    event.target.setCustomValidity("");
  };

  return (
    <main className="flex flex-col gap-20">
      <section className="relative xl:w-[1192px] md:h-[374px] p-10 md:rounded-[10px] md:flex justify-around items-center bg-gradient-to-r from-[#DDE5F9] to-[#FDD4D4] dark:bg-gradient-to-r dark:from-[#5E87EF] dark:to-[#F77D7D]">
        <Image
          src={background}
          alt="background"
          className="absolute md:rounded-[10px] z-0"
          layout="fill"
          objectFit="cover"
        />
        <header className="relative md:w-[427px] h-[166px] z-50">
          <h1 className="font-semibold text-[38px] leading-[50px] text-[#0C0D4F] dark:text-white">
            Track
          </h1>
          <h2 className="font-semibold text-[38px] leading-[50px] text-[#0C0D4F] dark:text-white">
            <span>Gas Prices</span> Effortlessly
          </h2>
          <p className="font-medium text-[16px] leading-[25px] text-[#4C4646] dark:text-white">
            Get up-to-the-minute gas price information to plan your transactions
            efficiently.
          </p>
        </header>
        <figure className="relative md:w-[400px] h-[270.68px] z-50">
          <Image src={checklist} alt="checklist" />
        </figure>
      </section>

      <section>
        <form
          onSubmit={handleSubmit}
          className="md:flex grid grid-cols-1 gap-4 self-center items-center p-4"
        >
          <label className="xl:w-[956px] md:flex gap-4 items-center md:h-[54px]">
            <p className="text-[#112C75] dark:text-[#B0B1F3] text-center font-bold text-[16px]">
              Contract Address
            </p>
            <input
              id="addressInput"
              ref={addressInputRef}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onInvalid={handleInvalid}
              onInput={handleInput}
              className="xl:w-[791px] md:w-[400px] w-full h-[54px] pl-4 outline-none border border-gray-300 dark:bg-[#B0B1F3] dark:text-black rounded-[2px]"
              required
            />
          </label>
          <div className=" flex justify-center items-center">
            <button
              type="submit"
              className="md:w-[203px] w-52 h-[55px] bg-[#0C0D4F] text-[#FFFFFF] dark:bg-[#B0B1F3] dark:text-black rounded-[5px] text-[16px]"
            >
              Check
            </button>
          </div>
        </form>
      </section>

      <CheckingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="z-[999]"
      >
        <Checking />
      </CheckingModal>
    </main>
  );
}

export default HomePage;
