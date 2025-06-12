import Image from "next/image";
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute left-[2%] sm:left-[5%] md:left-[6%] top-[85%] md:top-[85%] -translate-y-1/2 animate-float-left">
          <Image
            src="/images/communication-left.svg"
            alt="Communication Left"
            width={400}
            height={400}
            className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] opacity-90"
            priority
          />
        </div>
        <div className="absolute right-[2%] sm:right-[5%] md:right-[6%] top-[85%] md:top-[85%] -translate-y-1/2 animate-float-right">
          <Image
            src="/images/communication-right.svg"
            alt="Communication Right"
            width={400}
            height={400}
            className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] opacity-90"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;