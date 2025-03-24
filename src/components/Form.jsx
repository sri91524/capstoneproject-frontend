import { useState } from 'react';

function Form(props){

    const [formData, setFormData] = useState({category:"",searchterm:""});

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.productsearch(formData.category,formData.searchterm);
    }


return(
    <div>
        <form onSubmit={handleSubmit} className="space-y-6">
            <select name="category" value={formData.category} onChange ={handleChange} className="border p-2 rounded-md w-64 h-10">
                <option value="">select category</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kids">Kids</option>
            </select>
            <input type="text" name ="searchterm" value={formData.searchterm} onChange={handleChange}  className="border p-2 rounded-md w-64 h-10"/>
            
            <input type ="submit" value ="Search" className="text-white p-2 rounded-md w-30 h-10 cursor-pointer btnSearch" />
        </form>
    </div>
)
};

export default Form;