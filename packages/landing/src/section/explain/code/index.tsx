import s from "./style.module.scss"
import {Vstack} from "../../../components/VStack";

export default function CodeSection() {
    return(
        <Vstack className={s.container} align={"center"} justify={"center"} gap={40}>
            <Vstack className={s.explain} align={"center"} justify={"center"} gap={16}>
                <p>Instant Code Conversion</p>
                <span>Instantly transform code between languages or frameworks with a single click, streamlining development and reducing manual work.</span>
            </Vstack>
        </Vstack>
    )
}