import s from "./style.module.scss"

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    img1?: string;
    img2?: string;
}

export default function Button(props: ButtonProps) {
    const {text, onClick, className, img1, img2} = props;

    return (
        <div className={[s.container, className].filter(Boolean).join(' ')} onClick={onClick}>
            {img1 && (
                <img src={img1} alt='aaa'/>
            )}
            <p>
            {text}
            </p>
            {img2 && (
                <img src={img2} alt={img2}/>
            )}
        </div>
    )
}