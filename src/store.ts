import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice'
import candidateReducer from './reducers/candidateSlice';

const store = configureStore({
        reducer:{
            user: userReducer,
            candidate:candidateReducer
        }

    }
)

export default store;
