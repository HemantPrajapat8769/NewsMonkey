import React, {useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'

 const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
     const capitalizeFirstLetter= (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const updateNews= async ()=>{
      props.setprogress(10);
      const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=da72db6829904889a12d17989c5443ae&page=${page}&pagesize=${props.pageSize}`;
      setLoading(true)
      let data= await fetch(url);
      props.setprogress(30);
      let parsedData= await data.json()
      props.setprogress(70);
      setArticles(parsedData.articles)
      setLoading(false)
      setTotalResults(parsedData.totalResults)
      props.setprogress(100);        
    }
    
    useEffect(() => {
      document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;
      document.body.style.backgroundColor='#8f88a0'
      updateNews();
      // eslint-disable-next-line
    }, [])
    

  
  const fetchMoreData = async () => {
   const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=da72db6829904889a12d17989c5443ae&page=${page+1}&pagesize=${props.pageSize}`;
   setPage(page+1)
   setLoading(true)
   let data= await fetch(url);
   let parsedData= await data.json()
   setArticles(articles.concat(parsedData.articles))
   setTotalResults(parsedData.totalResults)
   setLoading(false)
  }; 

    return (
    <>
    <h2 className='text-center' style={{margin:'30px',marginTop:'90px'}}>NewsMonkey- Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      {loading && <Spinner/>}
    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner/>}
        >
        <div className="container">
              <div className="row">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} 
                imageUrl={element.urlToImage} newUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}
              </div>
      </div>
      </InfiniteScroll>
    </>
      
    )
  } 

News.defaultProps={
  pageSize:8,
  country:'us',
  category:"general"
}
 News.propTypes={
  pageSize:PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string,
}

export default News;

