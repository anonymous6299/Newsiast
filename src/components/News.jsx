import NewsInd from './NewsInd.jsx'
import { useState, useEffect } from 'react'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [Val, setVal] = useState(1)
  const [TotalRes, setTotalRes] = useState(0)
  const [API_KEY, setAPI_KEY] = useState(import.meta.env.VITE_API_KEY)
  const news = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&category=${props.category ? props.category : "general"}&apiKey=${API_KEY}`;
    let data = await fetch(url)
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalRes(parsedData.totalResults)
  }
  useEffect(() => {
    news();
  }, [])
  const style = {
    borderRadius: "300px"
  }
  let next = async () => {
    const url = `https://newsapi.org/v2/top-headlines?&pageSize=5&category=${props.category ? props.category : "general"}&country=us&page=${Val + 1}&apiKey=${API_KEY}`;
    let data = await fetch(url)
    let parsedData = await data.json();
    console.log(parsedData)
    setArticles(parsedData.articles)
    setVal(Val + 1)
  }
  let prev = async () => {
    const url = `https://newsapi.org/v2/top-headlines?&pageSize=5&category=${props.category ? props.category : "general"}&country=us&page=${Val - 1}&apiKey=${API_KEY}`;
    let data = await fetch(url)
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setVal(Val - 1)
  }
  return (
    <div className='container '>
      <div className="container my-2 d-flex justify-content-between">
        <button type="button" style={style} disabled={Val === 1} onClick={prev} className="btn btn-primary d-flex align-items-center justify-content-center pe-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: "18px", marginTop: "2px" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

          Prev
        </button>
        <button type="button" style={style} disabled={Val + 1 > Math.ceil(TotalRes / 5)} onClick={next} className="btn btn-primary d-flex align-items-center justify-content-center ps-4">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: "18px", marginTop: "2px" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </button>
      </div>
      <hr />
      < div className="d-flex flex-column align-items-center">
        {articles.map((ele, index) => {
          return <div key={index}><NewsInd title={ele.title} desc={ele.description} img={ele.urlToImage} link={ele.url} author={ele.author} /> </div>
        })}
      </div>
    </div>
  )
}

export default News
