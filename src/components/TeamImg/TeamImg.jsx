import React from 'react'
import "./TeamImg.css"
import williams from "../../assets/williams.png"
import ife from "../../assets/ife.png"
import kc from "../../assets/kc.png"
import folake from "../../assets/folake.png"
import tony from "../../assets/tony.png"
const TeamImg = () => {
  return (
    <div className='TeamImgContainer'>
      <div className="ImgContainer">
        <div className="ImgCon">
            <div className="ImG">
                <img src={williams} alt="williams" />
            </div>
            <div className="names">
                <p>Williams Olagoke</p>
               <p> Product Designer</p>
            </div>
        </div>
        <div className="ImgCon">
            <div className="ImG">
                <img src={ife} alt="ife" />
            </div>
            <div className="names">
                <p>Adenekan Ifeoluwa</p>
               <p> Frontend Developer</p>
            </div>
        </div>
        <div className="ImgCon">
            <div className="ImG">
                <img src={kc} alt="kc" />
            </div>
            <div className="names">
                <p>Kelechi Anyim </p>
               <p> Frontend Developer</p>
            </div>
        </div>
        <div className="ImgCon">
            <div className="ImG">
                <img src={folake} alt="folake" />
            </div>
            <div className="names">
                <p>Folake Racheal</p>
               <p> Backend Developer</p>
            </div>
        </div>
        <div className="ImgCon">
            <div className="ImG">
                <img src={tony} alt="tony" />
            </div>
            <div className="names">
                <p>Aji Anthony</p>
               <p> Backend Developer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TeamImg
