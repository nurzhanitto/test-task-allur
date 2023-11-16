import { useSelector } from "react-redux";
import { TState } from "../store";
import { default as ModalWindow } from "./Modal/Modal";

export const ModalFormHolder = () => {
    const { showModal } = useSelector((state: TState) => state.modal);
    return <>
        {showModal ? <ModalWindow /> : ""}
    </>
}