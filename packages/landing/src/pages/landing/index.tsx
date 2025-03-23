import {VStack} from "../../components/VStack";
import s from "./styles.module.scss"
import Header from "../../components/Header/Layout";
import IntroduceSection from "../../section/introduce";
import AboutSection from "../../section/explain/about";
import CodeSection from "../../section/explain/code";

export default function LandingPage() {
    return (
        <VStack className={s.container} align={"center"}>
            <Header />
            <IntroduceSection/>
            <AboutSection/>
            <CodeSection/>
        </VStack>
    )
}