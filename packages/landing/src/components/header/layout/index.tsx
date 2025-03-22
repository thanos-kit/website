import NavigateText from "../navigateText";
import s from "./style.module.scss"
import {Hstack} from "../../Hstack";
import Logo from "../../logo";

export default function Header(){
return (
    <Hstack align={"center"} justify={"between"} className={s.container}>
        <Hstack align={"center"} justify={"center"} gap={40}>
            <Logo/>
            <Hstack>
                <NavigateText text={"Products"} link={"/"}/>
                <NavigateText text={"Docs"} link={"/"}/>
                <NavigateText text={"Pricing"} link={"/"}/>
            </Hstack>
        </Hstack>
    </Hstack>
)
}