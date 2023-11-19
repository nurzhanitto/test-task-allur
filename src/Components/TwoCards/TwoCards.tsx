import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Col, Input, InputNumber, Row, Select, Switch } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { showModalCar } from "../../store/modal.slice";
import { TState, dispatch } from "../../store";
import { countNum, parseNum } from "../services/formatter";
import "./TwoCards.css";
import { TextField } from "@mui/material";

export const TwoCards = () => {
    const { brand, model, year } = useSelector((state: TState) => state.modal);
    const [amount, setAmount] = useState<number>()

    const displayValue = `${brand || ''} ${model ? `${model},` : ''} ${year || ''}`;
    const isPlaceholderVisible = brand === null && model === null && year === null;

    console.log(isPlaceholderVisible);


    const [numericValue, setNumericValue] = useState<number | null>(null);
    // const [formattedValue, setFormattedValue] = useState('');

    // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const inputValue = e.target.value.replace(/\D/g, ''); // Фильтруем все, кроме цифр
    //     const formatted = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // Добавляем пробелы для форматирования
    //     setAmount(`${formatted} ₸`);
    // };

    return <>
        <Card className="your-card" style={{ width: 500, backgroundColor: 'white', marginLeft: '20px' }}>
            <div className="card-header">
                <h4>Рассчитать автокредитование</h4>
            </div>
            <div className="card-content" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "10px" }}>
                <Select placeholder="Торговая точка" style={{ width: '48%', height: '40px', }}>
                    <Select.Option value="option1">Doscar</Select.Option>
                </Select>
                <Select placeholder="Тип авто" style={{ width: '48%', height: '40px', }}>
                    <Select.Option value="option1">Б/У</Select.Option>
                    <Select.Option value="option2">Новое</Select.Option>
                </Select>
            </div>
            <Input.Group compact>
                <Input
                    style={{
                        width: '90%', height: '40px',
                        borderTop: '1px solid #d9d9d9',
                        borderLeft: '1px solid #d9d9d9',
                        borderBottom: '1px solid #d9d9d9',
                        borderRight: 'none',
                    }}
                    value={displayValue}
                    placeholder={isPlaceholderVisible ? "Марка, модель и год выпуска" : ""} />
                <Button onClick={() => dispatch(showModalCar())}
                    style={{
                        width: '10%', height: '40px',
                        borderTop: '1px solid #d9d9d9',
                        borderLeft: 'none',
                        borderBottom: '1px solid #d9d9d9',
                        borderRight: '1px solid #d9d9d9',
                    }}>
                    <EditOutlined />
                </Button>
            </Input.Group>

            <div className="card-content" style={{ display: 'flex', justifyContent: 'space-between', marginTop: "10px" }}>
                <InputNumber
                    value={amount}
                    style={{ width: '48%', height: '40px', }}
                    placeholder="Стоимость авто"
                    onChange={p => setAmount(p || 0)}
                    size="small" className="of-input repo-amount-open"
                    formatter={v => countNum(v as number)}
                    parser={v => parseNum(v as string, 2)} />

                {/* <Input
                    value={amount}
                    style={{ width: '48%', height: '40px', }}
                    onChange={handleInputChange}
                    placeholder="Стоимость авто"
                /> */}
            </div>

            <div className="card-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "10px" }}>
                <Select placeholder="Срок займа" style={{ width: '48%', height: '40px', }}>
                    <Select.Option value="12">12 месяцев</Select.Option>
                    <Select.Option value="24">24 месяцев</Select.Option>
                    <Select.Option value="36">36 месяцев</Select.Option>
                    <Select.Option value="48">48 месяцев</Select.Option>
                    <Select.Option value="60">60 месяцев</Select.Option>
                    <Select.Option value="72">72 месяцев</Select.Option>
                    <Select.Option value="84">84 месяцев</Select.Option>
                </Select>

                <div>
                    <Switch /> <span>С подтверждением дохода</span>
                </div>
            </div>
        </Card >
    </>
}