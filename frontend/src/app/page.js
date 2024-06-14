"use client";
import HomePage from "@/components/Home/HomePage";
import ActualFeesProvider from "@/context/ActualFeesContext";

export default function Home() {
  return (
    <ActualFeesProvider>
      <main className="xl:flex xl:min-h-screen flex-col items-center justify-between xl:p-10 pb-10 dark:bg-[#060304] bg-[#FEFAFA]">
        <HomePage />
      </main>
    </ActualFeesProvider>
  );
}
