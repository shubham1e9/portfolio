import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import leetcode from "../assets/leetcode.png"
import gfg from "../assets/gfg.png"
import codechef from "../assets/codechef.png"
import github from "../assets/github.png"
import cn from "../assets/cn.webp"
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[60px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            <a href="https://leetcode.com/shubhamkumarcse/" class="image-link">
            <img className="sec-2-p-e-3" style={{ y: y2 }} src={leetcode} />
            </a>
            <a href="https://auth.geeksforgeeks.org/user/shubhammuz110203/practice" class="image-link">
            <img className="sec-2-p-e-4" style={{ y: y2 }} src={gfg} />
            </a>
            <a href="https://www.codechef.com/users/ahambrahmaasmi" class="image-link">
            <img className="sec-2-p-e-5" style={{ y: y2 }} src={codechef} />
            </a>
            <a href="https://github.com/Shubham-kumar-iem" class="image-link">
                <img className="sec-2-p-e-6" style={{ y: y2 }} src={github} />
            </a>
            <a href="https://www.codingninjas.com/studio/profile/c88bda7c-89d2-45b2-8589-4c7f43ffd053" class="image-link">
                <img className="sec-2-p-e-7" style={{ y: y2 }} src={cn} />
            </a>
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[80px] 2xl:text-[120px] leading-[52px] md:leading-[90px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[30px] 2xl:mb-[60px] flex flex-col relative">
                    <span>Passion Fuels</span>
                    <span className="flex items-center gap-2">
                        <span>Purpose! </span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                Hi! I'm Shubham Kumar, a diligent Bachelor of Technology (B.Tech) 
                student majoring in Computer Science. My journey is characterized by a 
                strong foundation in web development 
                and expertise in data structures and algorithms (DSA).
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                In the domain of web development, I excel at creating seamless, user-centric 
                websites that blend design with functionality. However, my true passion is DSA, 
                where I relish solving intricate problems, optimizing algorithms, and crafting elegant solutions.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                    I'm on a relentless quest for knowledge, continually exploring the 
                    latest technologies and collaborating on innovative projects. 
                    With my unwavering commitment to excellence, I aspire to contribute 
                    positively to the ever-evolving landscape of computer science.
                    <br />
                    Coding the future, one line at a time. Let's innovate together.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
        
    );
};

export default AboutMe;
