import {Vstack} from "../../Vstack";
import {Hstack} from "../../Hstack";
import Button from "../../button";
import gitHubLogo from "../../../assets/githubLogo.svg"
import copyImage from "../../../assets/copyImage.svg"
import s from "./style.module.scss"
import InteractiveBox from "../../interactiveBox";

export default function IntroduceLinkSection(){
    return(
        <Vstack className={s.container} align={"center"} justify={"center"} gap={24}>
            <InteractiveBox text={"curl -sSL https://thanos.olivepasta.com/install.sh | sh"} className={s.interactiveBox} functionImage={copyImage}/>
            <Hstack gap={16}>
                <Button text={"Github"} img1={gitHubLogo} className={s.githubButton} />
                <Button text={"Get started"} className={s.startButton}/>
            </Hstack>
        </Vstack>
    )
}