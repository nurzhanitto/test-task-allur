import { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Button, Modal, Input, Row, Col } from "antd";
import { TState, dispatch } from "../../store";
import { closeModal, FullName, IIN, PhoneNumber } from "../../store/modal.slice";
import "./Modal.css";

const ModalWindow = () => {
    let navigate = useNavigate();
    const { showModal } = useSelector((state: TState) => state.modal);
    const [iin, setIIN] = useState<string>('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleOk = () => {
        dispatch(IIN(iin))
        dispatch(FullName(fullName))
        dispatch(PhoneNumber(phoneNumber))
        dispatch(closeModal())
        navigate("/auto-credit")
    }
    const handleCancel = () => {
        dispatch(closeModal())
    }

    const handleIINChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.slice(0, 12);
        const sanitizedValue = value.replace(/\D/g, '');
        setIIN(sanitizedValue);
    };

    const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFullName(value);
    };

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        let formattedPhoneNumber = '';

        if (numericValue.length > 1) {
            formattedPhoneNumber = `+7 (${numericValue.slice(1, 4)}) ${numericValue.slice(4, 7)}-${numericValue.slice(7, 9)}-${numericValue.slice(9, 11)}`;
        } else if (numericValue.length === 1) {
            formattedPhoneNumber = `+7 (${numericValue}`;
        }
        setPhoneNumber(formattedPhoneNumber);
    }

    const isButtonDisabled = iin.length !== 12 || !fullName || phoneNumber.length !== 18;

    return <>
        <Modal
            open={showModal}
            onCancel={handleCancel}
            width={400}
            footer={null}>
            <div className="modal">
                <div className="modal-text">
                    <h1>Предварительный расчет</h1>
                    <p>Заполните данные о клиенте</p>
                </div>

                <div className="modal-inputs">
                    <Input
                        placeholder="ИИН клиента"
                        maxLength={12}
                        value={iin}
                        onChange={handleIINChange}
                    />

                    <Input
                        placeholder="ФИО клиента"
                        value={fullName}
                        onChange={handleFullNameChange}
                    />

                    <Input
                        placeholder="Номер телефона"
                        maxLength={18}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>

                <div className="modal-buttons">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Button block onClick={handleCancel}>
                                Отмена
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button block onClick={handleOk} disabled={isButtonDisabled}>
                                Далее
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </Modal>
    </>
}

export default ModalWindow