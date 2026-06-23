import type { Item } from "./types"
import { useState } from "react"

const AccordianComponent = ({items}: {items: Item[]}) => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    
    return (
        
        <>
            {items.map((item, index)=>{
                return (
                 <div key={index}>
                <button onClick= {() =>{(setActiveIndex((prev)=>(prev === index ? null : index)))}}>
                    {item.title}
                    {activeIndex === index ? " -" : " +"}
                </button>
                {activeIndex === index && <p>{item.content}</p>}
                </div>
            )})}
        
        </>
    )
}

export default AccordianComponent