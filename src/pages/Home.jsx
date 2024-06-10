import { useRef, useEffect } from "react";
import Css from "./css/Home.module.css";
import TwitterBannerImg from "../assets/imgs/twitter_banner.png";
import TwitterVisionImg from "../assets/imgs/3-pillars.png";
import PillarOneImg from "../assets/imgs/pillar-1.png";
import PillarTwoImg from "../assets/imgs/pillar-2.png";
import PillarThreeImg from "../assets/imgs/pillar-3.png";
import TwitterLogo from "../assets/imgs/Twitter.svg";
import DiscordLogo from "../assets/imgs/Discord.svg";
import TsunamiFinancePic from "../assets/imgs/tsunami finance.svg";
import RisePic from "../assets/imgs/Rise.jpg";
import TopazMarketplacePic from "../assets/imgs/Topaz Marketplace.png";
import MercuryBlocksmithlabsPic from "../assets/imgs/Mercury Blocksmithlabs.svg";
import CoreDaoPic from "../assets/imgs/CoreDao.jpeg";
import JoshPic from "../assets/imgs/josh.png";
import JayPic from "../assets/imgs/jay.png";
import FAQItem from "../components/FAQItem";

export default function Home() {
  const ImgArr = [
    TsunamiFinancePic,
    RisePic,
    TopazMarketplacePic,
    MercuryBlocksmithlabsPic,
    CoreDaoPic,
  ];
  const LinkArr = [
    "https://twitter.com/TsunamiFinance_",
    "https://twitter.com/rise_wallet",
    "https://twitter.com/TopazMarket",
    "https://twitter.com/BlocksmithLabs",
    "https://twitter.com/theCoreDAO",
  ];
  const slide = useRef();
  useEffect(() => {
    console.log(slide.current.children);
    let children = slide.current.children;
    slide.current.innerHTML = "";
    for (let index = 0; index < ImgArr.length; index++) {
      const element = ImgArr[index];
      const node = document.createElement("div");
      node.className = Css.PartnerItem;
      node.id = index;
      const img = document.createElement("img");
      img.src = element;
      node.appendChild(img);
      node.onclick = () => {
        window.location.assign(LinkArr[index]);
      };
      slide.current.appendChild(node);
    }
    // console.log(firstChild);
    // console.log(slide.current.children);
    let Left = true;
    let move = 330;
    let moveState = 0;
    let maxCase = 660;
    const interval = setInterval(() => {
      if (window.innerWidth > 950) {
        maxCase = 660;
      } else if (window.innerWidth > 620) {
        maxCase = 990;
      } else {
        maxCase = 1320;
      }
      console.log(maxCase);
      slide.current.scrollLeft = moveState;
      if (Left) {
        moveState += move;
        if (moveState > maxCase) {
          moveState = maxCase - 330;
          Left = false;
        }
      } else {
        moveState -= move;
        if (moveState < 0) {
          moveState = 0;
          Left = true;
        }
      }
      console.log(moveState);
    }, 3000);

    return () => clearInterval(interval);

    // slide.current.scrollLeft = 330
  }, []);
  return (
    <div className={Css.main}>
      <div className={Css.TwitterBanner}>
        <img loading="lazy" src={TwitterBannerImg} alt="twitter banner" />
      </div>
      <div id="Roadmap" className={Css.Vision}>
        <span>Three Pillars of AAA</span>
        <img loading="lazy" src={TwitterVisionImg} alt="vision" />
        <div className={Css.AboutVision}>
          <h2>
            🥇Premium Digital Collectible
            <br />
            🥈Community of Alpha Alpacas <br />
            🥉Cash Flow Utilities <br />
          </h2>
        </div>
      </div>
      <div className={Css.VisionSection}>
        <div className={Css.VisionList}>
          <div className={Css.PillarImgBox}>
            <img loading="lazy" src={PillarOneImg} alt="Pillar One" />
          </div>
          <p>
            <h2>
              <span>🥇Premium Digital Collectible</span>{" "}
            </h2>
            AAA will be the premium digital collectible of
            <b> @AptosLabs Ecosystem. </b>Having AAA profile means being an OG
            of the Aptos ecosystem. That's our focus no.1.
          </p>
          <div className={Css.PillarImgBox}>
            <img loading="lazy" src={PillarTwoImg} alt="Pillar One" />
          </div>
          <p>
            <h2>
              <span>🥈Community of Alpha Alpacas</span> <br />
            </h2>
            Being alphas is more than having an edge in making money in crypto.
            We will be forever inspired by what{" "}
            <b>Crypto Punks, BAYC Degods, SMB & Boogles</b> has achieved in
            terms of community. We will build paca community following the
            footsteps of these gaint projects and try to be better.
          </p>
          <div className={Css.PillarImgBox}>
            <img loading="lazy" src={PillarThreeImg} alt="Pillar One" />
          </div>
          <p>
            <h2>
              <span>🥉Cash Flow Utilities</span> <br />
            </h2>
            Nfts can be more than Digital art collectible + community pfps. We
            are making AAA NFTs to be shares of revenue generating products.
          </p>
          {/* <div className={Css.VisionItem}>
          <div className={Css.PillarImgBox}>
            <img loading="lazy" src={PillarOneImg} alt="Pillar One" />
          </div>
          <p>
            <h2><span>🥇Premium Digital Collectible</span>{' '}</h2>
            AAA will be the premium digital collectible of{' '} <br /> <b>@AptosLabs Ecosystem. </b>
            <br />Having AAA profile {' '}
            means being an OG of the Aptos ecosystem. 
            <br /> That's our focus no.1. <br />
          </p>
        </div>
        <div className={Css.VisionItem}>
          <div className={Css.PillarImgBox}>
            <img loading="lazy" src={PillarTwoImg} alt="Pillar One" />
          </div>
          <p>
            <h2><span>🥈Community of Alpha Alpacas</span> <br/></h2>
            Being alphas is more than having an {' '}
            <br />
            edge in making money in crypto.{' '}
            <br />
            We will be forever inspired by what <b>Crypto Punks, BAYC <br />
            Degods, SMB & Boogles </b> has achieved in terms of community.
          </p>
        </div>
        <div className={Css.VisionItem}>
          <div className={Css.PillarImgBox}>
            <img loading="lazy" src={PillarThreeImg} alt="Pillar One" />
          </div>
          <p>
            <h2><span>🥉Cash Flow Utilities</span> <br /></h2>
            Nfts{' '}
            can be more than Digital art collectible <br /> + community pfps. 
            <br /> We are making AAA NFTs to be shares of revenue <br /> generating products.
          </p>
        </div> */}
        </div>
      </div>

      <div id="About" className={Css.Team}>
        <span>About Team</span>
        <div className={Css.TeamList}>
          <div className={Css.TeamItem}>
            <img loading="lazy" src={JoshPic} alt="" />
            <h3>AAA Josh</h3>
            <p>
              Being interested in startups, Josh came from strong marketing and
              economics background. As an experienced marketer and promoter,
              Josh is handling the Marketing/Product Design and Community
              Managment of the Alpacas. Also a crypto and nft degen trader.
            </p>
            <div className={Css.ProfileLinks}>
              <a href="https://twitter.com/AAAJoshP">
                <img loading="lazy" src={TwitterLogo} alt="twitter_logo" />
              </a>
            </div>
          </div>
          <div className={Css.TeamItem}>
            <img loading="lazy" src={JayPic} alt="" />
            <h3>AAA Jay</h3>
            <p>
              A hobbyist game dev and a professional developer, Jay has been
              working on various software development for more than half a
              decade. Also experienced in pixel art and NFT arts, Jay is
              currently the developer and artist of the Alpacas.
            </p>
            <div className={Css.ProfileLinks}>
              <a href="https://twitter.com/jay___codes">
                <img loading="lazy" src={TwitterLogo} alt="twitter_logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={Css.FAQ}>
        <span>FAQ</span>
        <hr />
        {/* <FAQItem
          question="What chain is AAA launching on?"
          answer="Aptos - a new amazingly fast chain made with love by former DIEM, META engineers. "
        /> */}
        <FAQItem
          question="What is the supply?"
          answer="1782 Pacas Vibing on the Aptos Chain"
        />
        <FAQItem
          question="What ultity tool are you guys building?"
          answer="We are building a tool which will help NFT projects navigate the treachous social media and attention per economy aspects."
        />
        {/* <FAQItem
          question="How can I get a WL spot?"
          answer="Team Announcements"
        /> */}
        {/* <FAQItem question="When Mint?" answer="Soon 👀" />
        <FAQItem question="Mint Price?" answer="TBA " /> */}
        <FAQItem question="Vibe?" answer="Paca Paca" />
      </div>
      <div className={Css.Partners}>
        <span>Partners</span>
        <div className={Css.PartnersBox}>
          <div className={Css.PartnersContainer} ref={slide}>
            {/* <div className={Css.PartnerItem}>
              <img loading="lazy" src={TsunamiFinancePic} alt="" />
              https://twitter.com/TsunamiFinance_
            </div>
            <div className={Css.PartnerItem}>
              <img loading="lazy" src={RisePic} alt="" />
              https://twitter.com/rise_wallet
            </div>
            <div className={Css.PartnerItem}>
              <img loading="lazy" src={TopazMarketplacePic} alt="" />
              https://twitter.com/TopazMarket
            </div>
            <div className={Css.PartnerItem}>
              <img loading="lazy" src={MercuryBlocksmithlabsPic} alt="" />
              https://twitter.com/BlocksmithLabs
            </div>
            <div className={Css.PartnerItem}>
              <img loading="lazy" src={CoreDaoPic} alt="" />
              https://twitter.com/theCoreDAO
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
