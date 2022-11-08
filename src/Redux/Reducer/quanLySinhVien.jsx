import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrProduct:[
      
    ]
}

const quanLySinhVien = createSlice({
  name: "quanLySinhVien",
  initialState,
  reducers: {
    addNewProduct:(state,{type,payload})=>{
      const newArr = payload
      state.arrProduct.push(newArr)

      
        let stringArrProduct = JSON.stringify(state.arrProduct);
        localStorage.setItem('arrProduct', stringArrProduct);
        
    

    },
    
    delProduct:(state,{type,payload}) =>{
      const masv = payload
      state.arrProduct = state.arrProduct.filter(item => item.masv !== masv)
      let stringArrProduct = JSON.stringify(state.arrProduct);
      localStorage.setItem('arrProduct', stringArrProduct);
      
    },
    update:(state,{type,payload}) =>{
      const updateArr = payload
      console.log(updateArr)
      let prodUpdate = state.arrProduct.find((pord)=>pord.masv === updateArr  )
      for (let key in prodUpdate ){
        prodUpdate[key] = updateArr[key]

      }
      console.log(prodUpdate)
      updateArr = state.arrProduct
      let stringArrProduct = JSON.stringify(state.arrProduct);
      localStorage.setItem('arrProduct', stringArrProduct);
    }
  }
});

export const {addNewProduct,delProduct,update
} = quanLySinhVien.actions

export default quanLySinhVien.reducer