import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showModal: false,
        iin: null as string | null,
        fullName: null as string | null,
        phoneNumber: null as string | null,
    },
    reducers: {
        showModalOrder: state => {
            state.showModal = true;
        },
        closeModal: state => {
            state.showModal = false;
        },
        IIN: (state, action) => {
            state.iin = action.payload;
        },
        FullName: (state, action) => {
            state.fullName = action.payload;
        },
        PhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
    }
})

export const { showModalOrder, closeModal, IIN, FullName, PhoneNumber } = modalSlice.actions