import {Vstack} from "../../Vstack";
import s from "./style.module.scss"

export default function IntroduceTitle() {
    return(
        <Vstack justify={"center"} align={"center"} className={s.title}>
            <p>All in One cheat sheet</p>
            <span>for Hackathon</span>
            <div>Mock server, server templates, and Unzi kits—everything you need<br></br> to build fast and win faster. ⚡</div>
        </Vstack>
    )
}