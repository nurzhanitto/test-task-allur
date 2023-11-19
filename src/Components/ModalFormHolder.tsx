import { useSelector } from "react-redux";
import { TState } from "../store";
import { default as ModalWindow } from "./Modal/Modal";
import { default as ModalEdit } from "./Modal/ModalEdit";
import { default as ModalCar } from "./Modal/ModalCar";

export const ModalFormHolder = () => {
    const { showModal, showModalEdit, showModalCar } = useSelector((state: TState) => state.modal);
    return <>
        {showModal ? <ModalWindow /> : ""}
        {showModalEdit ? <ModalEdit /> : ""}
        {showModalCar ? <ModalCar /> : ""}
    </>
}