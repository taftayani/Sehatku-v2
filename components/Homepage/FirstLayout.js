import React from 'react'
export default class FirstLayout extends React.Component{
    
    componentDidMount(){
        // var card=document.getElementById('card-article-loop');
        // var i;
        // for(i=0;i<;i++){
        //     card += card[i];
        // }
        // document.getElementById('card-article-loop').innerHTML=card;
    }
    render(){
        return(
            <div>
                <div className="container-fluid first-bg-layout">
                    <div className="container">
                        <div className="row">
                           <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card"></div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"10px"}}>
                                   
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label>Nama Dokter</label>
                                            <label style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card"></div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"10px"}}>
                                   
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label>Nama Dokter</label>
                                            <label style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card"></div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"10px"}}>
                                   
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label>Nama Dokter</label>
                                            <label style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card"></div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"10px"}}>
                                   
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label>Nama Dokter</label>
                                            <label style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card"></div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"10px"}}>
                                   
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label>Nama Dokter</label>
                                            <label style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4" id="card-article-loop">
                                <div className="card-article">
                                    <div className="img-card"></div>
                                    <div className="rows-header" style={{paddingLeft:"15px",borderBottom:"1px solid #A0A4A8",paddingTop:"10px"}}>
                                   
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  
                                    </div>
                                    <div className="rows-lebel" style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px"}}>
                                       
                                            <label>Nama Dokter</label>
                                            <label style={{float:"right"}}>15,Februari 2019</label>
                                        
                                    </div>
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