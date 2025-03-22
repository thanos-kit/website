import {Vstack} from "../../components/Vstack";
import s from "./styles.module.scss"
import Header from "../../components/header/layout";
import IntroduceSection from "../../section/introduce";
import IntroduceLinkSection from "../../components/introduce/introduceLink";

export default function LandingPage() {
    return (
        <Vstack className={s.container}>
            <Header />
            <IntroduceSection/>
            <IntroduceLinkSection/>
        </Vstack>
    )
}