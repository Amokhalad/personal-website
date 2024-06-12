import React from 'react';
import About from "@/app/components/About";
import Socials from "@/app/components/Socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left p-24">
      <About></About>
      <Socials></Socials>
    </main>
  );
}
