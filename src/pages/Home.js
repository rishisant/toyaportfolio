import React from "react";
import { useState, useEffect } from "react";

/*
    Home page

    Introducing Okabe-san.
*/

// Image of toya-san
import toya from "../assets/images/toya.JPG";

const Home = () =>
{
    return (
        <>
            <div className="page-wrapper">
                <div className="content-container">
                    <div className="content-mini-container-image">
                        <div className="image-container">
                            <img src={toya} alt="Toya" />
                            <div className="caption">
                                岡部透弥です。大森の上島コーヒで撮影しました。
                            </div>
                        </div>

                        <div className="text-container-image">
                            <h3>
                                岡部透弥のポートフォリオへようこそ！
                            </h3>
                            <p>
                                ここでは私の生い立ちや私の人生、今何をやっているかをこのサイトを通して説明したいと思います。
                            </p>
                            
                            <h3>
                                このサイトを作ろうと思ったきっかけ
                            </h3>
                            <p>
                                このサイトを通して自分のプログラミングスキルを向上させるともに、自分の家族や彼女はもちろん、これから出会うすべての方々に今自分が何をやっているのか、
                                将来的に何になるのかを理解してもらうようこのサイトを作成しました。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="content-container">
                    <div className="content-mini-container">
                        <div className="text-container">
                            <h3>
                                もっと
                            </h3>
                            <p>
                                もっと書くつもりなんだ。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
