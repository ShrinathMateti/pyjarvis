import React from "react";

export default function Banner() {
  return (
    <div>
      <img
        src="/src/assets/pythondeskbanner.jpg"
        alt="dbanner"
        className="hidden sm:block"
      />
      <img
        src="/src/assets/pythonmobilebanner.jpg"
        alt="mbanner"
        className="block sm:hidden w-full h-auto"
      />
    </div>
  );
}
