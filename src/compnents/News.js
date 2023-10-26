import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultPrps = {
    country: "in",
    pageSize: 6,
    category: "Genral"
  }

  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }
  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: false,
    };
  }
  async UpdateNews(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c840331979484984a9768986c35bac2e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({ articles: parseData.articles })
  }
  async componentDidMount() {
    this.UpdateNews();

  }

    handlePerviousClick = async ()=>
    {
      this.setState(
        {
          page: this.state.page -1,
        })
      this.UpdateNews();
    }
    handleNextClick = async ()=>
    {
      this.setState(
        {
          page: this.state.page +1,
        })
        this.UpdateNews();
    
    }


  render() {
    return (
      <>
        <div className="container my-3 mx-8" id="news-bg">
          {this.state.loading && <div class="text-center">
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        </div>}

          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 90) : ""}
                  urlToImage={element.urlToImage}
                  url={element.url}
                  publishedAt = {element.publishedAt}
                  author ={element.author}
                  source = {element.source.name}
                />
              </div>;
            })}
          </div>

          </div>
          <div className="container my-2">
          <div className="d-flex justify-content-evenly">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePerviousClick}>&larr; Pervious </button>
          <button disabled = {this.state.page +1 > Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;  </button></div>

        </div>
      </>
    );
  }
}
export default News;
