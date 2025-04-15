// "use client";

// import PrimaryButton from "src/app/components/buttons/PrimaryButton";
// import React from "react";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 h-auto flex justify-between items-center p-4 bg-white shadow-sm border-b border-black-100 px-20">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <Image src="/polygon.svg" alt="Polygon" width={30} height={30}></Image>
//         <span className="text-2xl font-bold">EzyTaskin</span>
//       </div>

//       {/* Navigation Links */}
//       <div className="text-xl flex gap-20">
//         <a
//           href="#"
//           className="text-[var(--color-primary)] font-medium text-lg hover:text-[var(--color-secondary)]"
//         >
//           Home
//         </a>
//         <a href="#" className="hover:text-[var(--color-secondary)] font-medium text-lg">
//           How it works
//         </a>
//         <a href="#" className="hover:text-[var(--color-secondary)] font-medium text-lg">
//           Login
//         </a>
//         <a href="#" className="hover:text-[var(--color-secondary)] font-medium text-lg">
//           Sign up
//         </a>
//       </div>

//       {/* Button */}
//       <PrimaryButton width="w-4xs" fontStyle="font-bold" />
//     </header>
//   );
// };

// export default Header;

"use client";

import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-auto flex justify-between items-center p-4 bg-white shadow-sm border-b border-black-100 px-20">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/polygon.svg" alt="Polygon" width={30} height={30}></Image>
        <span className="text-2xl font-bold">EzyTaskin</span>
      </div>

      {/* Navigation Links */}
      <div className="text-xl flex gap-12">
        <a
          href="#"
          className="text-[var(--color-primary)] font-medium hover:text-[var(--color-secondary)] text-lg"
        >
          Home
        </a>
        <a
          href="#"
          className="font-medium hover:text-[var(--color-secondary)] text-lg"
        >
          Browse task
        </a>
        <a
          href="#"
          className="font-medium hover:text-[var(--color-secondary)] text-lg"
        >
          My task
        </a>
        <a
          href="#"
          className="font-medium hover:text-[var(--color-secondary)] text-lg"
        >
          Find Providers
        </a>
      </div>

      {/* Button */}
      <PrimaryButton width="w-4xs" fontStyle="font-bold" />
      <div className="text-xl flex gap-8 items-center">
        <Image
          src="/bell-notifications.svg"
          alt="Icon Notification"
          width={0}
          height={0}
          className="w-8 h-8"
          unoptimized
        />

        <Image
          src="/chat.svg"
          alt="Chat"
          width={0}
          height={0}
          className="w-10 h-10"
          unoptimized
        />
        <Image
          src="/icon-user.svg"
          alt="User Icon "
          width={0}
          height={0}
          className="w-8 h-8"
          unoptimized
        />
      </div>
    </header>
  );
};

export default Header;
