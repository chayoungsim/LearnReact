
import { useState } from 'react'
import { motion } from "framer-motion";

import '../App.css';

let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

const Tab = () => {

    let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
        {tabs.map((tab) =>(
            <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${activeTab===tab.id ? "active" : ""} tab-item`}
                
            >
                {activeTab === tab.id && (
                    <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-white mix-blend-difference"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                {tab.label}
            </button>
        ))

        }
    </div>
  )
}

export default Tab