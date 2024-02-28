"use client";
import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import { DiLinux } from "react-icons/di";


import { HoverEffect } from "../../components/ui/card-hover-effect";
import {
	SiGit,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiSupabase,
	SiSvelte,
	SiTailwindcss,
    SiMongodb,
} from "react-icons/si";
import Title from "./Title";
export default function Skills() {
	const skills = [
		{
			text: "React",
			Icon: SiReact,
		},
		{
			text: "Next.js",
			Icon: SiNextdotjs,
		},
		{
			text: "Tailwind",
			Icon: SiTailwindcss,
		},
		{
			text: "MongoDB",
			Icon: SiMongodb,
		},
		{
			text: "C++",
			Icon: IoLogoGameControllerB,
		},
		{
			text: "Git",
			Icon: SiGit,
		},
		{
			text: "Node.js",
			Icon: SiNodedotjs,
		},
		{
			text: "Linux",

			Icon: DiLinux,
		},
		{
			text: "Javascript",

			Icon: SiJavascript,
		},
	];

	return (
		<div className=" max-w-5xl mx-auto px-8">
			<Title
				text="Skills"
				className="flex flex-col items-center justify-center -rotate-6"
			/>
			<HoverEffect items={skills} />
		</div>
	);
}