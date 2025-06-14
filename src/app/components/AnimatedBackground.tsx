import Image from "next/image";
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute left-[5%] sm:left-[5%] md:left-[12%] top-[55%] md:top-[85%] sm-top-[35%] -translate-y-1/2 animate-float-left">
          <Image
            src="/images/Vector2.svg"
            alt="Communication Left"
            width={400}
            height={400}
            className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] opacity-90"
            priority
          />
        </div>
        <div className="absolute right-[5%] sm:right-[5%] md:right-[12%] top-[55%] md:top-[85%] sm-top-[35%] -translate-y-1/2 animate-float-right">
          <Image
            src="/images/Vector1.svg"
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
