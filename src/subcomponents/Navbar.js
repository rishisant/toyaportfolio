/*
    Navbar.js

    This is the navigation bar for the site.
    Using useNavigate to go to other pages.
*/

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <div className="navigation-bar-container">
                <div className="navigation-bar-main">
                    <h1 className="okabe">
                        岡部
                    </h1>
                </div>

                <div className="navigation-item-lists">
                    <div className="navigation-item" onClick={() => navigate('/')}>
                        ホーム
                        <span style={{fontSize: "0.8rem", marginLeft: ".5rem"}}>&#9660;</span>
                    </div>

                    <div className="navigation-item" onClick={() => navigate('/about')}>
                        私について
                        <span style={{fontSize: "0.8rem", marginLeft: ".5rem"}}>&#9660;</span>
                    </div>

                    <div className="navigation-item" onClick={() => navigate('/projects')}>
                        プロジェクト
                        <span style={{fontSize: "0.8rem", marginLeft: ".5rem"}}>&#9660;</span>
                    </div>

                    <div className="navigation-item" onClick={() => navigate('/contact')}>
                        連絡先
                        <span style={{fontSize: "0.8rem", marginLeft: ".5rem"}}>&#9660;</span>
                    </div>
                </div>
            </div>
        </>
    );
}