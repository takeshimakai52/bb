import eureka from './eureka.module.css'
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

function Eureka({ freezeflag,resetFreezeFrag }) {
    if(!freezeflag){
        return
    }
    const [eimg,setEimg] = useState("/kari2.gif")
    const [playing,setPlaying]=useState(true)
    const stop=()=>{
        setEimg("")
        setPlaying(false)
    }
    const reset=()=>{
        stop()
        resetFreezeFrag()
    }
    // const imgs = new Array("/e1.jpg","/e2.jpg","/e3.jpg","/e4.jpg",); //*1
    // var count = -1;
    //画像番号
    // count++; //*3
    //画像の枚数確認
    // if (count == imgs.length) count = 0; //*4
    //画像出力
    // useState(imgs[count])
    //次のタイマー呼びだし
    // setTimeout("imgTimer()",1000); //*6

    return (
    <div className={eureka.freeze} onClick={reset}>
        <img className={eureka.freeze_img} src={eimg} alt="icanfly" />
        <ReactPlayer url='/efreeze.mp3' playing={playing} />
    </div>
    
    )
}
  
export default Eureka

