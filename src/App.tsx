import React from 'react';
import { Button } from 'antd';
import { CalculatorOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  return <>
    <div className="content">
      <div className='content-app'>
        <h1>Заявления</h1>
        <Button icon={<CalculatorOutlined />}>Калькулятор</Button>
      </div>
    </div>
  </>
}

export default App;
