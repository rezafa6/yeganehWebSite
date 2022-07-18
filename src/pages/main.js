import React from 'react';
import Header from "./header";
import MyPhoto from "../assets/images/me.jpg"
import { FaLinkedinIn,FaInstagram,FaFacebookSquare,FaTelegram,FaGithub } from "react-icons/fa";

const Main = () => {
    const goToGithub = () => {
        window.open("https://github.com/vahidhyeganeh","blank")
    }
    const goToTelegram = () => {
        window.open("https://t.me/vahidhyeganeh","blank")
    }
    return (
        <div>
            <Header/>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "35px"}}>
                <div style={{display: "flex",
                    flexDirection: "column",
                    height:"550px",
                    justifyContent: "space-evenly",fontSize:"25px" ,width: "65%", border: "1px gray dotted", margin: "0 25px 0 0",textAlign:"left",padding:"20px",borderRadius:"20px"}}>
                   <div>
                       <h2 style={{fontWeight: "1px gray dotted"}}>About Me</h2>
                       <p>I am a Software Engineer with more than 5 years of experience implementing web-based
                           applications. Successfully developed and maintained applications using advanced frameworks and
                           technologies such as React.js, REST API, TypeScript, Charts, Ag-grid . I'm always seeking for
                           new challenges and also eager to meet other software
                           engineers in the area, so feel free to connect!</p>
                   </div>
                    <div>
                       <h2 style={{fontWeight: "1px gray dotted"}}>Hobbies</h2>
                       <p>Programming | Reading | Gaming | Hiking | Music | Nature</p>
                   </div>
                    <div>
                       <h2 style={{fontWeight: "1px gray dotted"}}>Language</h2>
                       <p> Persian | Kurdish | English | Deutsch  </p>
                   </div>
                </div>
                <div style={{justifyContent: "space-between",
                    alignItems: "center",
                    display:"flex",
                    height:"550px",
                    flexDirection: "column",width: "35%", border: "1px gray dotted", margin: "0 25px 0 0",padding:"20px",borderRadius:"20px"}}>
                    <img style={{width: "70%" ,borderRadius:"50%"}} src={MyPhoto} alt="vahid hamedi yeganeh" />
                   <div>
                       <FaLinkedinIn size={50} style={{cursor:"pointer",margin:"0 10px 0 0"}} title="LinkedinIn"/>
                       <FaInstagram size={50} style={{cursor:"pointer",margin:"0 10px 0 0"}} title="Instagram"/>
                       <FaFacebookSquare size={50} style={{cursor:"pointer",margin:"0 10px 0 0"}} title="Facebook"/>
                       <FaTelegram onClick={goToTelegram} size={50} style={{cursor:"pointer",margin:"0 10px 0 0"}} title="Telegram"/>
                       <FaGithub onClick={goToGithub} size={50} style={{cursor:"pointer",margin:"0 10px 0 0"}} title="Github"/>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Main;