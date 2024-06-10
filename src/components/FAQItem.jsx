import { useState } from "react"
import Css from "./css/FAQItem.module.css"

export default function FAQItem(props){
    const [open,setOpen] = useState(false)
    return (
        <div className={Css.FAQItem}>
          <div className={Css.FAQQuestion} onClick={()=>{setOpen(!open)}}>{props.question}<span>{open?'-':'+'}</span> </div>
          {open?<div className={Css.FAQAnswer}>{props.answer}</div>:null}
          <hr />
        </div>
    )
}