import About from "@/components/About/About";
import React from "react";

function page() {
  return (
    <main className="xl:flex xl:min-h-screen flex-col items-center justify-between xl:p-10 dark:bg-[#060304] bg-[#FEFAFA]">
      <About />
    </main>
  );
}

export default page;
