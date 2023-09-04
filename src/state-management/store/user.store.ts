import { ROLE } from "@/models/role.model";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";


export interface UserState{
     userId:string;
     userName:string;
     fullName:string;
     role :ROLE;
     email:string;
    userImage? :string;
    client_ready:boolean;
    token:string;
    logged_in:boolean;
}



const initialState: UserState = {
    userId: '',
    role:ROLE.USER,
    fullName:'',
    userName: '',
    userImage: '',
    email: '',
    client_ready: true,
    token: 'unprotected',
    logged_in: false
}


export const userSlice = createSlice({
    name: 'user-slice',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Partial<UserState>>) => {
            console.log(action);
            state.client_ready = action.payload.client_ready ?? state.client_ready;
            state.logged_in = action.payload.logged_in  ?? state.logged_in;
            state.token = action.payload.token ?? state.token;
            state.email = action.payload.email ?? state.email;
            state.fullName = action.payload.fullName ?? state.fullName;
            state.userImage = action.payload.userImage ?? state.userImage;
            state.userName= action.payload.userName??state.userName;
        },
    }
})