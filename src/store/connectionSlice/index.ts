import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type ConnectionState = {
    userAccount: string;
    status: 'loading' | 'success' | 'error' | '';
}

const initialState: ConnectionState = {
    userAccount: '',
    status: '',
};

export const connectToMetamask = createAsyncThunk(
    'connectToMetamask',
    async(ethereum: any, { rejectWithValue }) => {
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
        .addCase(connectToMetamask.rejected, (state) => {
            state.status = 'error';
        })
        
        .addDefaultCase (() => {})
    }
})

const { actions, reducer } = postsSlice;
export default reducer;
export const { setUserAccount } = actions;


