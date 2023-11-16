import { useSelector } from "react-redux";
import { Button, Card, Col, Row } from 'antd';
import { EditOutlined, PhoneOutlined } from '@ant-design/icons';
import { TState, dispatch } from "../../store";
import { showModalEdit } from "../../store/modal.slice";
import "./AutoCredit.css";

export const AutoCredit = () => {
    const { iin, fullName, phoneNumber } = useSelector((state: TState) => state.modal);

    return <>
        <div className="card-container">
            <div className="card long-card">
                <div className="card-header">
                    <h4>{fullName}</h4>
                    <Button className="edit-button" onClick={() => dispatch(showModalEdit())} type="text">
                        <EditOutlined />
                    </Button>
                </div>
                <p>ИИН: {iin}</p>
            </div>
            <div className="card short-card">
                <div className="card-header">
                    <h4>{phoneNumber}</h4>
                    <Button className="phone-button" type="text">
                        <PhoneOutlined />
                    </Button>
                </div>
                <p>Номер телефона</p>
            </div>
        </div>
    </>
}