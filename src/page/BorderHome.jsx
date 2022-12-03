import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { Button } from 'antd'
import { cateProducts, onSortProduct } from '../slice/productSlice'
import { getAllCate } from '../slice/categorySlice'

const BorderHome = () => {

  // const [category, setCate] = useState();
  const category = useSelector(state => state.category.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCate())
  }, [])

  const handleCateProducts = (idCate) => {
    console.log(idCate);
    // const data = cateProducts(idCate)
    // console.log(data);
    dispatch(cateProducts(idCate));
  }

  const hanldeSortProduct = (valueSort) => {
    dispatch(onSortProduct(valueSort));
  }
  return (
    <div>
      <div>
        <div className="max-w-9xl text-center mt-20">
          <span className="uppercase font-bold text-4xl">sản phẩm phổ biến</span>
        </div>
        <div className="bg-white">
          <div>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Điều hướng</h1>

                <div className="flex items-center">
                  <div className="sort relative inline-block text-left">
                    <div>
                      <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                        Sắp xếp
                        <svg className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    <div className="sort_down hidden origin-top-right absolute right-0 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                      <div className="py-1" role="none">
                        <Button className="font-medium text-gray-900 w-full block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
                          Hàng mới
                        </Button>

                        <Button className="text-gray-500 block px-4 py-2 w-full text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">
                          Hàng bán chạy
                        </Button>

                        <Button onClick={() => hanldeSortProduct(1)} className="text-gray-500 w-full block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
                          Giá: Thấp đến cao
                        </Button>

                        <Button onClick={() => hanldeSortProduct(-1)} className="text-gray-500 w-full block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">
                          Giá: Cao đến thấp
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <section aria-labelledby="products-heading" className="pt-6 pb-24">
                <h2 id="products-heading" className="sr-only">Products</h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                  <div className="hidden lg:block">
                    <div className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                          <span className="font-medium text-gray-900">
                            Danh mục
                          </span>
                          <span className="ml-6 flex items-center">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-1">
                        <div className="space-y-4">
                          {category?.map((item) => (
                            <div className="flex items-center" key={item._id}>
                              {/* <NavLink to={''} className="ml-3 text-sm text-black-800"> */}
                              <button onClick={() => handleCateProducts(item._id)} className="ml-3 text-sm text-black-800">
                                {item.name}
                              </button>
                              {/* </NavLink> */}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>



                    <div className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                          <span className="font-medium text-gray-900">
                            Màu
                          </span>
                          <span className="ml-6 flex items-center">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-0">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">
                              Trắng
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">
                              Đen
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600">
                              Xanh
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-600">
                              Nâu
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input id="filter-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-color-4" className="ml-3 text-sm text-gray-600">
                              Đỏ
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-color-5" className="ml-3 text-sm text-gray-600">
                              Tím
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                          <span className="font-medium text-gray-900">
                            Size
                          </span>
                          <span className="ml-6 flex items-center">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div className="pt-6" id="filter-section-2">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">
                              M
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">
                              L
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">
                              XL
                            </label>
                          </div>

                          <div className="flex items-center">
                            <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">
                              XXL
                            </label>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="lg:col-span-3">
                    <div className=" rounded-lg h-96 lg:h-full">

                      <Outlet />

                    </div>

                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BorderHome