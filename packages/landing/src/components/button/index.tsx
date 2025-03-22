import s from "./style.module.scss"

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

export default function Button(props: ButtonProps) {
    const {text, onClick, className} = props;

    return (
        <button className={[s.container, className].filter(Boolean).join(' ')} onClick={onClick}>{text}</button>
    )
}