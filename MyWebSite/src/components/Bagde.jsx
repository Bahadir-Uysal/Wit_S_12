import React from "react";

export default function Badge({ text }) {
  return (
    <div className="rounded-full text-white bg-light-purple dark:bg-dark-pblila w-fit px-4 py-2">
      {text}
    </div>
  );
}