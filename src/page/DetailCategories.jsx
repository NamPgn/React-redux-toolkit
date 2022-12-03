import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCate } from "../slice/categorySlice";

const DetailCategories = () => {
  const { id } = useParams();
  const [state, setSate] = useState();
  const dispatch = useDispatch();
  useEffect( async () => {
    const data = await dispatch(getCate(id))
    console.log("data_cate",data);
  }, []);
  return <div>DetailCategories</div>;
};

export default DetailCategories;
