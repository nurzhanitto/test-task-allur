import { Route, Routes } from "react-router-dom"
import { Button } from "antd"
import { CalculatorOutlined } from '@ant-design/icons';
import { dispatch } from "../store";
import { showModalOrder } from "../store/modal.slice";
import { ModalFormHolder } from "./ModalFormHolder"
import { AutoCredit } from "./AutoCredit/AutoCredit";

export const WorkSpace = () => {
    return <>
        <Routes>
            <Route path={"/"} element={<>
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
            </>} />
            <Route path="/auto-credit" element={<AutoCredit />} />
        </Routes>
        <ModalFormHolder />
    </>
}