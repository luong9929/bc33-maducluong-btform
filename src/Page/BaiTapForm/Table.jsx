import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
     
            <table className='table container mt-4'>
            <thead className='bg-dark text-light'>
            <tr>
                <th>Mã sinh viên</th>
                <th>Họ tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th></th>
                
            </tr>
        </thead>
        <tbody  >
            <td>1</td>
            <td>Mã đức lương</td>
            <td>0352591999</td>
            <td>Chicugiun@gmail.com</td>
            <td>
                <button className='btn btn-danger mx-3'> Xóa</button>
                <button className='btn btn-warning'>Sửa</button>
            </td>
            
        </tbody>
            </table>
     
    )
  }
}
