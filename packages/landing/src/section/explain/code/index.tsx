import s from "./style.module.scss"
import nodeJsLogo from "../../../assets/nodeJsLogo.svg"
import {VStack} from "../../../components/VStack";
import {HStack} from "../../../components/HStack";
import CodeSelectBox from "../../../components/Explain/CodeSelectBox";
import CodeBox from "../../../components/Explain/CodeBox/layout.tsx";

export default function CodeSection() {
    return(
        <VStack className={s.container} align={"center"} justify={"center"} gap={40}>
            <VStack className={s.explain} align={"center"} justify={"center"} gap={16}>
                <p>Instant Code Conversion</p>
                <span>Instantly transform code between languages or frameworks with a single click, streamlining development and reducing manual work.</span>
            </VStack>
            <HStack gap={24} align={"center"} justify={"center"}>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={true}/>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={false}/>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={false}/>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={false}/>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={false}/>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={false}/>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={false}/>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={false}/>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={false}/>
                <CodeSelectBox name={"Node.js"} img1={nodeJsLogo} mainColor={'#6E9F27'} subColor={'#EEF5E1'} isSelected={false}/>
            </HStack>
            <CodeBox/>
        </VStack>
    )
}