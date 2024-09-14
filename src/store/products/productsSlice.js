import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    title: 'Хранилище для продуктов',
    count: 0,
    products: null,
    product: null
}

export const getAllProducts = createAsyncThunk('productsSlice/getAllProducts', async() => {
    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    return data.products
})
export const getProduct = createAsyncThunk('productsSlice/getProduct', async(id) => {
    let res = await fetch('https://dummyjson.com/products/' + id)
    let data = await res.json()
    return data
})

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        addCount(state,action) {
            state.count += action.payload
        },
        minusCount(state,action) {
            state.count -= 1
        } 
    },
    extraReducers: (builder) => {
        // builder.addCase(getAllProducts.pending,(state,action) => {
        //     console.log('Режим ожидания');
        // })
        builder.addCase(getAllProducts.fulfilled, (state,action) => {
            console.log('Данные получены успешно');
            state.products = action.payload
        })
        builder.addCase(getProduct.fulfilled, (state,action) => {
            state.product = action.payload
        })
        // builder.addCase(getAllProducts.rejected,(state,action) => {
        //     console.log('Произошла ошибка');
        // })
    }
})

export const { addCount, minusCount } = productsSlice.actions

export default productsSlice.reducer

export const productsSelector = (state) => state.products