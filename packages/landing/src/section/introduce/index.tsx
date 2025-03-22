import {Vstack} from "../../components/Vstack";
import s from "./style.module.scss"
import IntroduceTitle from "../../components/introduce/introduceTitle";
import IntroduceLinkSection from "../../components/introduce/introduceLink";
import IntroduceOtherSection from "../../components/introduce/introduceOther";

export default function IntroduceSection(){
    return (
        <Vstack className={s.container} align={"center"} justify={"space-between"}>
            <div className={s.overlay}></div> {/* 오버레이 추가 */}
            <div>
                <IntroduceTitle/>
                <IntroduceLinkSection/>
            </div>
            <IntroduceOtherSection/>
        </Vstack>
    )
}
