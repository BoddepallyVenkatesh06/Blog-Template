import Image from "next/image";
import { blog1 } from "../public/assets";

const BlogCard = ({ image, title, subTitle, btnText }: any) => {
  return (
    <div className="w-full h-[420px] group">
      <div className="w-full h-3/4 overflow-hidden">
        <Image
          className="w-full h-full group-hover:scale-110 duration-300"
          src={image}
          alt="blogImage"
        />
      </div>
      <div className="w-full h-1/4 flex flex-col gap-3 mt-3">
        <h3 className="text-lg font-medium text-gray-100 group-hover:text-textDesignColor duration-200">
          {title}
        </h3>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <p className="flex items-center gap-2">
            <span className="w-10 h-[1px] bg-gray-200 inline-flex"></span>
            {subTitle}
          </p>
          <button className="text-base border-[1px] border-zinc-600 px-2 py-[1px] italic hover:border-textDesignColor duration-300">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
