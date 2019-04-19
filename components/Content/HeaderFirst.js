import React from 'react'
class HeaderFirst extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="/"><img src="../../static/img/logo.svg"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav ml-auto">
                        <li className="nav-item active link-nav">
                                <a className="nav-link link-nav-a" href="#">Beranda<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active link-nav">
                                <a className="nav-link link-nav-a" href="#">Artikel<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active link-nav">
                                <a className="nav-link link-nav-a" href="#">Obat<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active link-nav">
                                <a className="nav-link link-nav-a" href="#">Dokter<span className="sr-only">(current)</span></a>
                            </li>
                   </ul>
                </div>
                </nav>

            <style jsx global>
            {
                `
                    .link-nav{      
                        margin-right:20px;
                    }
                    .link-nav-a{
                        font-family: 'Source Sans Pro', sans-serif;
                        font-size: 18px;
                        font-weight: normal;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.44;
                        letter-spacing: normal;
                        color: #324967;
                    }
                    .link-nav-a:hover{
                        color: green;
                    }
                `
            }
            </style>
            </div>  
        )
    }
}
export default HeaderFirst;