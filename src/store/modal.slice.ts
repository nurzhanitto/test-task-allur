import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showModal: false
    },
    reducers: {
        showModalOrder: state => {
            state.showModal = true;
        },
        closeModal: state => {
            state.showModal = false;
        },
    }
})

export const { showModalOrder, closeModal } = modalSlice.actions