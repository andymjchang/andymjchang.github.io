import './App.css'

import TitleScreen from "./TitleScreen.tsx";
import ProjectSection from "./ProjectSection.tsx";

import tempImage from './assets/TempImage.jpg'


const HIGHLIGHT_COLOR = "bg-teal-600/30"

const TitleCopy = {
    "name": "Hello! \n I’m Andy Chang,",
    "githubLink": "https://github.com/andymjchang",
    "linkedinLink": "https://www.linkedin.com/in/andy-chang-0639a6262",
    "email":"andymjchang@gmail.com",
    "images":[tempImage,
        tempImage,
        tempImage]
}

function Subtitle() {
    return (
        <div className="text-center">
            a <a className="font-bold animate-highlight"> Gameplay Engineer </a>
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

      <ProjectSection/>

    </>
  )
}

export default App
