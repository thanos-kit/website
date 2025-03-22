import {Vstack} from "../../components/Vstack";
import s from "./styles.module.scss"
import Header from "../../components/header/layout";

export default function LandingPage() {
    return (
        <Vstack className={s.container}>
            <Header />
        </Vstack>
    )
}