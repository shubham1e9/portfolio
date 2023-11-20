import React from "react";

import Wrapper from "./Wrapper";
import Form from "./Form";
import Div from "./Div";

import ig1 from "../assets/ig1.png";
import tw1 from "../assets/twitter (2).png";
import hm from "../assets/home.png";
import ph from "../assets/phone-call.png";

const Contact = () => {
    return (
        <div
            id="contact"
            className="w-full py-[50px] md:py-[100px] bg-[#F2F2F2] relative overflow-hidden"
        >
            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
                        Let’s Talk
                    </div>
                    <div className="flex flex-row text-slate-500 font-medium mt-7">
                        <img className="w-5 h-5 mr-1 ml-24" src={hm} />
                        <p className=" hover:decoration-slate-600 hover:underline">Muzaffarpur, Bihar</p>
                        <img className="w-5 h-5 mr-1 ml-10" src={ph} />
                        <p className="hover:decoration-slate-600 hover:underline">+91-74919-63501</p>
                        <img className="w-6 h-6 mr-1 ml-10" src={ig1} />
                        <a className="hover:decoration-slate-600 hover:underline" href="https://www.instagram.com/shubham.roy._/">@shubham.roy._</a>
                        <img className="w-5 h-5 mr-1 ml-10" src={tw1} />
                        <a className="hover:decoration-slate-600 hover:underline" href="https://twitter.com/Shubham01kumar">@Shubham01kumar</a>
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                <Form />
            </Wrapper>
        </div>
    );
};

export default Contact;
