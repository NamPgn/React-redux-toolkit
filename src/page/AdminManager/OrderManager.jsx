import {
  ArrowRightOutlined,
  DeleteOutlined,
  DoubleRightOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Button, Table, Image } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllOrder } from "../../slice/orderSlice";

const OrderManager = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.value);
  console.log(orders);
  useEffect(() => {
    dispatch(getAllOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      title: "Email",
      dataIndex: "email",
      width: 150,
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 150,
    },
    {
      title: "Detail",
      dataIndex: "detail",
      width: 150,
    },
    //   {
    //     title: 'Remove',
    //     dataIndex: 'remove',
    //     width: 100
    //   }
  ];

  const dataSource = orders?.map((item, index) => {
    return {
      key: index + 1,
      name: item.info.firstName + " " + item.info.lastName,
      email: item.info.email,
      phone: item.info.phone,
      status:
        item?.status === 1 ? (
          <div>
            {" "}
            <span className="bg-green-500 text-white p-2 rounded-lg">
              Đã gửi đơn
            </span>
          </div>
        ) : (
          <div>
            {" "}
            <span className="bg-red-500 text-white p-2 rounded-lg">
              Chưa gửi đơn
            </span>
          </div>
        ),
      detail: (
        <NavLink to={`${item._id}/detail`}>
          {" "}
          Detail Order{" "}
          <Button
            type="primary"
            shape="round"
            icon={<ArrowRightOutlined />}
          ></Button>
        </NavLink>
      ),
    };
  });

  return (
    <div>
      <Table columns={colums} dataSource={dataSource} />
    </div>
  );
};

export default OrderManager;
