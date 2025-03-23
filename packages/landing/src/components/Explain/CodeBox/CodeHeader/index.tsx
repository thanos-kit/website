import {HStack} from "../../../HStack";
import s from "./style.module.scss"
import typeScriptLogo from "../../../../assets/typeScriptLogo.svg"
import copyImage from "../../../../assets/copyImage.svg"
import useCopy from "../../../../hooks/useCopy.tsx";

interface CodeHeaderProps {
    code : string;
}

export default function CodeHeader(props : CodeHeaderProps){
    const copyToClipboard = useCopy()
    const {code} = props;

    return(
        <HStack className={s.container} align={"center"} justify={"space-between"}>
            <HStack gap={8} align={"center"} justify={"center"} className={s.title}>
                <img src={typeScriptLogo} alt={"loading.."}/>
                <p>index.ts</p>
            </HStack>
            <img src={copyImage} alt={"loading"} onClick={() => copyToClipboard(code)}/>
        </HStack>
    )
}