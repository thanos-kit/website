import {Vstack} from "../../components/Vstack";
import s from "./styles.module.scss"
import Header from "../../components/header/layout";
import IntroduceSection from "../../section/introduce";

export default function LandingPage() {
    return (
        <Vstack className={s.container}>
            <Header />
            <IntroduceSection/>
        </Vstack>
    )
}