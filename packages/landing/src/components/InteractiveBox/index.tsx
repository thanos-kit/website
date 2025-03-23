import {Hstack} from "../Hstack";

interface InteractiveBoxProps {
    className?: string;
    text : string;
    functionImage?: string;
    onClick?: () => void;
}

export default function InteractiveBox(props: InteractiveBoxProps) {
    const {className, text, functionImage, onClick} = props;
    return(
        <Hstack align={"center"} className = {className}>
            <p>{text}</p>
            {functionImage && (
                <img src={functionImage} alt='기능 이미지' onClick={onClick}/>
            )}
        </Hstack>
    )
}