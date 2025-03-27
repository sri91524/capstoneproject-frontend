import {useState, useEffect} from 'react'
import NewsSearchBar from '../components/NewsSearchBar';
import NewsDisplay from '../components/NewsDisplay';
import globalNewsImage from '../images/globalnews.jpg'

function SearchNews(){
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const [news, setNews] = useState(null);    

    const getNewsArticle = async(newscategory, searchterm) =>{
        try{
            let url= `https://api.thenewsapi.com/v1/news/all?api_token=${apiKey}&search=${searchterm}&language=en&categories=${newscategory}`;

            // const response = await fetch(url);
            // const data = await response.json();           
            setNews(data.data);  
            console.log(news);       
        }catch(e){
            console.error(e);
        }
    };

    useEffect(() =>{       
        getNewsArticle('sports','');
    },[])
    return(
        <>
            <img src={globalNewsImage} alt="Global News" className="w-48 h-auto mb-4 rounded-lg" />
            <NewsSearchBar newssearch ={getNewsArticle}/>
            <div className='img-container'>
                {                  
                    news && news.length >0?
                    news.map((news) => 
                        <NewsDisplay key={news.uuid} news ={news}/>):
                    (                        
                        <div className="flex justify-center items-center w-full h-64 bg-gray-100 border border-gray-300 rounded-lg p-4">
                            <h3 className="text-xl font-semibold text-center text-gray-600">
                                Cannot find related articles for your search!!
                            </h3>
                        </div>
                    )               
                }
            </div>            
        </>
    )
}
export default SearchNews;