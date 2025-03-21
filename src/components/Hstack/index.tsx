import {forwardRef, Ref} from "react";
import {FlexProps} from "../Flex";
import Flex from "../Flex";

export const Hstack = forwardRef(function Hstack(props : FlexProps, ref : Ref<any>) {
    return <Flex ref={ref} direction="row" {...props} />
})