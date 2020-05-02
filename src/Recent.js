import React from "react"

import "./recent.css"


function Recent(props) {
    let recent = props.result.map(item => {
        return(
            <div className="card" key={item.fields.sys.id}>
                <div>
                    <h5 className="tag">{item.fields.tags[0]}</h5>
                    <img src={`https:`+item.fields.heroImage.fields.file.url} width="150px" height="150px" />
                </div>
                <div className="card-text">
                    {
                        item.fields.description
                    }
                </div>
            </div>
        )
    })
    return(
        //loop over the data and pass
        <div className="recent">
            <h5>Recent Post</h5>
            {
                recent
            }
        </div>
    )

}
export default Recent