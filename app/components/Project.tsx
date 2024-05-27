import React from "react";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import {
	SiNextdotjs,
	SiReactquery,
	SiSupabase,
	SiTailwindcss,
} from "react-icons/si";

export default function Project() {
	const project = [
		{
			title: "Portfolio page",

			teach: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],

			link: "https://anthonysu.me/",

			cover: "/4.png",

			background: "bg-indigo-500",
		},

		{
			title: "Music App",

			teach: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],

			link: "https://my-music-app2023.netlify.app/",

			cover: "/2.png",

			background: "bg-cyan-500",
		},
		{
			title: "Lego Collection",

			teach: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],

			link: "https://lego-collection-nzji.onrender.com/",

			cover: "/1.png",

			background: "bg-pink-500",
		},
		{
			title: "React Poster App",

			teach: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],

			link: "https://react-poster-pi.vercel.app/",

			cover: "/reactPoster.png",

			background: "bg-yellow-500",
		},
	];

	return (
		<div className="py-10 p-5 sm:p-0">
			<Title
				text="Projects"
				className="flex flex-col items-center justify-center rotate-6"
			/>

			<div className="grid lg:gride-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 pt-20 gap-5">
				{project.map((project, index) => {
					return (
						<Link href={project.link} key={index}>
							<div
								className={cn(
									"p-5 rounded-md",
									project.background
								)}
							>
								<DirectionAwareHover
									imageUrl={project.cover}
									className="w-full space-y-5 cursor-pointer"
								>
									<div className="space-y-5">
										<h1 className="text-2xl font-bold">
											{project.title}
										</h1>

										<div className="flex items-center gap-5">
											{project.teach.map(
												(Icon, index) => {
													return (
														<Icon
															className="w-8 h-8"
															key={index}
														/>
													);
												}
											)}
										</div>
									</div>
								</DirectionAwareHover>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
