import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Secret from '../../components/secret'
import Otenki from '../../components/otenki'
import Eureka from '../../components/eureka'
import teststyle from './teststyle.module.css'
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from "axios";


export default function WeatherC() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      document.title = `You clicked ${count} times`;
      console.log("useeffectです")
      window.addEventListener("keydown", secret_flag_cheack.bind(this));
      setFreezeflag(false);
    },[]);

    
    // const [count, setCount] = useState(0);
    const [banana, setbanana] = useState("banana");
    const [img,setImg] = useState("/gogo.png")
    const [secretflag,setSecretflag] =useState(false)
    const [freezeflag,setFreezeflag] =useState(false)

    const [playing,setPlaying]=useState(false)
    const konamiCommand = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    const secretCommand = [38, 38, 40, 40];
    const gogoCommand = [38, 38, 40, 40,71, 79, 71, 79];
    const pekaCommand = [38, 38, 40, 40,80, 69, 75, 65];


    var input = []; 
    const secret_flag_cheack = (e) => {   
        input.push(e.keyCode);
        console.log(input)
        if (input.toString().indexOf(gogoCommand) >= 0) {
            setPlaying(false)
            input = [];
            setPlaying(true)
            setImg("/gogo_p.png")
            console.log("GOGO")
        }
        if (input.toString().indexOf(pekaCommand) >= 0) {
            setPlaying(false)
            input = [];
            setPlaying(true)
            setImg("/gogo_p2.png")
            console.log("GOGO!!")

        }
        // if (input.toString().indexOf(secretCommand) >= 0) {
        //     input = [];
        //     setSecretflag(true)
        // }

    };
    
    

    const handleClick=()=>{
        alert(count);
    }
    const ositayo=()=>{
        if(banana=="バナナ"){
            setbanana("banana")
        }else{
            setbanana("バナナ");
        }
    }
    var city=""
    var temp=""
    var condition=""
    const weather=() =>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Osaka,jp&units=metric&appid="9818cad3ab2f1747d850c0f9528d83c7"')
        .then(function(response){
            city = response.data.name
            temp = response.data.main.temp
            condition = response.data.weather[0]
        }.bind(this))
        .catch(function(error){
            console.log(error)
        })
    }
    const change_img=()=>{
        setPlaying(false)
        const random = Math.floor( Math.random() * 6 )
        if(0 == random){
            if(img=="/gogo_p.png"){
                console.log("1g連")
                setImg("/gogo_p2.png")
                setPlaying(true)
                return
            }
            console.log(random)
            setImg("/gogo_p.png")
            setPlaying(true)
        }else{
            console.log(random)
            setImg("/gogo.png")
            setCount(count+1)
        }
    }

    const resetFreezeFrag=()=>{
        setFreezeflag(false)
    }
    
    return (
        <Layout>
            { freezeflag ? <Eureka freezeflag={freezeflag} resetFreezeFrag={resetFreezeFrag}/> : null }
            <Container >
            <h1>天気予報・気象情報</h1>
            {/* <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2> */}
            {/* <a className={teststyle.button} href="#"
            onClick={handleClick}>天気を表示</a>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={ositayo}>
                ositayo
            </button>
            <button 
               onClick={() => { ositayo();setCount(count + 1);}}>
              nnnnnnn
            </button> */}
            <button onClick={() => setFreezeflag(true)}>
                freeze!
            </button>
            <button onClick={change_img}>
                GOGO!
            </button>
            {/* <button onClick={weather}>
                otenki
            </button> */}
            
            {/* <p>You clicked {count} times{banana}</p> */}
            {/* <div className={teststyle.aaa}>
            <img src={img} alt="samaple" />
            <CircularProgress />
            </div> */}
            <div style={{ display: secretflag ? '' : 'none' }}>
              <ReactPlayer url='/gako.wav' playing={playing} />
            </div>
             {/* { secretflag ? <Secret /> : null } */}
             <Otenki></Otenki>
             </Container>
             <footer className={teststyle.gogo_footer}>
                <div className={teststyle.aaa}>
                    <img className={teststyle.gogo_img} src={img} alt="samaple" />
                    {/* <CircularProgress /> */}
                </div>
             </footer>
             
        </Layout>

    );
}