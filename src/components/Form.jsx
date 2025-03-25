import { useState } from 'react';
import './Form.css'

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
    <div className="form-container">
    <form onSubmit={handleSubmit} className="form-content flex items-center gap-2">
        <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            className="border rounded-md h-6 text-xs"
        >
            <option value="">Select Category</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
        </select>

        <input 
            type="text" 
            name="searchterm" 
            value={formData.searchterm} 
            onChange={handleChange} 
            className="border p-1 rounded-md h-6 text-xs"
        />
        
        <input 
            type="submit" 
            value="Search" 
            className="text-white p-1 rounded-md h-4 cursor-pointer btnSearch text-xs"
        />
    </form>
</div>
)
};

export default Form;