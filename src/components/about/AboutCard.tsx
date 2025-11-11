import AboutCardConst from "@/constants/AboutCard";
import AboutCardItem from "./AboutCardItem";

export default function AboutCard(){
    return(
        <div className="flex flex-row gap-5 justify-between">
            {AboutCardConst.map((aboutCard, index) =>
            <AboutCardItem key={index} heading={aboutCard.heading} text={aboutCard.text}/>
            )}
        </div>
    )
}