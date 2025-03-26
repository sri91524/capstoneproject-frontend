import {useState} from 'react';

function NewsSearchBar(props){

    const [searchData, setSearchData] = useState({category:"",searchterm:""});

    const handleChange = (e) =>{
        setSearchData({...searchData, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.newssearch(searchData.searchterm);
    }

    return(      
        <div className="form-container">
            <form onSubmit ={handleSubmit} className="form-content-flex items-center gap-2">
                <select 
                    name="category"
                    value ={searchData.category}
                    onChange ={handleChange}
                    className='border rounded-md h-6 text-xs'>
                        <option value="">Select Category</option>
                        <option value="general">General</option>
                        <option value="science">Science</option>
                        <option value="sports">sports</option>
                        <option value="business">business</option>
                        <option value="health">health</option>
                        <option value="entertainment">entertainment</option>
                        <option value="tech">tech</option>
                        <option value="food">food</option>
                        <option value="travel">travel</option>
                    </select>
                <input type="text" value={searchData.searchterm} onChange={handleChange}/>
                <input type="submit" value ="Search" 
                className="text-white p-1 rounded-md h-4 cursor-pointer btnSearch text-xs"/>
            </form>
        </div>    
    )
}
export default NewsSearchBar;