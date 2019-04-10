import React from 'react'
export default class FirstLayout extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid first-bg-layout">
                    <div className="container" >
                        <div className="row">
                            <label className="label-article">Artikel Terbaru</label>
                        </div>
                        <div className="row" style={{borderTop:"1px solid #E0E0E0"}}>
                           <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card">
                                        <img src="../../static/img/card_img.png" className="img-card-second"/>
                                    </div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                   
                                        <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label className="label-article-card">Nama Dokter</label>
                                            <label className="label-article-card" style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card">
                                        <img src="../../static/img/card_img.png" className="img-card-second"/>
                                    </div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                   
                                        <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label className="label-article-card">Nama Dokter</label>
                                            <label className="label-article-card" style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card">
                                        <img src="../../static/img/card_img.png" className="img-card-second"/>
                                    </div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                   
                                        <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label className="label-article-card">Nama Dokter</label>
                                            <label className="label-article-card" style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card">
                                        <img src="../../static/img/card_img.png" className="img-card-second"/>
                                    </div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                   
                                        <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label className="label-article-card">Nama Dokter</label>
                                            <label className="label-article-card" style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card">
                                         <img src="../../static/img/card_img.png" className="img-card-second"/>
                                    </div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                   
                                        <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label className="label-article-card">Nama Dokter</label>
                                            <label className="label-article-card" style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card">
                                         <img src="../../static/img/card_img.png" className="img-card-second"/>
                                    </div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                   
                                        <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label className="label-article-card">Nama Dokter</label>
                                            <label className="label-article-card" style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <button className="btn-look-other-art">Lihat Artikel Lainnya</button>
                        </div>
                    </div> 
                </div>
                <style jsx>{
                   `
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
                   .label-article-card{
                    font-family: 'Source Sans Pro', sans-serif;
                    font-size: 16px;
                    font-weight: normal;
                    font-style: normal;
                    letter-spacing: normal;
                    color: #a0a4a8;
                   }
                   .paragraph-card{
                    font-family: 'Source Sans Pro', sans-serif;
                    font-size: 18px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.44;
                    letter-spacing: normal;
                    text-align: left;
                    color: #535d65;
                    height:3rem;
                   }
                   .img-card-second{
                       width:100%;
                   }
                   .label-article{
                    font-family: 'Source Sans Pro', sans-serif;
                    font-size:18px;
                    font-weight:500;
                    font-style: normal;
                     font-stretch: normal;
                     line-height: 1.44;
                     letter-spacing: normal;
                     text-align: center;
                     color:#324967;
                   }
                   .first-bg-layout{
                       padding-top: 40px;
                       padding-bottom:100px;
                       background-color:white;
                   }
                    .card-article{
                        background-color:#E8E8E8;
                        margin-top:20px;
                        border-radius:8px;
                        padding-bottom:20px;
                    }
                    .card-article:hover{
                        transform:scale(1.04);
                        cursor:pointer;
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