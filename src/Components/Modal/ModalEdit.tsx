import { useSelector } from "react-redux";
import { TState, dispatch } from "../../store";
import { Button, Input, Modal } from "antd";
import { closeModalEdit } from "../../store/modal.slice";
import "./Modal.css";

const ModalEdit = () => {
    const { showModalEdit, iin, fullName } = useSelector((state: TState) => state.modal);

    const handleCancel = () => {
        dispatch(closeModalEdit())
    }

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
                        maxLength={11}
                        value={iin || ''}
                    // onChange={handleIINChange}
                    />

                    <Input
                        placeholder="ФИО клиента"
                        value={fullName || ''}
                    // onChange={handleFullNameChange}
                    />

                </div>

                <div className="modal-buttons modal-edit-button">
                    <Button block>
                        Сохранить
                    </Button>
                </div>
            </div>
        </Modal>
    </>
}

export default ModalEdit