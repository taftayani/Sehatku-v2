import React from 'react'
import Head from '../components/Input/Header'
import Header from '../components/Content/HeaderFirst'
import Footer from '../components/Content/FooterFirst'
import Paragraph from '../components/Content/Paragraph'
import FirstLayout from '../components/Homepage/FirstLayout'
export default class lihatArticle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            DoctorName:'Budi Luhur'
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
                <div className="container-fluid content-preview-art">
                    <div className="container contain-preview">
                        <div className="row rows-header-preview">
                               <label className="label-header">Beranda/artikel</label>
                                <label className="label-header" style={{marginLeft:"auto"}}>Dipublikasikan Oleh :{this.state.DoctorName} </label>
                        </div>
                        <div className="row" style={{paddingTop:"30px",paddingBottom:"20px"}}>
                            <h2 className="header-preview">Judul artikel dari Dokter {this.state.DoctorName}</h2>
                        </div>
                        <div className="row">
                            <img src="../../static/img/card_img.png" className="img-preview"/>
                        </div>
                        <div className="row">
                            <Paragraph paragraph="Kesehatan adalah keadaan sejahtera dari badan, jiwa, dan sosial yang memungkinkan
                             setiap orang hidup produktif secara sosial, dan ekonomis.[1] Pemeliharaan kesehatan adalah upaya penaggulangan, 
                             dan pencegahan gangguan kesehatan yang memerlukan pemeriksaan, pengobatan dan/atau perawatan termasuk kehamilan, 
                             dan persalinan.[2] Pendidikan kesehatan adalah proses membantu sesorang, dengan bertindak secara sendiri-sendiri 
                             ataupun secara kolektif, untuk membuat keputusan berdasarkan pengetahuan mengenai hal-hal yang memengaruhi 
                             kesehatan pribadinya, dan orang lain."/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid content-article">
                    <div className="container">
                        <div className="row">
                            <h1 className="header-recommend">Rekomendasi Artikel Untuk Anda</h1>
                        </div>  
                        <FirstLayout/>
                    </div>
                </div>
                <Footer/>

                <style jsx global>
                    {
                        `
                        .header-recommend{
                            font-family: 'Source Sans Pro', sans-serif;
                            font-size: 18px;
                            font-weight: bold;
                            font-style: normal;
                            font-stretch: normal;
                            line-height: 1.44;
                            letter-spacing: normal;
                            text-align: left;
                            color: #324967;
                        }
                        .content-preview-art{
                            padding-top:130px;
                        }
                        .content-article{
                            padding-bottom:70px;
                        }
                        .header-preview{
                            font-family: 'Source Sans Pro', sans-serif;
                            font-size: 24px;
                            font-weight: bold;
                            font-style: normal;
                            font-stretch: normal;
                            line-height: 1.42;
                            letter-spacing: normal;
                            text-align: left;
                            color: #324967;
                        }
                        .rows-header-preview{
                            border-bottom:1px solid #a0a4a8;
                        }
                        .label-header{
                            font-family: 'Source Sans Pro', sans-serif;
                            font-size: 12px;
                            font-weight: normal;
                            font-style: normal;
                            font-stretch: normal;
                            line-height: 1.33;
                            letter-spacing: normal;
                            text-align: left;
                            color: #a0a4a8;
                        }
                        .contain-preview{
                            width:56%;
                            padding-bottom:30px;
                        }
                        .img-preview{
                            width:99%;
                            height:500px;
                        }
                        .navbar-bg{
                            position:fixed;
                            background: white;
                            padding-top:10px;
                            padding-bottom:10px;
                            z-index:2;
                            box-shadow:0px 3px 6px 2px 	#F8F8F8;
                        }
                        `
                    }
                </style>
            </div>
        )
    }
}