function NewsDisplay({news}) {

    const formattedPubDate = new Date(news.published_at).toLocaleDateString("en-CA");

    const loaded = () => {
        return (
            <div className="container mx-auto min-h-screen flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    
                        <div className="flex items-center justify-center p-4">                           
                            <div className="flex flex-col items-center">
                                <hr className="border-t border-gray-400 w-full my-4" /><hr/>
                                <p className="text-4xl font-bold text-left my-4">{news.title}</p>
                                <p className="text-sm text-left text-gray-400 font-bold my-4">Published date: {formattedPubDate}</p>
         
                                <hr className="border-t border-gray-400 w-full" /><hr/>
                                <br />                                
                                <img
                                    src={news.image_url}
                                    alt={news.source}
                                    className="w-full h-auto mb-4 rounded-lg"
                                />                                
                                <p className="text-lg text-left">{news.description}</p>                                
                                <a href={news.url} class="text-blue-500 hover:text-blue-700">Read More..</a>
                                                             
                            </div>                           
                        </div>                  
                </div>
            </div>
        );
    };

    const loading = () => {
        return (                        
            <h2>Loading....</h2>
        )
    };

    return news ? loaded() : loading();
}

export default NewsDisplay;