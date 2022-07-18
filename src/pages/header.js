import React from 'react';
// import backGround from './../assets/images/headerBackground.jpg';

const Header = () => {
    return (
        <div style={{
            backgroundImage: "url('headerBackground.jpg')", height: "400px", backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        }}>
            {/*<img src={backGround}  alt="logo" />*/}
            <div style={{
                color: "white",
                fontSize: "80px",
                border: "3px white double",
                padding: "20px",
            }}>V
            </div>
            <span style={{color: "white", fontSize: "70px"}}>Vahid Hamedi Yeganeh</span>
        </div>
    );
};

export default Header;