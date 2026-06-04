
import type {ReactNode} from "react";

type BiographySectionProps = {
    "description": string,
    "profileImage": string,
    'petImages': string[],
    children: ReactNode
}

function BiographySection({description, profileImage, petImages, children}: BiographySectionProps) {
    return (
        <div className=" w-full justify-items-center md:h-120 mb-84 ">
            <div className="flex flex-col md:flex-row h-full
                            w-2/3 m:4/5 lg:w-3/4 xl:w-2/3 max-w-240
                            ">

                <div className="md:w-1/2 h-full  flex flex-col lg:flex-row content-center
                                lg:pr-4">
                    <div className="h-3/4 lg:h-full w-full lg:w-3/4">
                        <img className="h-full object-cover p-1" src={profileImage}/>
                    </div>

                    <div className="h-1/4 lg:h-full w-full lg:w-1/4 flex flex-row lg:flex-col">
                        {petImages.map((image, index) => (
                            <img className="w-1/3 object-cover p-1
                                            lg:w-full lg:h-1/3
                                            "
                                 src={image}/>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2 h-full content-center pl-4 pt-8 lg:pt-0">

                    <div className="text-left whitespace-pre-wrap">
                        <h1 className="w-full font-light tracking-tighter
                        text-2xl md:text-3xl pb-4">
                            
                        </h1>
                        <p>
                            {description}
                        </p>
                        {/*<Button variant="outlined">Outlined</Button>*/}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BiographySection