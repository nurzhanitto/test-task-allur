import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Input, Row, Col } from "antd";
import { TState, dispatch } from "../../store";
import { closeModal } from "../../store/modal.slice";
import "./Modal.css";

const ModalWindow = () => {
    const { showModal } = useSelector((state: TState) => state.modal);
    const [iin, setIIN] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleOk = () => {
        dispatch(closeModal())
    }
    const handleCancel = () => {
        dispatch(closeModal())
    }

    const handleIINChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.slice(0, 11);
        const sanitizedValue = value.replace(/\D/g, '');
        setIIN(sanitizedValue);
    };

    // const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {

    //     setPhoneNumber(formattedValue);
    // };


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
                        maxLength={11}
                        value={iin}
                        onChange={handleIINChange}
                    />
                    <Input placeholder="ФИО клиента" />
                    <Input
                        placeholder="Номер телефона"
                        maxLength={18}
                        value={phoneNumber}
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
                            <Button block>
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