import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get, post} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchData = createAsyncThunk("fetchData", (params) => {
    return get(params);
});
export const postForm = createAsyncThunk("buyerForm", (params) => {
    return post(params);
});


const postSlice = createSlice({
    name: 'buyer',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        //-- post
        builder.addCase(postForm.pending, (state) => {
            state.loading = true;
            state.success = [];
            state.error = "";
        });
        builder.addCase(postForm.fulfilled, (state, action) => {
            state.loading = false;
            state.success = action.payload.message;
            state.error = "";

        });
        builder.addCase(postForm.rejected, (state, action) => {
            state.loading = false;
            state.success = '';
            state.error = action.error;

        });
    }
})


export default postSlice.reducer
