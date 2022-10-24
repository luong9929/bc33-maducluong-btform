import React, { Component } from 'react'
import Table from './Table'

export default class BaiTapForm extends Component {
  render() {
    return (
        <>
        
      <form className='container'>
        <div className="card">
       <div className="card-header bg-dark">
       <h3 className=' text-light'>Thông tin sinh viên</h3>
       </div>
        <div className="card-body">
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <p>Mã Sv</p>
                    <input type="text" className='form-control' id='masv' />
                </div>
                <div className="form-group">
                    <p>Số điện thoại</p>
                    <input type="tel" className='form-control' id='tel' />
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <p>Họ tên</p>
                    <input type="text" className='form-control' id='name' />
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input type="email" className='form-control' id='email' />
                </div>
               
            </div>
            
        </div>
        </div>
        <div className="card-footer">
        <button type='submit' className='btn btn-success mx-3'> Thêm sinh viên</button>
        <button type='button' className='btn btn-success'> Cập nhật</button>
        </div>
        </div>
      </form>

       <Table/> 
      
      </>
    )
  }
}
