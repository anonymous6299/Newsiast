import React from 'react'

const NewsInd = (props) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.img ? props.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Kw5XZP9hI3ZQZfQckTWyYXUzgmPJPQEn22LZ8H1xSQ&s"} style={{height:"100%"}} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <p className="card-text"><small className="text-body-secondary">{props.author?`By ${props.author}`:"Newsiast"}</small></p>
              <div className="container d-flex justify-content-end align-items-end" style={{height:`${props.title.length===96 && props.desc.length===162?"":80}px`}}><a href={props.link} target='_blank' className='btn btn-primary'>Read</a> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsInd
