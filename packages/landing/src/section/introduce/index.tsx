import {Vstack} from "../../components/Vstack";
import s from "./style.module.scss"
import IntroduceTitle from "../../components/introduce/introduceTitle";

export default function IntroduceSection(){
    return (
        <Vstack className={s.container}>
            <IntroduceTitle/>
        </Vstack>
    )
}