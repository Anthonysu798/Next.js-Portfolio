import React from 'react' 

import Head from 'next/head';

import Navbar from "./components/Navbar";

import HeroSection from "./components/HeroSection";

import Skills from "./components/Skills"

import Projects from "./components/Project"

import Footer from "./components/Footer"

import {BackgroundSparkles} from "./components/stars"


export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
    
    <div className="dark:bg-black bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.5] relative">
    
    <div className="max-w-7xl mx-auto p-5 ">
    
    <Navbar />
    
    <HeroSection />
    
    
    </div>
    
    <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
    
    </div> 
    
    {/* Skills */}
    <BackgroundSparkles>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills/>
        <Projects />
        <Footer/>
      </div>
      </BackgroundSparkles>
    </div>
    );
  }