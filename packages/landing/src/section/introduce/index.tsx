import {Vstack} from "../../components/VStack";
import s from "./style.module.scss"
import IntroduceTitle from "../../components/Introduce/IntroduceTitle";
import IntroduceLinkSection from "../../components/Introduce/IntroduceLink";
import IntroduceOtherSection from "../../components/Introduce/IntroduceOther";

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
