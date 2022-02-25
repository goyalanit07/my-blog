import React from 'react'

export default function BlogItem(props) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5>
                    <p className="card-text"> {props.info} </p>
                    <button type="button" className="btn btn-secondary btn-sm mx-1" onClick={props.editBtn}>Edit</button>
                    <button type="button" className="btn btn-secondary btn-sm mx-1" onClick={props.deleteBtn}>Delete</button>
                </div>
            </div>
        </div>
    )
}
