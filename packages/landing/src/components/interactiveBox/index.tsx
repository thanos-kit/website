import {Hstack} from "../Hstack";

interface InteractiveBoxProps {
    className?: string;
    text : string;
    functionImage?: string;
}

export default function InteractiveBox(props: InteractiveBoxProps) {
    const {className, text, functionImage} = props;
    return(
        <Hstack align={"center"} className = {className}>
            <p>{text}</p>
            {functionImage && (
                <img src={functionImage} alt='기능 이미지'/>

            )}
        </Hstack>
    )
}