import React from 'react'

export default class FirstSection extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid first-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="heading-first">Sehatku Adalah Sebuah Aplikasi Kesehatan Sebagai Alat
                                            Konsultasi dengan Dokter Yang anda Inginkan
                                        </h1>
                                    </div>
                                    <div className="col-12 ">
                                        {/* <div className="img-heading-first">
                                        
                                        </div> */}
                                        <button className="btn-get-app">Download Aplikasi Sekarang > </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                {/* <div className="img-heading-second">
                                
                                </div> */}
                                <img src="../../static/img/android_img.png"></img>
                            </div>
                        </div>
                    </div> 
                </div>
                <style jsx>{
                   `
                   .btn-get-app{
                    font-family: 'Source Sans Pro', sans-serif;
                       font-size:18px;
                       font-weight:700;
                       font-style: normal;
                        font-stretch: normal;
                        line-height: 1.44;
                        letter-spacing: normal;
                        text-align: center;
                        color: #ffffff;
                       margin-top:50px;
                       width:60%;
                       height:70px;
                       border-radius:8px;
                       box-shadow: 0 15px 25px 0 rgba(60, 7, 7, 0.11);
                       background-color: #388bf2;
                   }
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
                        z-index:2;
                        box-shadow:0px 3px 6px 2px grey;
                    }
                    .first-bg{
                        background: white;
                        padding-top:90px;
                        padding-bottom:70px;
                    }
                    .heading-first{
                        color:#324967;
                        font-size:32px;
                        line-height:40px;
                        font-family: 'Source Sans Pro', sans-serif;
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