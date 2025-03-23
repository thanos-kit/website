import {Vstack} from "../../components/Vstack";
import s from "./styles.module.scss"
import Header from "../../components/Header/Layout";
import IntroduceSection from "../../section/introduce";
import AboutSection from "../../section/about";

export default function LandingPage() {
    return (
        <Vstack className={s.container} align={"center"}>
            <Header />
            <IntroduceSection/>
            <AboutSection/>
        </Vstack>
    )
}