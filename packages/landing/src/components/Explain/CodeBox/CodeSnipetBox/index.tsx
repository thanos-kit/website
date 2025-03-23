import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism"
import s from "./style.module.scss"

interface CodeSnipetBoxProps {
    code: string;
    language: string;
}

export default function CodeSnipetBox(props: CodeSnipetBoxProps){
    const {code, language} = props;

    return(
        <SyntaxHighlighter
            language= {`${language}`}
            style={materialLight}
            showLineNumbers={true}
            lineNumberStyle={{ paddingRight: '16px',  color: '#999' }}
            codeTagProps={{className : s.codeText,  style: { lineHeight: "100%" }}}
            customStyle={{ background: "none", boxShadow: "none" }} // 여기 추가
            className={s.container}
        >
            {`${code}`}
        </SyntaxHighlighter>
    )
}
