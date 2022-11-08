import React, { Component } from 'react'
import { connect, Connect } from 'react-redux'
import { delProduct, editProduct } from '../../Redux/Reducer/quanLySinhVien'
 class Table extends Component {





  
  render() {
    console.log(this.props.arrProduct)
    const {edit} = this.props
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
           {this.props.arrProduct.map((item,index)=>{
             return <tr key={index}>
                 <td>{item.masv}</td>
              <td>{item.name}</td>
              <td>{item.tel}</td>
              <td>{item.email}</td>
              <td>
                <button className='btn btn-danger mx-3' onClick={()=>{
                  const action = delProduct(item.masv)
                  this.props.dispatch(action)
                }}> Xóa</button>
                <button className='btn btn-warning'onClick={()=>{
                 edit(item)
                }}>Sửa</button>
            </td>
            
             </tr>
           })}
        </tbody>
            </table>
     
    )

    
  }
  
}


const mapStatetoProp = (state) =>{
  return {
    arrProduct:state.quanLySinhVien.arrProduct
  }
}

export default connect(mapStatetoProp)(Table)
