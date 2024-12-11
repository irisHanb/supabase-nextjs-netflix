import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        className="w-8 h-auto"
        src="/images/dropbox_icon.png"
        alt="dropbox icon"
        width={50}
        height={30}
      />
      <h1 className="text-xl font-bold">Minibox</h1>
    </div>
  );
}
