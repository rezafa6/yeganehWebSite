import React, {useEffect, useState} from 'react';
import Header from "./header";
import MyPhoto from "../assets/images/me.jpg"
import {FaLinkedinIn, FaInstagram, FaFacebookSquare, FaTelegram, FaGithub, FaCloudDownloadAlt} from "react-icons/fa";
import {useProjectContext} from "./../context/contextManagement"
import {language} from './../languages'
import Loading from "../components/spiner";
import MyResume from "../assets/yeganehResume.pdf"
import './main-styles.css'
const Main = () => {
    const {globalState, globalDispatch} = useProjectContext();
    const states = globalState.languageState
    const goToGithub = () => {
        window.open("https://github.com/vahidhyeganeh", "blank")
    }
    const goToTelegram = () => {
        window.open("https://t.me/vahidhyeganeh", "blank")
    }
    const goToLinkedin = () => {
        window.open("http://linkedin.com/in/vahid-yeganeh-9737921b2", "blank")
    }
    const resumeDownload = () => {
        window.open("../assets/yeganehResume.pdf", "blank")
    }
    useEffect(() => {
        if (globalState.loading) {
            setTimeout(() => {
                globalDispatch({
                    type: "setLoading",
                    value: false,
                });
            }, 500)
        }
    }, [globalState.loading])
    return (
        <div>
            {globalState.loading && (<Loading hasParent/>)}
            <Header/>
            <div className="main-side">
                <div className="left-side-main">
                    <div>
                        <h2 style={{fontWeight: "1px gray dotted"}}>{language.AboutMe[states.state]}</h2>
                        <p>{language.AboutMeDescription[states.state]}</p>
                    </div>
                    <div>
                        <h2 style={{fontWeight: "1px gray dotted"}}>{language.Hobbies[states.state]}</h2>
                        <p>{language.HobbiesDescription[states.state]}</p>
                    </div>
                    <div>
                        <h2 style={{fontWeight: "1px gray dotted"}}>{language.Language[states.state]}</h2>
                        <p> {language.LanguageDescription[states.state]} </p>
                    </div>
                </div>
                <div className="right-side-main" >
                    <img className="image-profile" src={MyPhoto}
                         alt="vahid hamedi yeganeh"/>
                    <div>
                        <FaLinkedinIn onClick={goToLinkedin} color="#0072b1" size={30}
                                      style={{cursor: "pointer", margin: "0 10px 0 0"}} title="LinkedinIn"/>
                        <FaFacebookSquare size={30} color="#4267B2" style={{cursor: "pointer", margin: "0 10px 0 0"}}
                                          title="Facebook"/>
                        <FaTelegram onClick={goToTelegram} color="#0088CC" size={30}
                                    style={{cursor: "pointer", margin: "0 10px 0 0"}}
                                    title="Telegram"/>
                        <FaGithub onClick={goToGithub} size={30} style={{cursor: "pointer", margin: "0 10px 0 0"}}
                                  title="Github"/>

                        <a href={MyResume}
                           download><FaCloudDownloadAlt color="skyBlue" size={30}
                                            style={{cursor: "pointer"}}
                                            title="Cv " /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;