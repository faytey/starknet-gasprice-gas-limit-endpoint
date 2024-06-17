import React from "react";
import background from "@/../public/assets/Group.png";
import Image from "next/image";

function About() {
  return (
    <main className="flex flex-col gap-10 p-2 pt-10">
      <section className="xl:w-[1192px] h-[124px] dark:text-white flex justify-start p-10 items-center rounded-[10px] bg-gradient-to-r from-[#DDE5F9] to-[#FDD4D4] dark:bg-gradient-to-r dark:from-[#5E87EF] dark:to-[#F77D7D] relative">
        <Image
          src={background}
          alt="background"
          className="absolute xl:w-[1192px] h-[124px] rounded-[10px]"
        />
        <header className="relative z-10">
          <h1 className="text-[28px] font-semibold">ABOUT GASWATCH</h1>
        </header>
      </section>

      <section className="xl:w-[1180px] flex flex-col gap-6 dark:text-white">
        <article>
          <p className="text-[16px] leading-[35px] font-normal">
            Welcome to <span className="font-bold">GasWatch,</span> your premier
            resource for monitoring the gas required to deploy contracts on the
            Starknet network. In the fast-paced world of blockchain, staying
            informed about deployment costs is crucial. GasWatch provides you
            with precise and timely information, enabling you to make
            well-informed decisions and optimize your smart contract deployments
            on Starknet.
          </p>
        </article>

        <article>
          <h2 className="font-bold text-[16px] leading-[35px]">Our Mission</h2>
          <p className="text-[16px] leading-[35px] font-normal">
            At GasWatch, our mission is to empower developers, investors, and
            blockchain enthusiasts with the tools and data they need to navigate
            the complexities of contract deployment costs. We aim to make
            blockchain technology more accessible and efficient by providing
            clear, accurate, and real-time insights.
          </p>
        </article>

        <article>
          <h2 className="font-bold text-[16px] leading-[35px]">
            What We Offer
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-4 text-[16px] leading-[35px]">
            <li>
              Gas Cost Estimates: Access the latest information on gas required
              to deploy contracts on Starknet, allowing you to plan your
              deployments efficiently and manage costs.
            </li>
            <li>
              User-Friendly Interface: Our platform is designed with simplicity
              and ease of use in mind, making it suitable for both beginners and
              experts in the blockchain space.
            </li>
            <li>
              Reliable Data: We leverage advanced technology to deliver precise
              and dependable information, helping you stay ahead in the dynamic
              world of blockchain.
            </li>
          </ul>
        </article>

        <article>
          <h2 className="font-bold text-[16px] leading-[35px]">
            Why Choose GasWatch?
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-4 text-[16px] leading-[35px]">
            <li>
              Accuracy: We provide up-to-date and accurate gas cost estimates to
              help you make the best decisions.
            </li>
            <li>
              Efficiency: Our real-time updates ensure you have the information
              you need when you need it.
            </li>
            <li>
              Transparency: We believe in open and transparent access to
              blockchain data, fostering a more informed and engaged community.
            </li>
          </ul>
        </article>

        <footer>
          <p>
            Join the GasWatch community today and take control of your Starknet
            contract deployments. Whether you&apos;re deploying a new contract,
            managing investments, or simply staying informed, GasWatch is here
            to support your blockchain journey.
          </p>
        </footer>
      </section>
    </main>
  );
}

export default About;
