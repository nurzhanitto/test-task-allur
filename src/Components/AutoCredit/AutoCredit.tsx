import { useSelector } from "react-redux";
import { Button } from 'antd';
import { EditOutlined, PhoneOutlined, CalculatorOutlined } from '@ant-design/icons';
import { TState, dispatch } from "../../store";
import { showModalEdit, showModalOrder } from "../../store/modal.slice";
import { TwoCards } from "../TwoCards/TwoCards";
import "./AutoCredit.css";

export const MainPage = () => {
    return <>
        <div className="content">
            <div className='content-app'>
                <h1>Заявления</h1>
                <Button
                    icon={<CalculatorOutlined />}
                    onClick={() => dispatch(showModalOrder())}>
                    Калькулятор
                </Button>
            </div>

            <div className="huge-text">
                <h1>Тут таблица</h1>
            </div>
        </div>
    </>
}

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

        <TwoCards />
    </>
}