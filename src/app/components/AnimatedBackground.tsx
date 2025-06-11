import Image from "next/image";
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute left-[5%] sm:left-[10%] md:left-[16%] top-[50%] sm:top-[85%] md:top-[85%] -translate-y-1/2 animate-float-left">
          <Image
            src="/images/vector.svg"
            alt="Communication Left"
            width={400}
            height={400}
            className="w-[80px] h-[80px] xs:w-[500px] xs:h-[500px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] opacity-100"
            priority
          />
        </div>
        <div className="absolute right-[5%] sm:right-[10%] md:right-[10%] top-[50%] sm:top-[85%] md:top-[85%] -translate-y-1/2 animate-float-right">
          <Image
            src="/images/vector-1.svg"
            alt="Communication Right"
            width={400}
            height={400}
            className="w-[80px] h-[80px] xs:w-[500px] xs:h-[500px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] opacity-90"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
