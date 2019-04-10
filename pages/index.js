import React, { Component } from 'react';
import Head from '../components/Input/Header'
import Header from '../components/Content/HeaderFirst'
import First from '../components/Homepage/FirstSection'
import FirstLayout from '../components/Homepage/FirstLayout'
import Footer from '../components/Content/FooterFirst'
class Beranda extends React.Component{
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
                <FirstLayout/>
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
                   `
                }
            </style>
            </div>
           
        )
    }
}
export default Beranda;