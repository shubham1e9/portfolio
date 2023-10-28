import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/s.png";
import sk2 from "../assets/java.png";
import sk11 from "../assets/sql.png";
import sk3 from "../assets/vs-code.png";
import sk4 from "../assets/canva.png";
import sk5 from "../assets/html.png";
import sk6 from "../assets/css.png";
import sk7 from "../assets/javascript.png";
import sk8 from "../assets/tailwind.png";
import sk9 from "../assets/react.png";
import sk10 from "../assets/redux.png";

import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2 shifted-up" style={{ y: y2, x : 550 }} src={pe2} />
            <motion.img className="sec-3-p-e-3 shifted-up" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    
                    <SkillIcon path={sk1} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk11} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} />
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
            
                        <Service
                            head = "Achivements"
                            title1="Data Analytics Virtual Internship"
                            desc="Completed a 10-week Data Analytics Virtual Internship supported by AWS Academy,
                             enhancing proficiency in data analysis and AWS cloud technologies."
                        />
                        <Service
                            title="Leetcode"
                            desc="Solved 400+ questions (max contest rating: 1755)."
                            desc2="Best Leetcode contest ranking - AIR: 210, Global: 1101 (Weekly Contest 356)."
                        />
                        <Service
                            title2="CodingNinjaStdio"
                            desc="Ranked 13th in the college coding competition at CodingNinjaStdio [Feb 2023]."
                            />
                        <Service
                            title="GeeksforGeeks"
                            desc="Total Problem Solved: 250+, overall coding score: 800+."
                            />
                        <Service
                            head1 = "Work"
                            title1="Graphic Designer Co-lead [IEM-CC Kolkata]"
                            desc="Graphic Designer at IEM Coding Club since October 2022, creating visually compelling assets for club support
                            events and promotions."
                        />
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Learning</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                {/* <Achievements /> */}
            </Wrapper>
        </div>
    );
};

export default Skills;
