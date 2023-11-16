import { useSelector } from "react-redux";
import { TState } from "../store";
import { default as ModalWindow } from "./Modal/Modal";
import { default as ModalEdit } from "./Modal/ModalEdit";

export const ModalFormHolder = () => {
    const { showModal, showModalEdit } = useSelector((state: TState) => state.modal);
    return <>
        {showModal ? <ModalWindow /> : ""}
        {showModalEdit ? <ModalEdit /> : ""}
    </>
}