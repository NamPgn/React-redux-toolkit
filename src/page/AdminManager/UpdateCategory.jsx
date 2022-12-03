import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategory } from '../../api/category';
import { getCate, updateCate } from '../../slice/categorySlice';

const UpdateCategory = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const sendGetCate = async () => {
            const {data} = await getCategory(id);
            reset(data)
        }   
        sendGetCate()
    }, [])

    const onSubmit = async (dataForm) => {
        await dispatch(updateCate(dataForm))
        navigate('/admin/category')
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

export default UpdateCategory