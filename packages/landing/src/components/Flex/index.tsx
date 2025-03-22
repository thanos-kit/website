import { createElement, CSSProperties, ElementType, forwardRef } from "react";

export interface FlexProps {
    as?: ElementType;
    direction?: "row" | "column";
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    align?: "flex-start" | "flex-end" | "center" | "stretch";
    wrap?: "wrap" | "nowrap";
    gap?: number;
    className?: string;
    children?: React.ReactNode;
    style?: CSSProperties; // 인라인 스타일 추가
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
    const {
        as: Component = "div",
        direction,
        justify,
        align,
        wrap,
        gap,
        className,
        children,
        style,
        ...rest
    } = props;

    return createElement(Component, {
        ref,
        style: {
            display: "flex",
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap,
            gap: gap,
            ...style, // 사용자 지정 스타일 병합
        },
        children,
        className,
        ...rest
    });
});

export default Flex;
