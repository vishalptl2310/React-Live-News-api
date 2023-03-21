import React, { Component } from 'react'
import NewsItem from './News_item'
import Spinner from './Spinner';

export default class NewsMainWindow extends Component {
  articles = []

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      Loading : false,
      page: 1  
    }
    document.title = this.props.category;
  }

  async updatePage(){
    this.setState({Loading : true})

    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e6856a5115e04c0299239068a65c8a7e&pagesize=${this.props.pageSize}&page=${this.state.page}`)
    let jsondata = await data.json()
    console.log(jsondata.articles)

    this.setState({
      articles: jsondata.articles,
      Loading : false
    })
 
  }

  async componentDidMount() {
    this.updatePage()
  }

  previousPage = async () => {
    this.setState({
      page: this.state.page - 1
    })
    this.updatePage()
  }

  nextPage = async () => {

    this.setState({
      page: this.state.page + 1
    })
    this.updatePage()
  }

  render() {
    return (
      <>
        <div className="container my-3" >
          <h1 style={{ color: "blue", background:"lightblue"}} className="text-center">NEWS HEADLINES</h1>
          {this.state.Loading&&<Spinner/>}

          {!this.state.Loading&&<div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}  author = {element.author}  date = {element.publishedAt}/>
              </div>
            })}
          </div>}

          <div className="container my-3">
            <div className="d-flex justify-content-between">
              <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.previousPage}>&larr; PREVIOUS </button>
              <button type="button" disabled={Math.ceil(this.state.totalResults /this.props.pageSize) <= this.state.page} className="btn btn-dark" onClick={this.nextPage}> NEXT &rarr;</button>
            </div>
          </div>

        </div>
      </>
    )
  }
}
