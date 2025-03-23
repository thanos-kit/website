import {Vstack} from "../../VStack";
import s from "./style.module.scss"

interface CodeSelectBoxProps {
    name: string;
    img1?: string;
    mainColor?: string;
    subColor?: string;
}

export default function CodeSelectBox(props : CodeSelectBoxProps){
    const {name, img1, mainColor, subColor} = props;

    return (
        <Vstack
            style={{
                backgroundColor: subColor
            }}
            align={"center"}
            justify={"center"}
            gap={8}
            className={s.container}
        >
            <div className={s.codeBox}>
                <img src={img1} alt="loading..."/>
            </div>
            <p style={{ color: mainColor }} >
                {name}
            </p>
        </Vstack>
    )

}