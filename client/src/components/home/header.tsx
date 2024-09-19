"use client";
import React from 'react';
import Image from 'next/image';
import Logo from './colour.svg';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const scrollToDomain = () => {
        const domainSection = document.getElementById('domain');
        if (domainSection) {
            domainSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navigateHome = () => {
        window.location.href = '/';  // This will navigate to the home page
    };

    return (
        <header className="p-4 bg-[#1A0B2E] text-white relative z-10">
            <div className="flex justify-between items-center">
                <div className="flex items-center cursor-pointer" onClick={navigateHome}>
                    <motion.div
                        className="w-12 h-12 mr-4"
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, delay: 0.1}}
                    >
                        <Image src={Logo} alt="Logo" layout="responsive" width={48} height={48}/>
                    </motion.div>
                    <motion.div
                        className="text-xl font-bold"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <span className="text-white">Data </span>
                        <motion.span
                            className="text-[#8B55E9]"
                            initial={{opacity: 0, x: -10}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                        >
                            Science
                        </motion.span>
                        <br/>
                        Community{" "}
                        <motion.span
                            className="text-[#8B55E9]"
                            initial={{opacity: 0, x: 10}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.6}}
                        >
                            SRM
                        </motion.span>
                    </motion.div>
                </div>

                <motion.a
                    onClick={scrollToDomain}
                    className="sm:mx-2 px-4 py-2 text-sm rounded-full font-semibold text-white bg-gradient-to-r from-[#5A2A9B] to-[#3B1A70] hover:shadow-lg hover:shadow-[#A28EFF]/50 transition-all duration-300 cursor-pointer relative"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-[#6030B5] to-[#59187C] rounded-full opacity-40 blur-md"></span>
                    Apply Now
                </motion.a>

            </div>
        </header>
    );
};

export default Header;
