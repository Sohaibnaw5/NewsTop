import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {urlToImage,description,title,url,author,publishedAt,source} = this.props;
    return (
      <div>
        <div className="card my-3 mx-3" id='card'>
             <img src={urlToImage} className="card-img-top" alt="..."/>
             <div className="card-body">
                <h3 className="card-title">{title}</h3> <span className="position-absolute top-0 start-100 translate-middle p-2 badge rounded-pill text-bg-info">{source}</span>
                <p className="card-text">{description}</p>
                <div className="card-footer">
                  <small className="text-body-secondary">By {author} on {new Date(publishedAt).toGMTString()}</small>
                 </div>
                <a href={url} className="btn">Read More</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem
