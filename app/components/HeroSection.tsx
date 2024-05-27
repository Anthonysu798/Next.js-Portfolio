import React from "react"; 
import Link from 'next/link';
import { MovingBorderBtn } from '../../components/ui/moving-border';
import Title from "./Title"



export default function HeroSection() {
    return( 
        
        <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-center">
        <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold" >Nice to meet you! 👋<br/> <span className="underline underline-offset-8 decoration-purple-500">{"I'm Anthony"}</span></h1>
        
        <p className="md:w-96 text-lg text-gray-300">
        
        {"A Fullstack Developer currently studying at Seneca College. I am passionate about creating high-quality UI websites and continually strive to enhance my skills in both front-end and back-end development."}
        </p>
        
        <Link href={"mailto:anthonysu798.ca@gmail.com"} className="inline-block group">
        <Title text="Contact Me 📨"/>
        </Link>
        </div>
        
        <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
        
        <div className="flex gap-3 translate-x-8">
        
        <div className="w-32 h-32 rounded-2xl bg-teal-500"></div>
        <div className="w-32 h-32 rounded-full bg-purple-700"></div>
        
        </div>
        
        <div className="flex gap-3 -translate-x-8">
        
        <div className="w-32 h-32 rounded-2xl bg-purple-700"></div>
        <div className="w-32 h-32 rounded-full bg-teal-500"></div>
        
        </div>
        
        <div className="glow absolute top-[40%] right-1/2 -z-10">
        
        </div>
        
        </div>
        
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
        
        <MovingBorderBtn
        borderRadius="1.5rem"
        className="p-3 font-semibold flex justify-center"
        as="div"
        >
        <a
        href="/AnthonysuResume.pdf"
        download="AnthonySu_Resume.pdf"
        className="flex justify-center items-center w-full h-full"
        >
        ✏️ Available for work
        </a>
        </MovingBorderBtn>
        </div>
        
        
        </div>
        
        </div>
        );
    }