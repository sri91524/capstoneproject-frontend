import {useState, useEffect} from 'react'

function SearchNews(){
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const [news, setNews] = useState(null);
    const searchterm ='usd';

    const getNewsArticle = async(searchterm) =>{
        try{
            let url= `https://api.thenewsapi.com/v1/news/all?api_token=${apiKey}&search=usd`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setNews(data);
        }catch(e){
            console.error(e);
        }
    };

    useEffect(() =>{
        const searchterm ='tennis';
        getNewsArticle(searchterm);
    },[])
    return(
        <div>
            <h1>News Articles</h1>
            <NewsSearchBar newssearch ={getNewsArticle}/>
            <NewsTemplate news ={news}/>
        </div>
    )
}
export default App;