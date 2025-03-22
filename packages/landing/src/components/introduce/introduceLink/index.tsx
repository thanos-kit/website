import {Vstack} from "../../Vstack";
import {Hstack} from "../../Hstack";
import Button from "../../button";
import gitHubLogo from "../../../assets/githubLogo.svg"
import s from "./style.module.scss"

export default function IntroduceLinkSection(){
    return(
        <Vstack>

            <Hstack gap={16}>
                <Button text={"Github"} img1={gitHubLogo} className={s.githubButton} />
                <Button text={"Get started"} className={s.startButton}/>
            </Hstack>
        </Vstack>
    )
}