import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import {getOrderDetail} from '../../api/order'
import { getAllOrder, orderDetail } from '../../slice/orderSlice';

const OrderDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    // const allOrder = useSelector(state => state.order.value);
    // console.log(allOrder.orderItems);
    // useEffect(() => {
    //     dispatch(getAllOrder())
    // }, [])

    const order = useSelector(state => state.order.value);

    useEffect(() => {
        dispatch(orderDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleStatus = (valueStatus) => {
        console.log(valueStatus);
        const alert = window.confirm("Xác nhận gửi đơn hàng");
        if(alert) {
            
        }
    }

  return (
      <div>
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Chi tiết Order</h1>
                <p className="text-base font-medium leading-6 text-gray-600">{order?.createdAt}</p>
                <p className="text-base font-medium leading-6 text-gray-600">{order?.status === 1 ? 
                <span className="bg-green-500 text-white p-2 rounded-lg">Đơn đã giao cho khách</span> 
                : <span className="bg-red-500 text-white p-2 rounded-lg">Đơn chưa gửi cho khách</span> }</p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Đơn hàng của khách</p>
                        {/* cart product user */}
                        { order?.orderItems?.map((item, index) => 
                        <div key={index + 1} className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                <img className="w-full hidden md:block" src={item.image} alt="dress" />
                                <img className="w-full md:hidden" src={item.image} alt="dress" />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{item.name}</h3>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Size: </span> Small
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Color: </span> Light Blue
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base xl:text-lg leading-6">
                                        {item.price}
                                    </p>
                                    <p className="text-base xl:text-lg leading-6 text-gray-800">{item.quantity}</p>
                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">{(item.price * item.quantity )}</p>
                                </div>
                            </div>
                        </div>
                        
                        )}

                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Thành tiền</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Tiền hàng:</p>
                                    <p className="text-base leading-4 text-gray-600">{order?.totalPrice}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total:</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">{order?.totalPrice}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Đơn vị nhận hàng</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="data:image/png;base64,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" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 font-semibold text-gray-800">
                                            Viettel Post
                                            <br />
                                            <span className="font-normal">Giao hàng trong 24h</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">{(30000)}</p> 
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                                    Xem chi tiết đơn vị vận chuyển</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Khách hàng</h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{order?.info?.firstName + ' ' + order?.info?.lastName}</p>
                                    <p className="text-sm leading-5 text-gray-600">02 đơn đặt hàng trước</p>
                                </div>
                            </div>

                            <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 text-gray-800">{order?.info?.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Địa chỉ giao hàng</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{order?.shipAddress?.address + ' ' + order?.shipAddress?.city}</p>
                                </div>
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Địa chỉ thanh toán</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{order?.shipAddress?.address + ' ' + order?.shipAddress?.city}</p>
                                </div>
                            </div>
                            <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                { order?.status === 0 ? 
                                    <button onClick={() => handleStatus(order.status)} className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                                        Gửi đơn</button>
                                : <span className='bg-green-600'>Đơn đã hoàn thành</span> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderDetail