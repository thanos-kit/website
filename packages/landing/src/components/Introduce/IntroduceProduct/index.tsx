import s from "./style.module.scss"
import {HStack} from "../../HStack"

interface IntroduceProductProps {
    img: string;
    title: string;
    borderColor ?: string;
    backgroundColor : string;
    isBorder : boolean;
    rotating : number;
}

export default function IntroduceProduct(props: IntroduceProductProps){
    const {img, title, backgroundColor, borderColor, isBorder, rotating} = props;

    return(
        <HStack
            gap={16}
            className={s.container}
            align={"center"}
            justify={"center"}
            style={{
                backgroundColor: backgroundColor,
                border: isBorder ? `2px solid ${borderColor}` : 'none',
                transform: `rotate(${rotating}deg)`,
            }}
        >
            <img src={img} alt={'test'}/>
            <p style={{color: borderColor}}>{title}</p>
        </HStack>
    )
}