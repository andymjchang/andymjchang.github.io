import { useState } from 'react'
import tempImage from './assets/TempImage.jpg'
import Sticky from 'react-stickynode'; // react-stickynode to handle sticky states

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


import "./app.css";
import {AppBar, Slide, Toolbar, useScrollTrigger} from "@mui/material";


type statusData = {
    status: number;
};

function HideOnScroll() {
    const trigger = useScrollTrigger();
    return (
        <Slide in={!trigger}>
            <header className="bg-gray-900">
                Andy Chang / Gameplay Engineer
            </header>
        </Slide>
    );
}


function ProjectSection() {
    const [isTitleReleased, setIsTitleReleased] = useState(false);

    const handleStateChange = (status: statusData) => {
        if (status.status === Sticky.STATUS_RELEASED) {
            console.log(status);
            setIsTitleReleased(true);
        }
    }

    const handleFreeze = () => {
        return isTitleReleased;
    };


    return (
        <div className="">

            <div className="relative w-full h-96 md:h-156 ">

                <div className="relative h-full w-full">
                    <img className="absolute h-full w-full object-cover"
                         src={tempImage} alt={"Cover"}/>
                    {/*<div className="absolute h-full w-full bg-linear-to-b from-transparent from-80% to-white "></div>*/}

                </div>
                <h1 className="absolute w-full left-0 font-extrabold tracking-tighter text-left
                                px-16
                                -bottom-6 md:-bottom-7 lg:-bottom-8
                                text-5xl md:text-6xl lg:text-7xl stroke-white">
                   <a className="bg-mist-100/30"> Vegetables of <br/> Mass Destruction </a>
                </h1>
            </div>
            <h2 className="pt-8 md:pt-9 lg:pt-10
                            px-16
                            w-full left-0  text-2xl font-light text-left">
                Gameplay Engineer / C++, Unreal Engine 5, Blueprints
            </h2>

            <p className="pt-2 md:pt-3 lg:pt-4
                            px-16
                            w-full left-0 text-base text-left">
                something about what the game is about, something about what the game is about

            </p>





            <div className="flex flex-row pl-16 overflow-x-scroll">

                <div className="flex-none m-2 pl-0 w-xs">
                    <img className=" object-cover rounded-xl h-60"
                         src={tempImage} alt={"Cover"}/>
                    <p className="">
                        ctfghjbnbvcftuyguhjbn vjcgfygkuhj
                        knbvkfiyt7ouyhbjkhvkghiu
                        yhibjvjkfyigt7y8ihukbn
                    </p>
                </div>
                <div className="flex-none m-2 w-xs">
                    <img className="object-cover rounded-xl h-60"
                         src={tempImage} alt={"Cover"}/>
                    <p className="">
                        ctfghjbnbvc ftuyguhjbn vjcgf ygkuhj
                        knbvk fiyt7ouyhbj khvkghiu
                        yhibjvjkfyigt7y8ihukbn
                    </p>
                </div>
                <div className="flex-none m-2 w-xs">
                    <img className="object-cover rounded-xl h-60"
                         src={tempImage} alt={"Cover"}/>
                    <p className="">
                        ctfghjbn bvc ftuy guhjbn vjcgfygkuhj
                        knbvkf iy t7ouy hbjk hvk ghiu
                        yhibjvjk fyigt 7y8ih uk bn
                    </p>
                </div>
            </div>
            <div className="">
                <ArrowBackRoundedIcon/>
                <ArrowForwardRoundedIcon/>
            </div>

        </div>
    )
}

export default ProjectSection
