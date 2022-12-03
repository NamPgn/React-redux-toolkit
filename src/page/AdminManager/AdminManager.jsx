import React, { useEffect } from 'react'
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUserAdmin } from '../../slice/userSlice';


const AdminManager = () => {

    const Users = useSelector(data => data.user.value);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUserAdmin())
    }, [])

    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            width: 50,
        },
        {
            title: 'Username',
            dataIndex: 'name',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: 150,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            width: 150
        },
        ];

    const dataSource = Users.map((item, index) => {
        return {
            key: index + 1,
            name: item.username,
            email: item.email,
            role: item.role == 1 ? 'Admin' : '',
        }
    })
    return (
        <div>
            <Table columns={columns} dataSource={dataSource} />
        </div>
    )
}

export default AdminManager