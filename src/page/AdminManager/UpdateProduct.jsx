import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCategory } from "../../api/category";
import { get } from "../../api/product";
import { getAllCate } from "../../slice/categorySlice";
import { editProduct } from "../../slice/productSlice";

const UpdateProduct = () => {
  const [category, setCategory] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCate = async () => {
      const { data } = await getAllCategory();
      setCategory(data);
    };
    sendCate();
  }, []);

  useEffect(() => {
    const sendProduct = async () => {
      const { data } = await get(id);
      reset(data);
    };
    sendProduct();
  }, []);

  const onsubmitUpdate = async (dataForm) => {
    console.log("dataForm", dataForm);
    await dispatch(editProduct(dataForm));
    navigate("/admin/product");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmitUpdate)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            {...register("title")}
            placeholder="Name..."
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            {...register("price")}
            placeholder="Price..."
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="text"
            {...register("image")}
            placeholder="Image http://..."
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select" {...register("category")}>
            <option>
              {"<<<"} ----- Category ----- {">>>"}
            </option>
            {category?.map((item, index) => (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            {...register("description")}
            placeholder="Description..."
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
