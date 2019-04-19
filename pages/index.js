import React, { Component } from 'react';
import Head from '../components/Input/Header'
import Header from '../components/Content/HeaderFirst'
import First from '../components/Homepage/FirstSection'
import FirstLayout from '../components/Homepage/FirstLayout'
import Footer from '../components/Content/FooterFirst'
import Link from 'next/link'
class Beranda extends React.Component{
    constructor(props){
        super();
        this.state={
            CardArticle:6
        }
       
    }
    getCard(){
        if(this.state.CardArticle){
            return this.state.CardArticle.map((card)=>
                <FirstLayout key={card.id}/>
            )
        }

    }
    render(){
        return(
            <div>
                <Head/>
                <div className="container-fluid navbar-bg">
                    <div className="container">
                        <Header/>
                    </div>
                </div>
                <First/>
                <div className="container-fluid first-bg-layout">
                <div className="container" >
                        <div className="row">
                            <label className="label-article">Artikel Terbaru</label>
                        </div>
                        <FirstLayout card=""/>
                    </div> 
                    <div className="row">
                           <Link href="/article">
                           <button className="btn-look-other-art">Lihat Artikel Lainnya</button>
                           </Link>
                    </div>
                </div>
                <Footer/>
                <style jsx global>{
                   `
                   .first-bg-layout{
                       padding-top: 40px;
                       padding-bottom:100px;
                       background-color:#F8F8F8;
                   }
                    .card-article{
                        background-color:#E8E8E8;
                        margin-top:20px;
                        border-radius:8px;
                        padding-bottom:20px;
                    }
                    .img-card{
                        background-color:#A0A4A8;
                        height:170px;
                        border-radius:8px;
                    }
                    .navbar-bg{
                        position:fixed;
                        background: white;
                        padding-top:10px;
                        padding-bottom:10px;
                        z-index:2;
                        box-shadow:0px 3px 6px 2px 	#F8F8F8;
                    }
                    .first-bg{
                        background: #E8E8E8;
                        padding-top:90px;
                        padding-bottom:70px;
                    }
                    .heading-first{
                        font-family:Neo Sans W1G;
                        color:#535D65;
                    }
                    .img-heading-first{
                        background:#A0A4A8;
                        height:90px;
                        border-radius:8px;
                        width:70%;
                        margin-top:30px;
                    }
                    .img-heading-second{
                        background:#A0A4A8;
                        height:100%;
                        border-radius:8px;
                        width:80%;
                    }
                    .btn-look-other-art{
                        margin-top:70px;
                        margin-left:auto;
                        margin-right:auto;
                        font-family: 'Source Sans Pro', sans-serif;
                         font-size: 16px;
                         font-weight: normal;
                         font-style: normal;
                         letter-spacing: normal;
                         color: #a0a4a8;
                         width:25%;
                         height:20%;
                        padding-top:20px;
                        padding-bottom:20px;
                        border-radius:8px;
                        color:#162d4a;
                        box-shadow: 0 15px 15px 0 rgba(255, 255, 255, 0.16);
                        background-color: #e8e8e8;
                    }
                   `
                }
            </style>
            </div>
           
        )
    }
}
export default Beranda;