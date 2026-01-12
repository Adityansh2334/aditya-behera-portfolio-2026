import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const move = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", move);
        animate();

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <>
            {/* Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 rounded-full
                   bg-cyan-400 pointer-events-none
                   -translate-x-1/2 -translate-y-1/2
                   z-[9999]"
            />

            {/* Ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-10 h-10 rounded-full
                   border border-cyan-400/40
                   pointer-events-none
                   -translate-x-1/2 -translate-y-1/2
                   z-[9998]"
            />
        </>
    );
}
