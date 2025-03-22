import NavigateText from "../navigateText";
import s from "./style.module.scss"
import {Hstack} from "../../Hstack";
import Logo from "../../logo";
import Button from "../../button";

export default function Header(){
return (
    <Hstack align={"center"} justify={"space-between"} className={s.container}>
        <Hstack align={"center"} justify={"center"} gap={40}>
            <Logo/>
            <Hstack justify={"center"} align={"center"} gap={24}>
                <NavigateText text={"Products"} link={"/"}/>
                <NavigateText text={"Docs"} link={"/"}/>
                <NavigateText text={"Pricing"} link={"/"}/>
            </Hstack>
        </Hstack>
        <Button text={"버튼아이고찬"} className={s.button}/>
    </Hstack>
)
}