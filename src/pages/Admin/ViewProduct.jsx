import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} from '../../../src/api/product'
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

function ViewProduct(){
    const[products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    //Fetch all products from database thro' interface product.js in src/api
    useEffect(() =>{
        const getAllProd = async() =>{
            try{
                const allProd = await getAllProducts();                
                setProducts(allProd);
            } catch(error){
                console.error("Failed to get products:", error);
            }
        }
        getAllProd();
    },[]);

    const handleEdit = (product) =>{
        navigate(`/admin/addoreditproduct/${product._id}`);
    }

    return(
        <>
        <div className="container mx-auto p-6">
            <h1 className="text-xl font-bold text-center mb-6">Admin Product DashBoard</h1>
        </div>
        <div className="mb-6 flex justify-end">
            <Link to="/admin/addoreditproduct">
                <button className="bg-black text-white p-2 rounded-md w-32 h-8 mr-4 flex items-center justify-center cursor-pointer text-xs">Add New Product</button>
            </Link>
        </div>
        <div>
            <table className="min-w-full text-sm text-left text-gray-500 m-2">
                <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                    <tr>
                        <th className="px-6 py-3">Image</th>
                        <th className="px-6 py-3">Product Name</th>
                        <th className="px-6 py-3">Product Desc</th>
                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">Size</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>                    
                </thead>
                <tbody>
                    {products.map((product, index) =>(
                        <tr  key={product._id || index} className="border-b">
                            <td className='px-6 py-4'>
                                <img className="w-16 h-16 object-cover" src={product.image} alt={product.name} />
                            </td>
                            <td className='px-6 py-4'>{product.prodname}</td>
                            <td className='px-6 py-4'>{product.proddesc}</td>
                            <td className='px-6 py-4'>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</td>
                            <td className='px-6 py-4'>{product.size}</td>
                            <td className='px-6 py-4'>${product.price["$numberDecimal"]}</td>
                            <td>
                            
                                <button onClick ={() => handleEdit(product)}>
                                    <PencilIcon className="h-5 w-5 text-green-800 hover:text-blue-700 cursor-pointer" />
                                </button>&nbsp;&nbsp;
                                <button>
                                    <TrashIcon className="h-5 w-5 text-yellow-900 hover:text-red-700 cursor-pointer" />
                                </button>
                                </td>
                        </tr>
                    ))
                    }
                    
                </tbody>
            </table>
        </div>
        
            
        </>
    )
}

export default ViewProduct;