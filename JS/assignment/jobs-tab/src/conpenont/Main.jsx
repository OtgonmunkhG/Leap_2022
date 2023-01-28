import { AiFillCaretRight } from "react-icons/ai";

export default function Main({ data, setIsActive, isActive }) {
   
    const content = 

    data.map((d, inx) => {
        if(inx == isActive) {
        return (<div className="company-content" key={inx}>
            <h2 className="job-title">{d.title}</h2>
            <p className="company-name">{d.title}</p>
            <p className="date">{d.dates}</p>
            {
                d.duties.map((element, ind) => {
                    return (
                        <div className="text">
                            <AiFillCaretRight />
                            <p>{element}</p>
                        </div>
                    )
                })
            }

        </div>
        )
        }
    })
    return (
        
        <div>
            {content}
        </div>
    )
}