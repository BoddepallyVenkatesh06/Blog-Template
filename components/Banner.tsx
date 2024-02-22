import Image from "next/image";
import { starIcon } from "../public/assets/index";

const Banner = () => {
  return (
    <div className="flex flex-col gap-16 items-center py-28">
      <p className="text-3xl font-titleFont">Writing blog</p>
      <div className="text-7xl font-medium text-gray-50 flex flex-col items-center gap-4">
        <div className="relative">
          <h1>We've Got</h1>
          <Image
            className="absolute w-auto h-auto -top-8 -right-12 animate-spin-slow"
            width={80}
            height={80}
            src={starIcon}
            alt="starIcon"
          />
        </div>
        <h1>
          <span className="font-titleFont">exciting insight</span> FOR YOU
        </h1>
      </div>
    </div>
  );
};

export default Banner;
