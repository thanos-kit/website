import {createElement, ElementType, forwardRef} from "react";

export interface FlexProps {
    as?: ElementType;
    direction?: "row" | "column";
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    align?: "flex-start" | "flex-end" | "center" | "stretch";
    wrap?: "wrap" | "nowrap";
    gap?: number;
    className?: string;
    children?: React.ReactNode;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
    const {as: Component = "div", direction, justify, align, wrap, gap, className, children, ...rest} = props;

    return createElement(Component, {
        ref,
        style: {
            display: "flex",
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap,
            gap: gap
        },
        children,
        className,
        ...rest
    });
});

export default Flex;