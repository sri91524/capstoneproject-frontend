import {useState, useEffect} from 'react';
import {Link, useParams } from 'react-router-dom';
import {createProduct, getProduct, updateProduct} from '../../api/product';

function AddOrEditProduct(){
    const [newProduct, setNewProduct] = useState({
        prodname: '',
        proddesc:'',
        category:'',
        size:'',
        price:'',
        image:''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState({});
    const {productId} = useParams(); //Get productId from url

    const formControlClass = 'mt-1 p-2 border border-gray-300 text-sm rounded-md w-full focus:outline-none';

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setNewProduct((prevProduct) =>({
            ...prevProduct, 
            [name]: value
        }));
    };

    const validateForm = () => {
        const newError = {};         
              
        // Validate Price (ensure it's a positive number)
        if (!newProduct.price || newProduct.price <= 0) {
          newError.price = 'Price must be a positive number';
        }
        //if in case need to validate image url
        // const imageUrlPattern = /\.(jpg|jpeg|png|gif|bmp|webp)$/i; // Regex for image URL validation
        // // Validate Image URL
        // if (!newProduct.image || !/^https?:\/\/[^\s]+$/.test(newProduct.image)) {
        //   newError.image = 'Please provide a valid URL';
        // } else if (!imageUrlPattern.test(newProduct.image)) {
        //   newError.image = 'Please provide a valid image URL (jpg, jpeg, png, gif, bmp, webp)';
        // }
    
        return newError; // Return the error object
      };

      useEffect(() =>{
        if(productId){
            const fetchProduct = async() =>{
                try{
                    const product = await getProduct(productId);
                    setNewProduct(product);
                }catch(error){
                    console.error('Error fetching product', error);
                    setError({general: 'Failed to load product details'})
                }
            }
            fetchProduct();
        }
      },[productId]);

    const handleSubmit = async(e) =>{
        e.preventDefault();

        // Reset previous errors before trying again
        setError({});
        setSuccessMessage('');

        // Validating the form for price
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
        setError(formErrors); // Set validation errors
        return; // Prevent submission if there are validation errors
        }

        try{
            if(productId){
                console.log(productId);
                await updateProduct(productId,newProduct);
                setSuccessMessage('Product updated successfully!');
                console.log('Product updated successfully');  
            }
            else
            {
                await createProduct(newProduct);
                setSuccessMessage('Product added successfully!');
                console.log('Product added successfully');
            }
            
        }catch(error){
            console.error('Error creating product', error)
            setError({ general: 'There was an issue adding the product. Please try again later.' })
        }
    }

    return(        
        <div className='container mx-auto p-6'>
            <h1 className='text-xl font-bold text-center mb-6'>
            {productId ? 'Edit Product' : 'Add New Product'}</h1>
            <div className="mb-4 flex justify-end">
                <Link to="/admin/viewproduct" className="text-blue-500 hover:underline mr-8">
                    View Products
                </Link>
            </div>
            <form onSubmit ={handleSubmit} className='border border-gray-300 rounded-md p-6 shadow-md w-[40%] mx-auto'>
                <div className='mb-4 grid grid-cols-2 gap-2'>
                    <label className='text-sm font-medium text-gray-700'>Product Name</label>
                    <input type="text" name="prodname" value={newProduct.prodname} onChange={handleChange} className={formControlClass}  required/>                    
                </div>
                <div className='mb-4 grid grid-cols-2 gap-2'>
                    <label className ="text-sm font-medium text-gray-700">Product Description</label>
                    <textarea name ="proddesc" value={newProduct.proddesc}
                    onChange = {handleChange}
                    className={formControlClass}/>
                </div>
                <div className='mb-4 grid grid-cols-2 gap-2'>
                    <label className='text-sm font-medium text-gray-700'>Category</label>
                    <select
                        name='category'
                        value={newProduct.category}
                        onChange={handleChange}
                        className={formControlClass} required
                        >   
                            <option value=''>Select a category</option>
                            <option value='men'>Men</option>
                            <option value='women'>Women</option>
                            <option value='kids'>Kids</option>      
                    </select>                  
                </div>
                <div className='mb-4 grid grid-cols-2 gap-2'>
                    <label className='text-sm font-medium text-gray-700'>Size</label>
                    <select name="size" value ={newProduct.size} onChange={handleChange} className={formControlClass} required>
                        <option value=''>Select size</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                    </select>
                </div>
                <div className='mb-4 grid grid-cols-2 gap-2'>
                    <label className='text-sm font-medium text-gray-700'>Price</label>
                    <input type="number" name="price" value={newProduct.price["$numberDecimal"]} onChange={handleChange} className={formControlClass} step="0.01" required/>
                    {error.price && <span className="text-red-500 text-sm">{error.price}</span>}
                </div>
                <div className='mb-4 grid grid-cols-2 gap-2'>
                    <label className='text-sm font-medium text-gray-700'>Image URL</label>
                    <input type="text" name="image" value={newProduct.image} onChange ={handleChange} className={formControlClass} required/>                    
                </div>
                {error.general && <div className="text-red-500 text-sm mb-4">{error.general}</div>}

                 {/* Show success message */}
                {successMessage && <div className="text-green-500 text-sm mb-4">{successMessage}</div>}


                <div className='flex justify-end'>
                    <button type="submit" className='bg-black text-white p-2 rounded-md w-32 h-8 mr-4 flex items-center justify-center cursor-pointer text-xs'>
                    {productId ? 'Update Product' : 'Add Product'}</button>
                </div>

            </form>
        </div>
    )
}


export default AddOrEditProduct;