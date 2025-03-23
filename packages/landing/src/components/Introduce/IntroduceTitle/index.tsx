import {VStack} from "../../VStack";
import s from "./style.module.scss"

export default function IntroduceTitle() {
    return(
        <VStack justify={"center"} align={"center"} className={s.title}>
            <p>All in One cheat sheet</p>
            <span>for Hackathon</span>
            <div>Mock server, server templates, and Uni kits—everything you need<br></br> to build fast and win faster. ⚡</div>
        </VStack>
    )
}