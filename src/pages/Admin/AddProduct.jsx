import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createProduct} from '../../../src/api/product';

function AddProduct(){
    const [newProduct, setNewProduct] = useState({
        prodname: '',
        proddesc:'',
        category:'',
        size:'',
        price:'',
        image:''
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setNewProduct((prevProduct) =>({
            ...prevProduct, 
            [name]: value
        }));
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
    }

    return(
        <div className='container mx-auto p-6'>
            <h1 className='text-xl font-bold text-center mb-6'>Add New Product</h1>
            <form onSubmit ={handleSubmit} className='border border-gray-300 rounded-md p-6 shadow-md w-[60%] mx-auto'>
                <div className='mb-4 grid grid-cols-2 gap-0'>
                    <label className='text-sm font-medium text-gray-700'>Product Name</label>
                    <input type="text" name="prodname" value={newProduct.prodname} onChange={handleChange} className ="mt-1 border border-gray-300 rounded-md w-100"  required/>                    
                </div>
                <div className='mb-4 grid grid-cols-2 gap-0'>
                    <label className ="text-sm font-medium text-gray-700">Product Description</label>
                    <textarea name ="proddesc" value={newProduct.proddesc}
                    onChange = {handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md"/>
                </div>
                <div className='mb-4 grid grid-cols-2 gap-0'>
                    <label className='text-sm font-medium text-gray-700'>Category</label>
                    <select
                        name='category'
                        value={newProduct.category}
                        onChange={handleChange}
                        className='mt-1 p-2 border border-gray-300 rounded-md w-40' required
                        >   
                            <option value=''>Select a category</option>
                            <option value='men'>Men</option>
                            <option value='women'>Women</option>
                            <option value='kids'>Kids</option>      
                    </select>                  
                </div>
                <div className='mb-4'>
                    <label className='text-sm font-medium text-gray-700'>Size</label>
                    <select name="size" value ={newProduct.size} onChange={handleChange} className='mt-1 p-2 border border-gray-300 rounded-md w-30' required>
                        <option value=''>Select size</option>
                        <option value='S'>S</option>
                        <option value='S'>M</option>
                        <option value='S'>L</option>
                        <option value='S'>XL</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='text-sm font-medium text-gray-700'></label>
                    <input type="number" name="price" value={newProduct.price} onChange={handleChange} className='mt-1 p-2 border border-gray-300 rounded-md w-100'/>
                </div>
                <div className='mb-4'>
                    <label className='text-sm font-medium text-gray-700'>Image URL</label>
                    <input type="text" name="image" value={newProduct.image} onChange ={handleChange} className='mt-1 p-2 border border-gray-300 rounded-md w-100'/>
                </div>
                <div className='flex justify-end'>
                    <button type="submit" className='bg-black text-white p-2 rounded-md w-32 h-8 mr-4 flex items-center justify-center cursor-pointer text-xs'>Add Product</button>
                </div>

            </form>
        </div>
    )
}


export default AddProduct;