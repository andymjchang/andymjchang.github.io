import './App.css'

import TitleScreen from "./TitleScreen.tsx";
import ProjectSection from "./ProjectSection.tsx";
import BiographySection from "./BiographySection.tsx";

import tempImage from './assets/TempImage.jpg'

import DumpsterDiverImage1 from './assets/DumpsterDivers/1.webp'
import DumpsterDiverImage2 from './assets/DumpsterDivers/2.webp'
import DumpsterDiverImage4 from './assets/DumpsterDivers/4.webp'
import DumpsterDiverImage5 from './assets/DumpsterDivers/5.webp'
import DumpsterDiverImage6 from './assets/DumpsterDivers/6.webp'
import DumpsterDiverImage7 from './assets/DumpsterDivers/7.webp'




import PersonalImage1 from './assets/Personal/1.webp'
import PersonalImage2 from './assets/Personal/2.webp'
import PersonalImage3 from './assets/Personal/3.webp'
import PersonalImage4 from './assets/Personal/4.webp'


import DreadReignImage1 from './assets/DreadReign/1.webp'
import DreadReignImage2 from './assets/DreadReign/2.webp'
import DreadReignImage3 from './assets/DreadReign/4.webp'
import DreadReignImage4 from './assets/DreadReign/5.webp'
import DreadReignImage5 from './assets/DreadReign/5.webp'
import DreadReignImage6 from './assets/DreadReign/6.webp'
import DreadReignImage7 from './assets/DreadReign/7.webp'
import DreadReignImage8 from './assets/DreadReign/8.webp'
import DreadReignImage9 from './assets/DreadReign/9.webp'

import TempoTailsImage1 from './assets/TempoTails/1.webp'
import TempoTailsImage2 from './assets/TempoTails/2.webp'
import TempoTailsImage3 from './assets/TempoTails/3.webp'
import TempoTailsImage4 from './assets/TempoTails/4.webp'




import LinkSection from "./LinkSection.tsx";



const HIGHLIGHT_COLOR = "bg-teal-700/20"

const TitleCopy = {
    "name": "Hello! I’m Andy Chang,",
    "githubLink": "https://github.com/andymjchang",
    "linkedinLink": "https://www.linkedin.com/in/andy-chang-0639a6262",
    "email":"andymjchang@gmail.com",
    "images":[DreadReignImage2,
        DumpsterDiverImage5,
        TempoTailsImage4]
}

const DreadReignCopy = {
    "title": "DreadReign",
    "subtitle": "Gameplay Engineer at Mechanical Moonworks / C#, Unity",
    "description": "A 3D action dungeon crawler where players control the 4 heroes in their party simultaneously.",
    "image": DreadReignImage4,
    "subsections": [
        {
            "description": "Led the skill tree rework, implementing 4 new character kits and 30+ new abilities",
            "image": DreadReignImage8,
        },
        {
            "description": "Designed behavior tree AI for 10+ enemy characters, including complex states and 3D nav-mesh pathfinding",
            "image": DreadReignImage7,
        },
        {
            "description": "Improved FPS by 30% by creating a custom object pooling system to handle 50+ concurrent NPCs",
            "image": DreadReignImage9,
        },
        {
            "description": "Built a visualization tool that reduced balancing iteration time by 20%",
            "image": DreadReignImage6,
        }
    ]
}


const DumpsterDiverCopy = {
    "title": "Vegetables of Mass Destruction",
    "subtitle": "Gameplay Engineer / C++, Unreal Engine 5, Blueprints",
    "description": "A 3D roguelite hack ‘n’ slash. Play as a feisty raccoon and free the farm from robot invaders!",
    "image": DumpsterDiverImage5,
    "link": 'https://store.steampowered.com/app/3733590/Vegetables_of_Mass_Destruction/',
    "subsections": [
        {
            "description": "Designed and implemented 3 weapon classes, 7 enemies, and 20+ character upgrades",
            "image": DumpsterDiverImage2,
        },
        {
            "description": "Built state/behavior trees for the combat systems, character animations, and complex NPC AI",
            "image": DumpsterDiverImage6,
        },
        {
            "description": "Utilized Gameplay Ability System (GAS) to create a roguelite system with 20+ upgrades",
            "image": DumpsterDiverImage4,
        },
        {
            "description": "Established weekly playtest feedback loops, boosting playtester ratings by 40% over 4 months",
            "image": DumpsterDiverImage1,
        },
        {
            "description": "Shipped to Steam with over 28,000 downloads",
            "image": DumpsterDiverImage7,
        },
    ]
}


const TempoTailsCopy = {
    "title": "Tempo Tails",
    "subtitle": "Gameplay Engineer / GDScript, C#, Godot",
    "description": "A 2D rhythm platformer where players jump and punch enemies to the beat of the music!",
    "image": TempoTailsImage4,
    "link": "https://kayreo.itch.io/tempo-tails",
    "subsections": [
        {
            "description": "Implemented the movement physics and rhythm based scoring",
            "image": TempoTailsImage3,
        },
        {
            "description": "Developed a custom level editor tool to automatically place objects on rhythm timings for level designers",
            "image": TempoTailsImage1,
        },
        {
            "description": "Utilized automated unit testing using Godot Unit Test (GUT) to reduce regression bugs",
            "image": TempoTailsImage2,
        }
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
            title={DreadReignCopy.title}
            subtitle={DreadReignCopy.subtitle}
            description={DreadReignCopy.description}
            image={DreadReignCopy.image}
            subsections={DreadReignCopy.subsections}
        />

        <ProjectSection
            title={DumpsterDiverCopy.title}
            subtitle={DumpsterDiverCopy.subtitle}
            description={DumpsterDiverCopy.description}
            image={DumpsterDiverCopy.image}
            subsections={DumpsterDiverCopy.subsections}
            link={DumpsterDiverCopy.link}
        />
        <ProjectSection
            title={TempoTailsCopy.title}
            subtitle={TempoTailsCopy.subtitle}
            description={TempoTailsCopy.description}
            image={TempoTailsCopy.image}
            link={TempoTailsCopy.link}
            subsections={TempoTailsCopy.subsections}
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
