import React from 'react'
import Link from 'next/link'
export default class FirstLayout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gambar:'../../static/img/card_img.png',
            card:''
        }
    }
    // getCard(){
    //     if(this.props.cards){
    //         return this.state.card.map(card=>(
                
    //     ))
    //     }
    // }
    render(){
        return(
            <div>
                    <div className="row" style={{borderTop:"1px solid #E0E0E0"}}>
                           <Link href="/lihatArticle">
                           <div className="col-xl-3" id={this.props.card}>
                                        <div className="card-article">
                                            <div className="img-card">
                                                <img src={this.state.gambar} className="img-card-second"/>
                                            </div>
                                            <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                        
                                                <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        
                                            </div>
                                            <div className="row rows-lebel">
                                            
                                                    <label className="label-article-card">Nama Dokter</label>
                                                    <label className="label-article-card" style={{marginLeft:"auto"}}>15,Februari 2019</label>
                                                
                                            </div>
                                        </div>
                            </div>
       
                           </Link>

                           <Link href="/lihatArticle">
                           <div className="col-xl-3" id={this.props.card}>
                                        <div className="card-article">
                                            <div className="img-card">
                                                <img src={this.state.gambar} className="img-card-second"/>
                                            </div>
                                            <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                        
                                                <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        
                                            </div>
                                            <div className="row rows-lebel">
                                            
                                                    <label className="label-article-card">Nama Dokter</label>
                                                    <label className="label-article-card" style={{marginLeft:"auto"}}>15,Februari 2019</label>
                                                
                                            </div>
                                        </div>
                            </div>
       
                           </Link>

                           <Link href="/lihatArticle">
                           <div className="col-xl-3" id={this.props.card}>
                                        <div className="card-article">
                                            <div className="img-card">
                                                <img src={this.state.gambar} className="img-card-second"/>
                                            </div>
                                            <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                        
                                                <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        
                                            </div>
                                            <div className="row rows-lebel">
                                            
                                                    <label className="label-article-card">Nama Dokter</label>
                                                    <label className="label-article-card" style={{marginLeft:"auto"}}>15,Februari 2019</label>
                                                
                                            </div>
                                        </div>
                            </div>
       
                           </Link>

                           <Link href="/lihatArticle">
                           <div className="col-xl-3" id={this.props.card}>
                                        <div className="card-article">
                                            <div className="img-card">
                                                <img src={this.state.gambar} className="img-card-second"/>
                                            </div>
                                            <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"30px"}}>
                                        
                                                <p className="paragraph-card">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        
                                            </div>
                                            <div className="row rows-lebel">
                                                    <label className="label-article-card">Nama Dokter</label>
                                                    <label className="label-article-card" style={{marginLeft:"auto"}}>15,Februari 2019</label>
                                                
                                            </div>
                                        </div>
                            </div>
       
                           </Link>
                            
                        </div>
                <style jsx>{
                   `
                   .rows-lebel{
                       padding-top:10px;
                       padding-left:30px;
                       padding-right:30px;
                   }
                   .label-article-card{
                    font-family: 'Source Sans Pro', sans-serif;
                    font-size: 12px;
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
                    height:4rem;
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
                        background-color:white;
                        margin-top:20px;
                        border-radius:8px;
                        border:solid 1px #e8e8e8;
                        padding-bottom:10px;
                    }
                    .card-article:hover{
                        transform:scale(1.04);
                        cursor:pointer;
                    }
                    .img-card{
                        background-color:#A0A4A8;
                        height:auto;
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