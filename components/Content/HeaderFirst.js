import React from 'react'
class HeaderFirst extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/"><img src="../../static/img/logo.svg"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                                <a className="nav-link" href="#">Beranda<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Artikel<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Obat<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Dokter<span className="sr-only">(current)</span></a>
                            </li>
                   </ul>
                </div>
                </nav>
            </div>  
        )
    }
}
export default HeaderFirst;