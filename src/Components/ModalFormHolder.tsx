import { useSelector } from "react-redux";
import { default as ModalWindow } from "./Modal/Modal";
import { TState } from "../store";

export const ModalFormHolder = () => {
    const { showModal } = useSelector((state: TState) => state.modal);
    return <>
        {showModal ? <ModalWindow /> : ""}
    </>
}