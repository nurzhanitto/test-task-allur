import React from 'react';
import { Button } from 'antd';
import { CalculatorOutlined } from '@ant-design/icons';
import { dispatch } from './store';
import { showModalOrder } from './store/modal.slice';
import { ModalFormHolder } from './Components/ModalFormHolder';
import './App.css';

function App() {
  // const { showModal } = useSelector((state: TState) => state.modal);
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
    </div>
    <ModalFormHolder />
  </>
}

export default App;
