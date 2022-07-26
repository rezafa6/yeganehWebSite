import React, {useEffect} from 'react';
import {useProjectContext} from "../context/contextManagement";
import {FaGlobeAmericas} from "react-icons/fa";

const Header = () => {
    const {globalState, globalDispatch} = useProjectContext();
    const changeLanguage = (lang) => {
        globalDispatch({
            type: "changeLanguage",
            value: {
                ...globalState.languageState,
                state: lang,
            },
        });
        globalDispatch({
            type: "setLoading",
            value: true,
        });
    }

    return (
        <div style={{
            backgroundImage: "url('bg.jpg')", height: "400px", backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <div style={{
                filter: "blur(2px)",
                color: "white",
                fontSize: "80px",
                border: "3px white double",
                padding: "20px",
            }}>V
            </div>
            <div style={{position: "absolute", top: "10px", color: "white"}}>
                <FaGlobeAmericas style={{margin:"0 10px 0 0"}}/>
                <span onClick={() => changeLanguage("En")} style={{cursor: "pointer"}}>English</span> |
                <span onClick={() => changeLanguage("De")} style={{cursor: "pointer"}}>Deutsch</span>
            </div>
            <span style={{color: "white", fontSize: "70px"}}>Vahid Hamedi Yeganeh</span>
        </div>
    );
};

export default Header;