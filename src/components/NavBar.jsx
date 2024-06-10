import { useState } from 'react'
import { Link } from 'react-router-dom'

import Css from './css/NavBar.module.css'
import Logo from '../assets/imgs/logo_white.svg'
import TwitterLogo from '../assets/imgs/Twitter.svg'
import DiscordLogo from '../assets/imgs/Discord.svg'
import HamburgerIcon from '../assets/imgs/Hamburger_white.svg'

export default function NavBar() {
  const [popUp, setPopUp] = useState(false)
  return (
    <div className={Css.main}>
      <div className={Css.LogoSector}>
        <Link to={`/`}>
          <img loading="lazy" src={Logo} alt="logo" />
          <span>Aptos Alpha Alpacas</span>
        </Link>
      </div>
      <div className={Css.NavLinks}>
        <a href="http://twitter.com/AptosAlpacas">
          <img
            loading="lazy"
            className={Css.link_img}
            src={TwitterLogo}
            alt="twitter logo"
          />
        </a>
        <a href="http://discord.gg/QyECTYmpHE">
          <img
            loading="lazy"
            className={Css.link_img}
            src={DiscordLogo}
            alt="discord logo"
          />
        </a>
        <img
          loading="lazy"
          className={Css.icon}
          src={HamburgerIcon}
          alt="hamburger icon"
          onClick={() => {
            setPopUp(true)
          }}
        />
      </div>
      <div
        className={
          popUp
            ? Css.NavPopup + ' ' + Css.NavPopupActive
            : Css.NavPopup + ' ' + Css.NavPopupNotActive
        }
      >
        <div>
          <a
            href="/#Roadmap"
            onClick={() => {
              setPopUp(false)
            }}
          >
            Roadmap
          </a>
        </div>
        <div>
          <Link
            to={`/honorary`}
            onClick={() => {
              setPopUp(false)
              window.scrollTo(0, 0)
            }}
          >
            Honorary
          </Link>
        </div>
        <div>
          <a
            href="/#About"
            onClick={() => {
              setPopUp(false)
            }}
          >
            About
          </a>
        </div>
        <div>
          <Link
            to={`/tool`}
            onClick={() => {
              setPopUp(false)
              window.scrollTo(0, 0)
            }}
          >
            Tools
          </Link>
        </div>
        <div className={Css.LinkImg}>
          <a href="http://twitter.com/AptosAlpacas">
            <img
              loading="lazy"
              className={Css.link_img}
              src={TwitterLogo}
              alt="twitter logo"
            />
          </a>
        </div>
        <div className={Css.LinkImg}>
          <a href="http://discord.gg/QyECTYmpHE">
            <img
              loading="lazy"
              className={Css.link_img}
              src={DiscordLogo}
              alt="discord logo"
            />
          </a>
        </div>
        <div
          onClick={() => {
            setPopUp(false)
          }}
        >
          X
        </div>
      </div>
    </div>
  )
}
