import React from "react";

import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";

const Footer = () => {
    return (
        <div className="bg-[#ececec]">
            <Wrapper>
                {/* NAVBAR START */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-5">
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                            <img src={gmailIcon} alt="" className="w-[18px]" />
                        </div>
                        <div>shubhamcse181@gmail.com</div>
                    </div>
                    <div className="fles flex-row text-center">
                        <div className="font-semibold">Shubham Kumar</div>
                        <div>Inspired by the world, driven by creativity.</div>
                        <div>@copyright 2023. All Rights Reserved.</div>
                    </div>
                </div>
                {/* NAVBAR END */}
            </Wrapper>
        </div>
    );
};

export default Footer;
