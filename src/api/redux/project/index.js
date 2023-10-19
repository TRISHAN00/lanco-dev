import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
    projectLoading:false,
    projectPosts:[],
    projectError:'',
    detail: [],
    detailLoading: false,
    detailError: ''
}

export const fetchPosts = createAsyncThunk("fetchPosts", (params) => {
    return get(params);
});

export const fetchPostList = createAsyncThunk("fetchPostList", (params) => {
    return get(params);
});

export const fetchPostDetail = createAsyncThunk("fetchPostDetail", (params) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'project',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        builder.addCase(fetchPostList.pending, (state) => {
            state.loading = true
            state.projectPosts = []
            state.error = ''
        })
        builder.addCase(fetchPostList.fulfilled, (state, action) => {
            state.loading = false
            state.projectPosts = action.payload
            state.error = ''
        })
        builder.addCase(fetchPostList.rejected, (state, action) => {
            state.loading = false
            state.projectPosts = []
            state.error = action.error
        })
        builder.addCase(fetchPostDetail.pending, (state, action) => {
            state.detailLoading = true
            state.detail = []
            state.detailError = ''
        })
        builder.addCase(fetchPostDetail.fulfilled, (state, action) => {
            state.detailLoading = false
            state.detail = action.payload
            state.detailError = ''
        })
        builder.addCase(fetchPostDetail.rejected, (state, action) => {
            state.detailLoading = false
            state.detail = []
            state.detailError = action.error
        })
    }
})


export default postSlice.reducer
