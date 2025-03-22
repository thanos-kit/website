import {Hstack} from "../../Hstack";
import {Vstack} from "../../Vstack";
import IntroduceProduct from "../introduceProduct";
import selfHostLogo from "../../../assets/self-host-logo.svg";
import designKitLogo from "../../../assets/design-kit-logo.svg";
import jsonMockLogo from "../../../assets/json-mock-logo.svg";
import serverLogo from "../../../assets/server-logo.svg";
import s from "./style.module.scss"

export default function IntroduceOtherSection() {
    return (
        <Hstack className={s.container}>
            <Vstack gap ={24} align={"center"} justify={"center"}>
                <IntroduceProduct
                img={selfHostLogo}
                title={"Self-Hosted"}
                borderColor={"#FF9201"}
                backgroundColor={"#FFF4E0"}
                isBorder={true}
                rotating={30}
            />
                <IntroduceProduct
                    img={designKitLogo}
                    title={"Design Kit"}
                    borderColor={"#6E9F27"}
                    backgroundColor={"#EEF5E1"}
                    isBorder={false}
                    rotating={30}
                />
                <IntroduceProduct
                    img={jsonMockLogo}
                    title={"JSON Mock Server"}
                    borderColor={"#8D5CFF"}
                    backgroundColor={"#F1E9FF"}
                    isBorder={true}
                    rotating={30}
                />
                <IntroduceProduct
                    img={serverLogo}
                    title={"Server Template"}
                    borderColor={"#169FB0"}
                    backgroundColor={"#E1F7F9"}
                    isBorder={false}
                    rotating={30}
                />
            </Vstack>

        </Hstack>
    )
}