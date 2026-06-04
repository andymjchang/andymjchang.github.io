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
                     src={image} alt={"Cover"}/>
            </div>
            <div className="px-16 pt-8 text-left">
                <h1 className="
                                font-extrabold tracking-tighter
                                text-5xl md:text-6xl lg:text-7xl
                                whitespace-pre-wrap

                                relative px-[10px] before:absolute before:-z-1 before:content-['']
                                before:bg-teal-700/20 before:h-10 before:left-0 before:-bottom-2 before:w-1/2

                                ">
                    {title}
                </h1>
                <h2 className="py-2 text-2xl font-light">
                    {subtitle}
                </h2>

                <p className="py-5 text-base whitespace-pre-wrap">
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


    const handleLeftClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    }

    const handleRightClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    }

    return (
        <div className="">
            <div ref={carouselRef}
                 className="snap-x snap-proximity flex flex-row overflow-x-scroll scrollbar-none">

                {subsections.map((item, index) => (
                    <div ref={cardRef} key={index}>
                        <div className={`snap-center flex-none m-3 w-xs lg:w-md ${index == 0 ? 'ml-16' : ''}`}>
                            <img className="object-cover rounded-xl h-80 lg:h-80 w-full"
                                 src={item.image} alt={"Cover"}/>
                            <p className="m-4 lg:m-5 px-4 md:px-12">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pb-36">
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
