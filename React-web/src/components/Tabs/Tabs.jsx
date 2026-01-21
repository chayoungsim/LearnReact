import { useState, useRef } from "react";
import { useFixTabOnScroll } from "../../hooks/useFixTabOnScroll";


const Tabs = ({ tabs, defaultIndex = 0, className = "", onChange }) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const tabWrapRef = useRef(null);

    useFixTabOnScroll(tabWrapRef, {
    headerSelector: "header",
     });

    const handleChange = (index) => {
        setActiveIndex(index);
        onChange?.(index);
    };

    

    return (
        <div ref={tabWrapRef} className={`tab-wrap ${className}`}>
            <ul className="tab" role="tablist">
                {tabs.map((tab, index) => (
                    <li key={index} role="presentation" className={activeIndex === index ? "active" : ""}>
                        <button 
                          type="button" 
                          role="tab"
                          aria-selected={activeIndex === index}                          
                          onClick={() => handleChange(index)}
                          >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tabs;
