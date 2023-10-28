import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import Div from "./Div";
import pe1 from "../assets/sec-4-p-e-1.png";
import pe2 from "../assets/sec-4-p-e-2.png";
import iem from "../assets/iem.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 4000], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });
    return (
        <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img
                className="sec-4-p-e-1 rellax"
                style={{ y: y1, x:750 }}
                src={pe1}
            />
            <motion.img
                className="sec-4-p-e-2 rellax"
                style={{ y: y2 }}
                src={pe2}
            />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[30px] md:text-[90px] 2xl:text-[120px] leading-[30px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
                       Education
                    </div>
                    {/* <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </div> */}
                </Div>
                {/* SECTION HEADING END */}

                {/* CAROUSEL START */}
                <Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
                        {/* SLIDE START */}
                        <div className="text-black flex  flex-col px-[25px] md:px-[50px] py-[50px]">
                            
                            <div className="mb-[25px]">
                                <img
                                    src={iem}
                                    className="w-[80px] max-w-[80px]"
                                />
                                <div className="font-bold">Institute of Enginnering
                                    and Management Kolkata,WB</div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black">
                                Bachelor of Technology in Computer Science & Engineering <br /> [2022 – 2025]
                                </div>
                            </div>

                            <div className="mb-[25px]">
                                <img
                                    src="https://media.licdn.com/dms/image/C560BAQF7iTOoL1JORA/company-logo_100_100/0/1584505939206/government_polytechnic_college_logo?e=1706140800&v=beta&t=U_Cq-8fYZPB8Z7sm7O6tusoCPVX6hGKEjoF2nCZFkl8"
                                    className="w-[80px] max-w-[80px]"
                                />
                                <div className="font-bold">Government Polytechnic Darbhanga, Bihar</div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black">
                                Diploma in Computer Science & Engineering <br /> [2019 – 2022]
                                </div>
                            </div>
                           
                        </div>
                        {/* SLIDE END */}
                        
                </Div>

                {/* CAROUSEL END */}
            </Wrapper>
        </div>
    );
};

export default Testimonials;
