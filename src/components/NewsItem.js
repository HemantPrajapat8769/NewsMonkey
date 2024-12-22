import React from 'react'

 const NewsItem =(props)=> {
    let { title, description, imageUrl, newUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
        <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'

        }}>
        <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
          <img src={!imageUrl ? "https://investors.com/wp-content/uploads/2023/12/Stock-quantumcomputer-aigenerated-01-adobe.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a href={newUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }

  export default NewsItem
