import React from "react";

export default function HeaderStats({ headerText }) {
  return (
    <>
      {/* Header */}
      <div className="relative bg-gray-900 bg-opacity-25  md:pt-32 pb-32 pt-12">
        <div className="text-6xl text-black text-center font-semibold">
          {headerText}
        </div>
      </div>
    </>
  );
}
