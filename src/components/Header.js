import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { isAuthenticate } from '../auth/localUser';
import { removeLogout } from '../slice/cartSlice';
import { onSearchProducts } from '../slice/productSlice';

const Header = () => {
    const cart = useSelector(state => state.cart);
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const {user} = isAuthenticate();
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('cartProducts');
        dispatch(removeLogout());
        navigate('/')
    }
    const onSearch = (text) => {
        dispatch(onSearchProducts(text));
    }
  return (
    <header className="">
            <div className="bg-[#363F4D] py-4">
                <div className="max-w-7xl grid grid-cols-3 gap-2 mx-auto text-white font-bold">
                    <div className="cursor-pointer">
                        <NavLink to={'#'}><i className="ri-phone-line"></i> + 0865 9989 31</NavLink> | 
                        <NavLink to={'#'}><i className="ri-mail-line"></i> Dungnc@gmail.com</NavLink>
                    </div>
                    <div>
                    </div>
                    
                <div>
                
                    <div className='account grid grid-cols-2 mx-auto'>
                        <div  className='search'>
                            <form action="" className="search-box" onSubmit={handleSubmit(onSearch)}>
                                    <input {...register("text")} className="search-form" required placeholder="Nhập từ khóa" />
                                    <button className="btn-search" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                            </form>
                        </div>
                        {!user && <div  className="float-right login">
                            <NavLink to="/signin" id='signup'>Đăng Nhập</NavLink>
                            <NavLink to="/signup" id='signin'>Đăng Ký</NavLink>
                        </div>}
                        {user && <div  className=" acc ">
                                <span id="username">{user.email}</span>
                                <button id="logout" onClick={() => logout()} className="btn-logout" title="Đăng xuất"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg></button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
  )
}

export default Header