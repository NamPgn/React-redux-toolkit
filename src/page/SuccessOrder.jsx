import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'

const SuccessOrder = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='bg-cyan-600 h-14'>
            <span className='text-white leading-10 text-lg'>Bạn đã đặt hàng thành công</span>
        </div>
        <br />
        <div className='grid grid-cols-2'>
            <div> <NavLink to={'/'}> <button id='homeOrderSuccess'> Trang chủ </button> </NavLink> </div>
            <div><button id='homeOrderDetail' > Chi tiết đơn hàng </button></div>
        </div>
    </div>
  )
}

export default SuccessOrder