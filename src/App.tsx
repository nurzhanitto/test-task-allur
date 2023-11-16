import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { WorkSpace } from './Components/WorkSpace';
import './App.css';

function App() {
  return <>
    <BrowserRouter>
      <WorkSpace />
    </BrowserRouter>
  </>
}

export default App;


{/* <div className="content">
      <div className='content-app'>
        <h1>Заявления</h1>
        <Button
          icon={<CalculatorOutlined />}
          onClick={() => dispatch(showModalOrder())}>
          Калькулятор
        </Button>
      </div>
    </div>
    <ModalFormHolder /> */}