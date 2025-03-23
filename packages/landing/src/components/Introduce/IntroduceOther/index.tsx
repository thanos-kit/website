import {Hstack} from "../../HStack";
import IntroduceProduct from "../IntroduceProduct";
import selfHostLogo from "../../../assets/self-host-logo.svg";
import designKitLogo from "../../../assets/design-kit-logo.svg";
import jsonMockLogo from "../../../assets/json-mock-logo.svg";
import serverLogo from "../../../assets/server-logo.svg";
import testImage from "../../../assets/testImage.png";
import s from "./style.module.scss"
import {Vstack} from "../../VStack";

export default function IntroduceOtherSection() {
    return (
        <Vstack className={s.container} align={"center"} justify={"center"}>
            <Hstack gap ={24} align={"center"} justify={"center"}>
                <IntroduceProduct
                img={selfHostLogo}
                title={"Self-Hosted"}
                borderColor={"#FF9201"}
                backgroundColor={"#FFF4E0"}
                isBorder={true}
                rotating={-3}
            />
                <IntroduceProduct
                    img={designKitLogo}
                    title={"Design Kit"}
                    borderColor={"#6E9F27"}
                    backgroundColor={"#EEF5E1"}
                    isBorder={false}
                    rotating={3}
                />
                <IntroduceProduct
                    img={jsonMockLogo}
                    title={"JSON Mock Server"}
                    borderColor={"#8D5CFF"}
                    backgroundColor={"#F1E9FF"}
                    isBorder={true}
                    rotating={3}
                />
                <IntroduceProduct
                    img={serverLogo}
                    title={"Server Template"}
                    borderColor={"#169FB0"}
                    backgroundColor={"#E1F7F9"}
                    isBorder={false}
                    rotating={-3}
                />
            </Hstack>
            <img src={testImage} className={s.img} alt = '로딩중..'/>
        </Vstack>
    )
}