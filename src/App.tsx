import './App.css'

import TitleScreen from "./TitleScreen.tsx";
import ProjectSection from "./ProjectSection.tsx";
import BiographySection from "./BiographySection.tsx";

import tempImage from './assets/TempImage.jpg'

import DumpsterDiverImage1 from './assets/DumpsterDivers/1.webp'
import DumpsterDiverImage2 from './assets/DumpsterDivers/2.webp'
import DumpsterDiverImage3 from './assets/DumpsterDivers/3.webp'
import DumpsterDiverImage4 from './assets/DumpsterDivers/4.webp'
import DumpsterDiverImage5 from './assets/DumpsterDivers/5.webp'


import PersonalImage1 from './assets/Personal/1.webp'
import PersonalImage2 from './assets/Personal/2.webp'
import PersonalImage3 from './assets/Personal/3.webp'
import PersonalImage4 from './assets/Personal/4.webp'
import LinkSection from "./LinkSection.tsx";



const HIGHLIGHT_COLOR = "bg-teal-700/20"

const TitleCopy = {
    "name": "Hello! I’m Andy Chang,",
    "githubLink": "https://github.com/andymjchang",
    "linkedinLink": "https://www.linkedin.com/in/andy-chang-0639a6262",
    "email":"andymjchang@gmail.com",
    "images":[tempImage,
        tempImage,
        tempImage]
}

const DumpsterDiverCopy = {
    "title": "Vegetables of Mass Destruction",
    "subtitle": "Gameplay Engineer / C++, Unreal Engine 5, Blueprints",
    "description": "A 3D roguelite hack ‘n’ slash. Play as a feisty raccoon and free the farm from robot invaders!\nShipped to Steam with over 28,000 downloads. ",
    "image": DumpsterDiverImage5,
    "subsections": [
        {
            "description": "Designed and implemented 3 weapon classes, 7 enemies, and 20+ character upgrades",
            "image": DumpsterDiverImage1,
        },
        {
            "description": "Built state/behavior trees for the combat systems, character animations, and complex NPC AI",
            "image": DumpsterDiverImage2,
        },
        {
            "description": "Optimized for desktop/mobile platforms using Unreal Insights to profile and identify frame‑rate bottlenecks",
            "image": DumpsterDiverImage3,
        },
        {
            "description": "Established weekly playtest feedback loops, boosting playtester ratings by 40% over 4 months",
            "image": DumpsterDiverImage4,
        },
        {
            "description": "Shipped to Steam with over 28,000 downloads",
            "image": DumpsterDiverImage5,
        },
    ]
}

const BiographyCopy = {
    "description": "I'm Andy, a game developer based in Austin, TX. " +
        "My game development journey started by learning to code through GameMaker YouTube tutorials as a kid, " +
        "and I've been building games ever since. \n\nMy favorite games and biggest inspirations are Outer Wilds, " +
        "Hollow Knight, and Factorio. I love metroidvanias and roguelikes, and " +
        "I've also wasted 5,000 hours of my life getting Challenger in TFT.",
    "profileImage": PersonalImage4,
    "petImages": [PersonalImage1, PersonalImage2, PersonalImage3]
}

function Subtitle() {
    return (
        <div className="text-center">
            a <a className="font-bold animate-highlight">
            Gameplay Engineer </a>
            with a focus on <a className={HIGHLIGHT_COLOR}>optimization</a>
            ,<a className={HIGHLIGHT_COLOR}> tool development</a>
            , and <a className={HIGHLIGHT_COLOR}>intelligent AI entities</a>.
        </div>
    )
}

function App() {

  return (
    <>
        <TitleScreen
            header={TitleCopy.name}
            githubLink={TitleCopy.githubLink}
            linkedinLink={TitleCopy.linkedinLink}
            email={TitleCopy.email}
            images={TitleCopy.images}
        >
          <Subtitle/>
        </TitleScreen>

        <ProjectSection
            title={DumpsterDiverCopy.title}
            subtitle={DumpsterDiverCopy.subtitle}
            description={DumpsterDiverCopy.description}
            image={DumpsterDiverCopy.image}
            subsections={DumpsterDiverCopy.subsections}
        />

        <ProjectSection
            title={DumpsterDiverCopy.title}
            subtitle={DumpsterDiverCopy.subtitle}
            description={DumpsterDiverCopy.description}
            image={DumpsterDiverCopy.image}
            subsections={DumpsterDiverCopy.subsections}
        />
        <ProjectSection
            title={DumpsterDiverCopy.title}
            subtitle={DumpsterDiverCopy.subtitle}
            description={DumpsterDiverCopy.description}
            image={DumpsterDiverCopy.image}
            subsections={DumpsterDiverCopy.subsections}
        />
        <ProjectSection
            title={DumpsterDiverCopy.title}
            subtitle={DumpsterDiverCopy.subtitle}
            description={DumpsterDiverCopy.description}
            image={DumpsterDiverCopy.image}
            subsections={DumpsterDiverCopy.subsections}
        />
        <BiographySection
        description={BiographyCopy.description}
        profileImage={BiographyCopy.profileImage}
        petImages={BiographyCopy.petImages}>
            <LinkSection
                githubLink={TitleCopy.githubLink}
                linkedinLink={TitleCopy.linkedinLink}
                email={TitleCopy.email}
            />
        </BiographySection>
    </>
  )
}

export default App
