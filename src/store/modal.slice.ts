import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showModal: false,
        showModalEdit: false,
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
        showModalEdit: state => {
            state.showModalEdit = true;
        },
        closeModalEdit: state => {
            state.showModalEdit = false;
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

export const {
    showModalOrder,
    closeModal,
    showModalEdit,
    closeModalEdit,
    IIN,
    FullName,
    PhoneNumber } = modalSlice.actions