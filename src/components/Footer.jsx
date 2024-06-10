import Css from "./css/Footer.module.css"
import Logo from '../assets/imgs/logo_white.svg'

export default function Footer(){

    return (
        <div className={Css.main}>
            <img loading="lazy" src={Logo} alt="" onClick={()=>{
                window.scrollTo(0, 0);
            }} />
        </div>
    )
}