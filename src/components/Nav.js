import React from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar, Badge } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Nav = () => {

    const {cartTotalQuantity} = useSelector(state => state.cart)

  return (
    <div>
        <div className="max-w-7xl mx-auto bg-[#ffffff]">
            <div className="inline-block float-left">
                <img src="https://www.memestreasures.com/wp-content/uploads/2017/08/LV-logo.png" alt="" className="w-40"/>
            </div>
            <div className="float-right login">
                <ul className="flex">
                    <li><NavLink to="/" className=" py-10 px-4 font-bold float-right">Trang chủ</NavLink></li>
                    <li><NavLink to="/blog" className=" py-10 px-4 font-bold float-right">Blog</NavLink></li>
                    <li><NavLink to="/introduct" className=" py-10 px-4 font-bold float-right">Giới thiệu</NavLink></li>
                    <li><NavLink to="/contact" className=" py-10 px-4 font-bold float-right">Liên hệ</NavLink></li>
                    <li className="px-3">
                        <NavLink to="/cart">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-10 w-10 mt-4 w-10 h-10 relative" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            <span className='bag-quantity absolute top-'>
                                <span>3</span>
                            </span> */}
                            <span className="avatar-item flex">
                                <Badge count={cartTotalQuantity}>
                                    <Avatar shape="square" icon={<ShoppingCartOutlined className='icon-cart' />} />
                                </Badge>
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav