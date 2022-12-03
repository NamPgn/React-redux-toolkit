import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Table, Space, Button } from "antd";
import { DeleteOutlined, DownloadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteCate, getAllCate } from "../../slice/categorySlice";

const CategoryManager = () => {
  const category = useSelector((state) => state.category.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCate());
  }, []);

  const colums = [
    {
      title: "#",
      dataIndex: "key",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "CreateAt",
      dataIndex: "createAt",
      width: 150,
    },
    {
      title: "Update",
      dataIndex: "update",
      width: 150,
    },
    {
      title: "Remove",
      dataIndex: "remove",
      width: 100,
    },
  ];
  const dataSource = category.map((item, index) => {
    console.log("item", item);
    return {
      key: index + 1,
      name: (
        <NavLink to={`${item.id}/detail`}>
          {item.title}
        </NavLink>
      ),
      createAt: item.createdAt,
      update: (
        <NavLink to={`${item.id}/edit`}>
          <Button type="primary" shape="round" icon={<DownloadOutlined />}>
            {" "}
            Update{" "}
          </Button>
        </NavLink>
      ),
      remove: (
        <Button
          type="primary"
          onClick={() => dispatch(deleteCate(item.id))}
          danger
          shape="round"
          icon={<DeleteOutlined />}
        >
          {" "}
          Remove{" "}
        </Button>
      ),
    };
  });
  return (
    <div>
      <button className="btn btn-info float-left">
        <NavLink to={"/admin/category/add"} className="text-[#fff]">
          Add Category ++
        </NavLink>
      </button>

      <Table columns={colums} dataSource={dataSource} />
    </div>
  );
};

export default CategoryManager;
