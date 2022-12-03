import { instance } from "./instance"

export const orderProduct = (order) => {
    const url = `/order`
    return instance.post(url, order)
}

export const getAllOrderProducts = () => {
    const url = `/orders`
    return instance.get(url)
}

export const getOrderDetail = (id) => {
    const url = `/orderdetail/${id}`
    return instance.get(url)
} 