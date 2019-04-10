import React from 'react'
class FooterFirst extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                 <h1 className="heading-footer">Konsultasi Sehat, Dengan Cepat</h1>
                            </div>
                            <div className="col-12">
                                 <p className="paragprah-footer">Aplikasi ditujukan kepada para masyarakat dalam melakukan konsultasi dengan
                                     Dokter yang diingkan, dan bedasarkan wilayah tertentu.
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>
                 {`
                 .paragprah-footer{
                    font-family: 'Source Sans Pro', sans-serif;
                    font-size: 14px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.71;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffffff;
                    margin-top:36px;
                 }
                 .heading-footer{
                    font-family: 'Source Sans Pro', sans-serif;
                     text-align:center;
                     font-size: 40px;
                     font-weight: normal;
                     font-style: normal;
                     font-stretch: normal;
                     line-height: 1;
                     letter-spacing: normal;
                     color: #ffffff;
                 }
                    .footer{
                        padding-top:62px;
                        padding-bottom:150px;
                        background:#162d4a;
                    }
                `}
                </style>
            </div>  
        )
    }
}
export default FooterFirst;