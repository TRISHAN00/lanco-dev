import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    globalLoader: true,
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        loading: (state) => {
            state.globalLoader = false
        },
        loaded: (state) => {
            state.globalLoader = false
        }
    },
    extraReducers: {
        ['fetchdata/fulfilled']: (state, action) => {
            state.globalLoader = false
        }
    }
})


export default globalSlice.reducer
export const {loaded, loading} = globalSlice.actions
