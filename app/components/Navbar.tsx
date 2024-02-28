import React from 'react';
import Link from 'next/link';
import { cn } from "@/utils/cn";

import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si"; // Icons

export default function Navbar({className}:{className?: string}) {
    const socials = [
        {
            Link: "https://www.linkedin.com/in/anthony-su-08370a24b/",
            Label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            Link: "https://github.com/Anthonysu798",
            Label: "Github",
            Icon: SiGithub,
        },
        {
            Link: "https://mail.google.com/mail/u/1/#inbox?compose=new",
            Label: "Email",
            Icon: SiGmail,
        },
    ];

    return (
        <nav className={cn("py-10 flex justify-between items-center", className)}>
            {/* Wrap the h1 element with a Link component */}
            <Link href="/" passHref>
                <h1 className="text-2xl font-bold underline underline-offset-8 decoration-purple-500 -rotate-2 cursor-pointer">Anthony Su 👨🏼‍💻</h1>
            </Link>
            <div className="flex items-center gap-5">
                {socials.map((social, index) => (
                    <Link href={social.Link} key={index} aria-label={social.Label} passHref>
                        {React.cloneElement(<social.Icon />, { className: "w-5 h-5 hover:scale-125 transition-all" })}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
