import React from 'react'



export default function Newsitem(props) {
 
    let {title,disc,imgurl,topicurl,author,source}=props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source.id}
  </span>
          <img src={imgurl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{disc}....</p>
            <p className="card-text">By {author}</p>
            <a href={topicurl} target="_blank" rel="noreferrer" className="btn  btn-outline-info">Read more</a>
          </div>
        </div>
      </div>
    )
  
}
