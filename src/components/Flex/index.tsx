import {createElement, ElementType, forwardRef} from "react";

export interface FlexProps {
    as ?: ElementType;
    direction ?: "row" | "column";
    justify ?: "start" | "end" | "center" | "between" | "around";
    align ?: "start" | "end" | "center" | "stretch";
    wrap ?: "wrap" | "nowrap";
    gap? : number;
    children?: React.ReactNode;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
    const {as: Component = "div", direction, justify, align, wrap, gap, children, ...rest} = props;

    return createElement(Component, {
        ref,
        style: {
            display: "flex",
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap,
            gap: gap,
        },
        children,
        ...rest
    });
});

export default Flex;