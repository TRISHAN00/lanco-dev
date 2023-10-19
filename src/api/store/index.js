import {configureStore} from "@reduxjs/toolkit";
import postReducer from '../redux/post'
import globalReducer from '../redux/global'
import homeReducer from'../redux/home'
import aboutReducer from '../redux/about'
import projectReducer from '../redux/project'
import newsReducer from '../redux/news'
import businessReducer from '../redux/business'
import landownerReducer from '../redux/landowner'
import buyerReducer from '../redux/buyer'
import careerReducer from '../redux/career'
import contactReducer from '../redux/contact'

const store = configureStore({
    reducer: {
        post: postReducer,
        global: globalReducer,
        home : homeReducer,
        about: aboutReducer,
        project: projectReducer,
        news: newsReducer,
        business: businessReducer,
        landowner: landownerReducer,
        buyer : buyerReducer,
        career: careerReducer,
        contact : contactReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store

