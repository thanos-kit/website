import {forwardRef, Ref} from "react";
import {FlexProps} from "../Flex";
import Flex from "../Flex";

export const Vstack = forwardRef(function Vstack(props : FlexProps, ref : Ref<any>) {
    return <Flex ref={ref} direction="column" {...props} />
})