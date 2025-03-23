import NavigateText from "../NavigateText";
import s from "./style.module.scss"
import {HStack} from "../../HStack";
import Logo from "../../Logo";
import Button from "../../Button";

export default function Header(){
return (
    <HStack align={"center"} justify={"space-between"} className={s.container}>
        <HStack align={"center"} justify={"center"} gap={40}>
            <Logo/>
            <HStack justify={"center"} align={"center"} gap={24}>
                <NavigateText text={"Products"} link={"/"}/>
                <NavigateText text={"Docs"} link={"/"}/>
                <NavigateText text={"Pricing"} link={"/"}/>
            </HStack>
        </HStack>
        <Button text={"버튼아이고찬"} className={s.button}/>
    </HStack>
)
}