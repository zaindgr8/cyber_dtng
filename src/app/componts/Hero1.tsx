import React from "react";
import Image from "next/image";
import Logo1 from "../assets/logos/logo1.png";
import Logo2 from "../assets/logos/logo2.png";
import Logo3 from "../assets/logos/logo3.png";
import Logo4 from "../assets/logos/logo4.png";
import Logo5 from "../assets/logos/logo5.png";
import Logo6 from "../assets/logos/logo6.png";

const Hero1 = () => {
  return (
    <div className="bg-white flex justify-center items-center py-4 px-5">
      <div className="flex justify-around items-center gap-4 flex-wrap w-full">
        <Image src={Logo1} alt="Logo 1" width={80} height={80} />
        <Image src={Logo2} alt="Logo 2" width={80} height={80} />
        <Image src={Logo3} alt="Logo 3" width={80} height={80} />
        <Image src={Logo4} alt="Logo 4" width={80} height={80} />
        <Image src={Logo5} alt="Logo 5" width={80} height={80} />
        <Image src={Logo6} alt="Logo 6" width={80} height={80} />
      </div>
    </div>
  );
};

export default Hero1;
