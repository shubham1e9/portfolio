import React from "react";
import Div from "./Div";

const Service = ({  title1, title2, title, desc, desc2, head, head1 }) => {
    return (
        
        <Div className="text-white border-b-2 border-[#333333] flex flex-col gap-7 md:gap-1 2xl:gap-1 pb-4">
            <div className="text-[35px] 2xl:text-[34px] text-[#ffffff] uppercase font-semibold	">
                {head}
            </div>
            <div className="text-[30px] 2xl:text-[34px] text-[#ffffff] uppercase font-semibold	">
                {head1}
            </div>

            <div className="text-[24px] 2xl:text-[34px] text-[#EFB946] ">
                <a href="https://drive.google.com/file/d/1XJM8mTygpEat6o365q_LyHIcxEgsMAuS/view">{title1}</a>
            </div>
            <div className="text-[24px] 2xl:text-[34px] text-[#EFB946] ">
                <a href="https://drive.google.com/file/d/1pNVYkaTQWBuWPEa4bdsLBWuIS5Y4tBeX/view">{title2}</a>
            </div>

            <div className="text-[24px] 2xl:text-[34px] text-[#EFB946] ">
                {title}
            </div>

            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC]">
                {desc}
            </div>
            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC]">
                {desc2}
            </div>
        </Div>
    );
};
export default Service;
