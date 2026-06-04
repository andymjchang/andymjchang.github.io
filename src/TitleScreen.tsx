import tempImage from './assets/TempImage.jpg'

import type {ReactNode} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Link from '@mui/material/Link';

import "./app.css";
import LinkSection from "./LinkSection.tsx";


type TitleContainerProps = {
    header: string,
    githubLink: string,
    linkedinLink: string,
    email: string,
    children: ReactNode
}

type ImageContainerProps = {
    images: string[]
}

type TitleScreenProps = TitleContainerProps & ImageContainerProps;


function TitleContainer (
    {header, githubLink, linkedinLink, email, children}:
    TitleContainerProps) {
    return (
        <div className="h-1/2 content-center pt-12 w-full justify-items-center">
        <div className="max-w-240">
            <h2 className="font-light tracking-tighter text-center
                        text-3xl md:text-4xl md:px-40 py-2">
                {header}
            </h2>
            <h3 className="font-light tracking-tighter text-center
                        text-xl md:text-2xl md:px-40">
                {children}
            </h3>

            <LinkSection
                githubLink={githubLink}
                linkedinLink={linkedinLink}
                email={email}
            />

            <div className="flex flex-row justify-center w-full pt-6">
                <div className="flex flex-none justify-center bg-mist-100">
                    <ArrowDownwardRoundedIcon className="mr-1"/>
                    <h3 className="content-center font-bold tracking-tighter mr-1">
                        Scroll for More
                    </h3>
                </div>
            </div>

        </div>
        </div>
    )
}

function ImageContainer ({images}: ImageContainerProps) {
    return (
        <div className="flex flex-row h-1/2 w-full">
            <img className="object-cover flex-1 min-w-0"
                 src={images[0]} alt={"Cover"}/>
            <img className="mx-1 object-cover flex-2 min-w-0"
                 src={images[1]} alt={"Cover"}/>
            <img className="object-cover flex-1 min-w-0"
                 src={images[2]} alt={"Cover"}/>
        </div>
    )
}



function TitleScreen({header, githubLink, linkedinLink, email, images, children
                     }: TitleScreenProps) {

    return (
        <>

            <div className="h-screen mb-32">
                <TitleContainer
                    header={header}
                    githubLink={githubLink}
                    linkedinLink={linkedinLink}
                    email={email}
                    children={children}
                />
                <ImageContainer
                    images={images}
                />

            </div>


        </>
    )
}

export default TitleScreen
