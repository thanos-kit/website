import {HStack} from "../../../components/HStack";
import s from "./style.module.scss"

export default function AboutSection(){
    return (
        <HStack gap={32} align={"flex-start"} justify={"center"} className={s.container}>
            <p>About</p>
            <span>
                Thanos is an all-in-one toolkit designed to help developers and teams build projects faster during hackathons and rapid prototyping sessions. It provides essential resources such as mock data, server templates, and UI kits, enabling seamless development without the hassle of setting up infrastructure from scratch.
            </span>
        </HStack>
    )
}