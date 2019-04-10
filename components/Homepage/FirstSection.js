import React from 'react'

export default class FirstSection extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid first-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="heading-first">Sehatku Adalah Sebuah Aplikasi Kesehatan Sebagai Alat
                                            Konsultasi dengan Dokter Yang anda Inginkan
                                        </h1>
                                    </div>
                                    <div className="col-12 ">
                                        <div className="img-heading-first">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="img-heading-second">
                                
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <style jsx>{
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
                        z-index:2;
                        box-shadow:0px 3px 6px 2px grey;
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