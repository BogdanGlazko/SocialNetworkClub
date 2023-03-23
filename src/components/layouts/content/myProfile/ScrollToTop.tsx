import React from "react";
import { useEffect, useRef } from "react";

function ScrollToTopOnMount() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            (container as HTMLDivElement).scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [containerRef]);

    return <div ref={containerRef} />;
}

export default ScrollToTopOnMount;
