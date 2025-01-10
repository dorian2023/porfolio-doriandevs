"use client";

import AvatarLogo from "@/components/avatar-logo";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

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
