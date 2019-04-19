import React from 'react'
class Paragraph extends React.Component{
    render(){
        return(
            <div>               
                <p className="paragraph-preview">{this.props.paragraph}</p>

            <style jsx global>
            {`
                .paragraph-preview{
                    margin-top:40px;
                    font-family: 'Source Sans Pro', sans-serif;
                    font-size: 18px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.44;
                    letter-spacing: normal;
                    text-align: justify;
                    color: #324967;
                }
            `}
            </style>
            </div>  
        )
    }
}
export default Paragraph;