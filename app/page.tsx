"use client";

import AvatarLogo from "@/components/sections/hero/AvatarLogo";
import Introduction from "@/components/sections/hero/Introduction";
import TransitionPage from "@/components/animations/TransitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat">
        <AvatarLogo
          className={`flex justify-start md:justify-start  md:left-1 absolute w-11/12 md:absolute pt-32 pb-0`}
        />

        <Introduction />
      </div>
    </main>
  );
}
