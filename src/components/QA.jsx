import React, { useState } from 'react';
import { qa } from './qa.js';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const QA = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" mx-auto  flex gap-2.5 flex-col items-center " style={{margin:"auto", width:"100%"}}>
            <h2 className="text-white align-left text-left font-semibold  " style={{textAlign:"left ",fontSize:'1.25em', width:"100%"}}>Frequently Asked Questions</h2>
            <div className=" space-y-6 gap-2  " style={{width:'100%'}}>
                {qa.map((item, index) => (
                    <div key={item.id} className="space-y-3 gap-2">
                        <button
                            onClick={() => toggleAnswer(index)}
                            className="w-full flex justify-between items-center text-white text-left font-medium p-4 rounded-lg bg-white/10 hover:bg-white/20 transition"
                        >
                            <span>{item.title}</span>
                            <span style={{transform:openIndex===index ? 'rotate(45deg)':'rotate(0deg)', transition: 'transform 0.3s'}}>
                            <AiOutlinePlus />
                            </span>
                        </button>
                        <div className='p-4 gap-3'>
                            {openIndex === index && (
                                <div style={{padding:"16px", marginBottom:"16px"}}className="w-full flex justify-between items-center text-white text-left font-medium p-4 rounded-lg bg-white/10 ">
                                   <span dangerouslySetInnerHTML={{ __html: item.description }}/>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QA;
