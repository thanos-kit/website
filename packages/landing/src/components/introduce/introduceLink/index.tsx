import {Vstack} from "../../Vstack";
import {Hstack} from "../../Hstack";
import Button from "../../button";
import gitHubLogo from "../../../assets/githubLogo.svg"
import copyImage from "../../../assets/copyImage.svg"
import s from "./style.module.scss"
import InteractiveBox from "../../interactiveBox";
import useCopy from "../../../hooks/useCopy.tsx";

export default function IntroduceLinkSection(){
    const copyToClipboard = useCopy(); // useCopy()로 호출

    return(
        <Vstack className={s.container} align={"center"} justify={"center"} gap={24}>
            <InteractiveBox
                text={"curl -sSL https://thanos.olivepasta.com/install.sh | sh"}
                className={s.interactiveBox}
                functionImage={copyImage}
                onClick={() => copyToClipboard("curl -sSL https://thanos.olivepasta.com/install.sh | sh")}
            />
            <Hstack gap={16}>
                <Button text={"Github"} img1={gitHubLogo} className={s.githubButton} />
                <Button text={"Get started"} className={s.startButton}/>
            </Hstack>
        </Vstack>
    )
}
