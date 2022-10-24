import {configureStore} from '@reduxjs/toolkit'
import quanLySinhVien from './Reducer/quanLySinhVien'





export const store = configureStore({

    reducer:{
        quanLySinhVien:quanLySinhVien
    }











})