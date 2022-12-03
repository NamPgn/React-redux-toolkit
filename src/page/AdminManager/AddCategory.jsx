import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCate } from '../../slice/categorySlice';

const AddCategory = () => {
    const {register , handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (dataForm) => {
        await dispatch(addCate(dataForm));
        navigate('/admin/category');
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" {...register('name', {required: true})} className="form-control" required/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default AddCategory