import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';



export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false

    }
    document.title = `${this.capitalize(this.props.category)}-News`

  }
  capitalize = (str) => {

    return str.charAt(0).toUpperCase() + str.slice(1)

  }
  async componentDidMount() {
    this.props.setprogress(30)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48353340582449289f62ad3ff77940ae`
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setprogress(100)
    let dataparsh = await data.json()
    // this.props.setprogress(100)
    console.log(dataparsh)
    // this.props.setprogress(100)
    this.setState({
      articles: dataparsh.articles,
      loading: false
    })
    // this.props.setprogress(100)
  }

  render(props) {
    return (
      <div className='container my-3' >
        <h3 className='text-center'>Top {this.capitalize(this.props.category)} Headline  </h3>
        {this.state.loading && <Spinner />}
          <div className="row my-3">
            {this.state.articles.map((e) => {
              return <div className="col-md-4 my-3" style={{ paddingleft: "40px" }} key={e.url}>
                <Newsitem title={e ? e.title : ""} disc={e ? e.description : ""} imgurl={e ? e.urlToImage : ""} topicurl={e.url} author={e.author} source={e.source} />
              </div>

            })}

          </div>
       
      </div>
    )
  }
}
