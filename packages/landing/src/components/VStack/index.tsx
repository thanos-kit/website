import {forwardRef, Ref} from "react";
import {FlexProps} from "../Flex";
import Flex from "../Flex";

export const VStack = forwardRef(function VStack(props : FlexProps, ref : Ref<any>) {
    return <Flex ref={ref} direction="column" {...props} />
})