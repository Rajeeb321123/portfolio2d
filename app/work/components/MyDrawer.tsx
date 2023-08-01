"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import Playbtn from "./Playbtn";
import ReactPlayer from "react-player";
import Image from "next/image";

const MyDrawer = ({ name, link, video, github, description, tags }:
    {
        name: string, description: string, link: string, video: string, github: string, tags: {
            name: string;
            color: string;
        }[]
    }) => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer.Root dismissible={true} open={open}>
            <Drawer.Trigger asChild onClick={() => setOpen(true)}>
                <button
                    className="absolute top-0 bottom-0 right-0 left-0"
                >
                    <Playbtn />
                </button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed top-0 bottom-0 left-0 right-0  z-50">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                        <div className="max-w-md xl:max-w-5xl mx-auto xl:flex xl:items-center xl:justify-center xl:gap-7">

                            <div className="flex-1 flex flex-col">
                                <Drawer.Title className="font-bold mb-4">
                                    {name}
                                </Drawer.Title>
                                <p className="text-zinc-600 mb-2">
                                {description}
                                </p>
                                <div className='hidden xl:flex flex-wrap gap-2'>
                                {tags.map((tag) => (
                                    <p
                                        key={`${name}-${tag.name}`}
                                        className={`${tag.color}`}
                                    >
                                        #{tag.name}
                                    </p>
                                ))}
                                </div>
                            </div>
                            
                            <div className="text-zinc-600 mt-3 mb-6">
                                {/* videoPlayer */}
                                <div className={`rounded-3xl overflow-hidden w-[90%] lg:w-[500px] aspect-video  bg-white  ease-in-out`}>
                                    <ReactPlayer
                                        url={video}
                                        controls
                                        width="100%"
                                        height="100%"
                                        playing={true}
                                    />
                                </div>
                            </div>
                            {/* tags */}
                            <div className=' xl:hidden flex flex-wrap gap-2'>
                                {tags.map((tag) => (
                                    <p
                                        key={`${name}-${tag.name}`}
                                        className={`${tag.color}`}
                                    >
                                        #{tag.name}
                                    </p>
                                ))}
                            </div>
                            <div>

                            </div>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className=" mb-6  hover:scale-110 transition-all bg-gray-900/10  rounded-md  m-4 text-sm font-semibold absolute top-0 right-0 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                            >
                                <Image 
                                    alt='X'
                                    src={'/projectCard/close.png'}
                                    height={48}
                                    width={48}
                                    className="hover:scale-110  w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
                        <div className="flex gap-6 justify-end max-w-md mx-auto ">
                            <a
                                className="text-xs cursor-pointer text-zinc-600 flex items-center gap-0.25"
                                href={github}
                                target="_blank"
                            >
                                Github&apos;s source code
                                <svg
                                    fill="none"
                                    height="16"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    aria-hidden="true"
                                    className="w-3 h-3 ml-1"
                                >
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14L21 3"></path>
                                </svg>
                            </a>
                            <a
                                className="text-xs cursor-pointer text-zinc-600 flex items-center gap-0.25"
                                href={link}
                                target="_blank"
                            >
                                Website Link
                                <svg
                                    fill="none"
                                    height="16"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    aria-hidden="true"
                                    className="w-3 h-3 ml-1"
                                >
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14L21 3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}

export default MyDrawer;