import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
        <div className=" grid grid-cols-4 gap-2 max-w-7xl mx-auto mb-8">
            <div className="mx-auto font-bold">
              <img src="https://www.memestreasures.com/wp-content/uploads/2017/08/LV-logo.png" alt="" className="w-36" />
              <NavLink to="">Giới thiệu</NavLink><br/>
              <NavLink to="">Điều khoản sử dụng</NavLink><br/>
              <NavLink to="">Công nghệ sản xuất</NavLink>
            </div>
            <div className="mt-10 mx-auto font-bold">
                <h2 className="font-bold text-2xl mb-8">Tài khoản</h2>
                <NavLink to="" >Đăng nhập/đăng ký</NavLink><br/>
                <NavLink to="" >Lịch sử mua hàng</NavLink><br/>
                <NavLink to="" >Danh sách địa chỉ</NavLink>
            </div>
            <div className="mt-10 mx-auto font-bold">
              <h2 className="text-2xl mb-8">Hỗ trợ khách hàng</h2>
              <NavLink to="" >Chính sách thành viên</NavLink><br/>
              <NavLink to="" >Chính sách đổi trả</NavLink><br/>
              <NavLink to="" >Chính sách bảo hành</NavLink><br/>
            </div>
            <div className="mt-10 mx-auto">
              <h2 className="font-bold text-2xl mb-8">Tải App</h2>
              <NavLink to="" ><img src="https://theme.hstatic.net/1000184601/1000766836/14/app-store.svg?v=1223" alt=""/></NavLink>
              <NavLink to="" ><img src="https://theme.hstatic.net/1000184601/1000766836/14/google-play.svg?v=1223" alt=""/></NavLink>
            </div>
        </div>
  )
}

export default Footer