import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCategory } from '../../api/category';
import { addProduct } from '../../slice/productSlice';

const AddProduct = () => {
    const [cate, setCate] = useState([])
    const {register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const getCate =  () => {
            const {data} =  getAllCategory()
            console.log(data)
            setCate(data);
        }
        getCate()
    }, [])

    const onSubmit = async (dataForm) => {
        await dispatch(addProduct(dataForm));
        navigate('/admin/product')
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" {...register('title', {required: true})} className="form-control" placeholder='Name...' required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" {...register('price', {required: true})} className="form-control" min={1} placeholder='Price...' required/>
                </div>
                <div className='mb-3'>
                    <label className="form-label">Image</label>
                    <input type="text" {...register('image', {required: true})} className='form-control' placeholder='Image http://...' required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category: </label>
                    <select className="form-select" {...register("category")} aria-label="Default select example">
                        <option> {'<<<'} ------ Category ------ {'>>>'}</option>
                        {cate?.map((item, index) => 
                            <option value={item._id} key={index} required>{item.name}</option>    
                        )}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" {...register('description', {required: true})} className="form-control" placeholder='Description...' required/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default AddProduct