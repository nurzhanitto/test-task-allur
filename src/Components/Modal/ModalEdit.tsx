import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { TState, dispatch } from "../../store";
import { Button, Input, Modal } from "antd";
import { FullName, IIN, closeModalEdit } from "../../store/modal.slice";
import "./Modal.css";

const ModalEdit = () => {
    const { showModalEdit, iin, fullName } = useSelector((state: TState) => state.modal);
    const [editIIN, setEditIIN] = useState(iin);
    const [editFullName, setEditFullName] = useState(fullName);
    const handleCancel = () => {
        dispatch(closeModalEdit())
    }

    const handleSave = () => {
        dispatch(IIN(editIIN));
        dispatch(FullName(editFullName));
        dispatch(closeModalEdit())
    }

    const handleIINChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.slice(0, 12);
        const sanitizedValue = value.replace(/\D/g, '');
        setEditIIN(sanitizedValue);
    };

    const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEditFullName(value);
    };

    const isButtonDisabled = editIIN?.length !== 12 || !editFullName;

    return <>
        <Modal
            open={showModalEdit}
            onCancel={handleCancel}
            width={400}
            footer={null}>
            <div className="modal">
                <div className="modal-text">
                    <h1>Редактирование</h1>
                </div>

                <div className="modal-inputs">
                    <Input
                        placeholder="ИИН клиента"
                        maxLength={12}
                        value={editIIN || ''}
                        onChange={handleIINChange}
                    />

                    <Input
                        placeholder="ФИО клиента"
                        value={editFullName || ''}
                        onChange={handleFullNameChange}
                    />

                </div>

                <div className="modal-buttons modal-edit-button">
                    <Button block onClick={handleSave} disabled={isButtonDisabled}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </Modal>
    </>
}

export default ModalEdit