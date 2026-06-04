import './App.css'

import TitleScreen from "./TitleScreen.tsx";
import ProjectSection from "./ProjectSection.tsx";

import tempImage from './assets/TempImage.jpg'
import {Title} from "@mui/icons-material";


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
    "title": "Vegetables of\nMass Destruction",
    "subtitle": "Gameplay Engineer / C++, Unreal Engine 5, Blueprints",
    "description": "Andy Chang",
    "image": tempImage,
    "subsections": [
        {
            "description": "Designed and implemented 3 weapon classes, 7 enemies, and 20+ character upgrades",
            "image": tempImage,
        },
        {
            "description": "Built state/behavior trees for the combat systems, character animations, and complex NPC AI",
            "image": tempImage,
        },
        {
            "description": "Optimized for desktop/mobile platforms using Unreal Insights to profile and identify frame‑rate bottlenecks",
            "image": tempImage,
        },
        {
            "description": "Established weekly playtest feedback loops, boosting playtester ratings by 40% over 4 months",
            "image": tempImage,
        },
        {
            "description": "Shipped to Steam with over 28,000 downloads",
            "image": tempImage,
        },
    ]
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

    </>
  )
}

export default App
