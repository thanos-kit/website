import {VStack} from "../../VStack";
import s from "./style.module.scss"

interface CodeSelectBoxProps {
    name: string;
    img1?: string;
    mainColor?: string;
    subColor?: string;
    isSelected?: boolean;
}

export default function CodeSelectBox(props : CodeSelectBoxProps){
    const {name, img1, mainColor, subColor, isSelected} = props;

    if (isSelected) {
        return (
            <VStack
                align={"center"}
                justify={"center"}
                gap={8}
                className={s.container}
            >
                <VStack className={s.codeBox}
                        style={{
                            backgroundColor: subColor
                        }}
                        align={"center"}
                        justify={"center"}
                >
                    <img src={img1} alt="loading..."/>
                </VStack>
                <p style={{ color: mainColor }} >
                    {name}
                </p>
            </VStack>
        )
    } else {
        return (
            <VStack
                align={"center"}
                justify={"center"}
                gap={8}
                className={`${s.container} ${s.unselect}`}
            >
                <VStack className={s.codeBox}
                        align={"center"}
                        justify={"center"}
                >
                    <img src={img1} alt="loading..."/>
                </VStack>
                <p>
                    {name}
                </p>
            </VStack>
        )
    }

}