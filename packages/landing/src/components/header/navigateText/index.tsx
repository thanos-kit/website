import s from "./style.module.scss"
import {useNavigate} from "react-router-dom"

interface NavigateTextProps {
    text : string,
    link ?: string
}

export default function NavigateText(props : NavigateTextProps){
    const {text, link} = props
    const navigate = useNavigate()
    const handleNavigate = () => {
        if (link) navigate(`/${link}`)
    }
    return (
        <p className={s.text} onClick={handleNavigate}>{text}</p>
    )
}