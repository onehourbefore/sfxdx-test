import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ethereum from '../../data/ethereumProvider';

type ConnectionState = {
    userAccount: string;
    status: string;
}

const initialState: ConnectionState = {
    userAccount: '',
    status: '',
};

export const connectToMetamask = createAsyncThunk(
    'connectToMetamask',
    async(_, { rejectWithValue }) => {
        try {
            if(!ethereum) {
                alert('Подключитесь к Метамаск!');
                return;
            }
            const account: string[] = await ethereum.request({ method: "eth_requestAccounts" });
            return account[0];
        } catch(e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setUserAccount: (state, action: PayloadAction<string>) => {
            state.userAccount = action.payload;
        },
    },
    extraReducers: builder => {
        builder
        .addCase(connectToMetamask.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(connectToMetamask.fulfilled, (state, action: any) => {
            state.userAccount = action.payload;
            state.status = 'success';
        })
        .addCase(connectToMetamask.rejected, (state, action: any) => {
            state.status = action.payload;
        })
        
        .addDefaultCase (() => {})
    }
})

const { actions, reducer } = postsSlice;
export default reducer;
export const { setUserAccount } = actions;


