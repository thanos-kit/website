import {HStack} from "../../HStack";
import githubLight from "../../../assets/githubLight.svg"
import s from "./style.module.scss"

export default function CodeFooter(){
    return(
        <HStack className={s.container} align={"center"} justify={"flex-start"} gap={4}>
            <img src={githubLight} alt="github"/>
            <p>View on Github</p>
        </HStack>
    )
}