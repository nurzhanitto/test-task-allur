import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showModal: false,
        showModalEdit: false,
        showModalCar: false,
        iin: null as string | null,
        fullName: null as string | null,
        phoneNumber: null as string | null,
        brand: null as string | null,
        model: null as string | null,
        year: null as string | null,
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
        showModalCar: state => {
            state.showModalCar = true;
        },
        closeModalCar: state => {
            state.showModalCar = false;
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
        setBrand: (state, action) => {
            state.brand = action.payload;
        },
        setModel: (state, action) => {
            state.model = action.payload;
        },
        setYear: (state, action) => {
            state.year = action.payload
        }
    }
})

export const {
    showModalOrder,
    closeModal,
    showModalEdit,
    closeModalEdit,
    showModalCar,
    closeModalCar,
    IIN,
    FullName,
    PhoneNumber,
    setBrand,
    setModel,
    setYear } = modalSlice.actions