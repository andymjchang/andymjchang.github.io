import tempImage from './assets/TempImage.jpg'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';


import "./app.css";
import {type MouseEventHandler, useLayoutEffect, useRef, useState} from "react";
import {IconButton} from "@mui/material";

type ProjectTitleContainerProps = {
    "title": string;
    "subtitle": string;
    "description": string;
    "image": string;
}

type subsectionsProps = {
    "description": string;
    "image": string;
}

type ProjectSubsectionProps = {
    "subsections": subsectionsProps[]
}

type ProjectSectionProps = ProjectTitleContainerProps & ProjectSubsectionProps

function ProjectTitleContainer({ title, subtitle, description, image }: ProjectTitleContainerProps) {
    return (
        <>
            <div className="h-140">
                <img className="h-full w-full object-cover"
                     src={tempImage} alt={"Cover"}/>
            </div>
            <div className="px-16 pt-8 text-left">
                <h1 className="
                                font-extrabold tracking-tighter
                                text-5xl md:text-6xl lg:text-7xl
                                whitespace-pre-wrap">
                    {title}
                </h1>
                <h2 className="py-2 text-2xl font-light">
                    {subtitle}
                </h2>

                <p className="py-5 text-base">
                    {description}
                </p>
            </div>
        </>
    )
}


function ProjectSubsectionsContainer({ subsections }: ProjectSubsectionProps) {
    const carouselRef  = useRef<HTMLDivElement | null>(null);
    const cardRef  = useRef<HTMLDivElement | null>(null);
    const [cardWidth, setCardWidth] = useState(0);


    useLayoutEffect(() => {
        if (cardRef.current) {
            // Call getBoundingClientRect() to fetch layout metrics
            const rect = cardRef.current?.getBoundingClientRect();
            setCardWidth(rect.width);
        }
    }, []);


    const handleLeftClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (carouselRef.current) {
            console.log("moving to the left");
            carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    }

    const handleRightClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (carouselRef.current) {
            console.log("moving to the right");
            carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    }

    return (
        <div className="">
            <div ref={carouselRef}
                 className="snap-x snap-proximity flex flex-row overflow-x-scroll">

                {subsections.map((item, index) => (
                    <div ref={cardRef} key={index}>
                        <div className={`snap-center flex-none m-3 w-xs ${index == 0 ? 'ml-16' : ''}`}>
                            <img className="object-cover rounded-xl h-60"
                                 src={item.image} alt={"Cover"}/>
                            <p className="">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                <IconButton onClick={handleLeftClick}>
                    <ArrowBackRoundedIcon/>
                </IconButton>
                <IconButton onClick={handleRightClick}>
                    <ArrowForwardRoundedIcon/>
                </IconButton>
            </div>
        </div>
    )
}


function ProjectSection({ title, subtitle, description, image, subsections}
                        : ProjectSectionProps) {

    return (
        <div className="">

            <ProjectTitleContainer
            title={title}
            subtitle={subtitle}
            description={description}
            image={image}/>

            <ProjectSubsectionsContainer
            subsections={subsections}/>
        </div>
    )
}

export default ProjectSection
