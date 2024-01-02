import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen: false,
    // document: [],
    // tariff: [],
}

const taskSlices = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setIsMenuOpen(state, action) {
            return state = { ...state, isMenuOpen: action.payload };
        },
        // setDocument(state, action) {
        //     return state = { ...state, document: action.payload };

        // },
        // setTariff(state, action) {
        //     return state = { ...state, tariff: action.payload };

        // },

    }
})

export default taskSlices.reducer;
export const { setIsMenuOpen, setDocument, setTariff } = taskSlices.actions