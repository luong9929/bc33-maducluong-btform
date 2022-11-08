import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewProduct, update } from '../../Redux/Reducer/quanLySinhVien'
import Table from './Table'

 class BaiTapForm extends Component {
  
  state= {
    values:{
      masv:'',
      name:'',
      tel:'',
      email:'',
    },
    errors:{
      masv:'',
    name:'',
    tel:'',
    email:'',
    },
    isSubmit:true,
    
  }



  handleChange = (e) =>{
    let {id,value} = e.target
    let newValues = {...this.state.values}
    newValues[id] = value
    let newErrors = {...this.state.errors}
          let errMessage = '';
    if(value.trim() === ''){
        errMessage =  ' Dữ liệu không được bỏ trống '
    }else{
      let dataType = e.target.getAttribute('data-type');
            if (dataType === 'number') {
                let regexNumber = /^\d+$/;
                if (!regexNumber.test(value)) {
                  errMessage =  'Dữ liệu nhập phải là số!';
                }
            }
            if (dataType == 'email') {
                let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if (!regexEmail.test(value)) {
                  errMessage =  'Email không đúng định dạng!';
                }
            }
    }
    newErrors[id]=errMessage
    let submit = false;
        for (let key in newValues) {
            if (newValues[key].toString().trim() === '') {
                submit = true;
            }
        }
        
    this.setState({
      values:newValues,
      errors:newErrors,
      isSubmit:submit
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const newArr = {...this.state.values}
    const action = addNewProduct(newArr)
    this.props.dispatch(action)
    
  }
  layStore = () => {
    if (localStorage.getItem('arrProduct')) 
    {
        let arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
        console.log(arrProduct)
        return arrProduct;
    }
    return [];
  }
editProduct = (prodEdit) => {
  console.log(prodEdit);
  this.setState({
    values: prodEdit,
  });
};
  handelUpdate = () =>{
    const updateArr = this.state.values
    const action = update(updateArr)
    this.props.dispatch(action)
  }
  
  render() {
   
    return (
        <>
        
      <form className='container' onSubmit={this.handleSubmit}>
        <div className="card">
       <div className="card-header bg-dark">
       <h3 className=' text-light'>Thông tin sinh viên</h3>
       </div>
        <div className="card-body">
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <p>Mã Sv</p>
                    <input type="text" className='form-control' id='masv' value={this.state.values.masv} onChange={this.handleChange} data-type="number"/>
                    <p className='text-danger mt-3 px-2'>
                        {this.state.errors.masv}
                    </p>
                </div>
                <div className="form-group">
                    <p>Số điện thoại</p>
                    <input type="tel" className='form-control' id='tel' value={this.state.values.tel} onChange={this.handleChange} data-type="number"/>
                    <p className='text-danger  mt-3 px-2'>
                    {this.state.errors.tel}
                    </p>
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <p>Họ tên</p>
                    <input type="text" className='form-control' id='name' value={this.state.values.name} onChange={this.handleChange}/>
                    <p className='text-danger mt-3 px-2'>
                    {this.state.errors.name}
                    </p>
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input type="email" className='form-control' id='email' value={this.state.values.email} onChange={this.handleChange} data-type="email"/>
                    <p className='text-danger  mt-3 px-2'>
                    {this.state.errors.email}
                    </p>
                </div>
               
            </div>
            
        </div>
        </div>
        <div className="card-footer">
        <button type='submit' className='btn btn-success mx-3' disabled={this.state.isSubmit}> Thêm sinh viên</button>
        <button type='button' className='btn btn-success' onClick={()=>{
            this.handelUpdate()
        }}> Cập nhật</button>
        </div>
        </div>
      </form>

       <Table edit={this.editProduct}/> 
      
      </>
    )
  }

  componentDidMount(){
    
  
   


  }
}


const mapStatetoProp = (state) =>{
  return {
    arrProduct:state.quanLySinhVien.arrProduct
  }
} 
export default connect(mapStatetoProp)(BaiTapForm)

 