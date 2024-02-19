import { useEffect, useRef } from "react"

const TextAutoScroll = ({children}) =>
{
    const containerRef = useRef(null);
    const contentRef = useRef(null)

    useEffect(()=>
    {   
        if(!containerRef || !contentRef) return;

        const container = containerRef.current;
        const content = contentRef.current;

        content.classList.remove("scroll");

        if(content.scrollWidth  > container.clientWidth)
        {
            content.classList.add("scroll");
        }

    },[children]);

    return (
        <div className="list-ticket-name-container" ref={containerRef}>
            <p className="list-ticket-name" ref={contentRef}>
                {children}
            </p>
        </div>
    )
}

export default TextAutoScroll