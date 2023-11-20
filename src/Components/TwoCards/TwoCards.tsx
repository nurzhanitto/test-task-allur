import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Collapse, Image, Input, InputNumber, Radio, Select, Switch } from "antd";
import { EditOutlined, PlusOutlined, MinusOutlined, PrinterOutlined } from '@ant-design/icons';
import { showModalCar } from "../../store/modal.slice";
import { TState, dispatch } from "../../store";
import { countNum } from "../services/formatter";
import icon from "../../media/free-icon-website-2522369.png";
import freedom from "../../media/freedom-finance.jpeg";
import kmf from "../../media/kmf.png";
import halyk from "../../media/halyk-bank.jpg";
import "./TwoCards.css";

const { Panel } = Collapse;
const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
];

export const TwoCards = () => {
    let navigate = useNavigate();
    const { brand, model, year } = useSelector((state: TState) => state.modal);
    const [loading, setLoading] = useState<boolean>(false);
    const [tradingPoint, setTradingPoint] = useState<string | undefined>("");
    const [carType, setCarType] = useState<string | undefined>("");
    const [amount, setAmount] = useState<number>()
    const [firstPayment, setFirstPayment] = useState<number>()
    const [selectedTimeMoney, setSelectedTimeMoney] = useState<number>()

    const [activePanel, setActivePanel] = useState<string | string[]>(['1'])

    const displayValue = () => {
        if (brand && year && model) {
            return `${brand} ${model}, ${year}`
        }
        else {
            return ""
        }
    };
    // `${brand || ''} ${model ? `${model},` : ''} ${year || ''}`
    // const isPlaceholderVisible = (brand === null && model === null && year === null);

    const handleTradingPointChange = (value: string) => {
        setTradingPoint(value);
    };

    const handleCarTypeChange = (value: string) => {
        setCarType(value);
    };

    const handleSelectChange = (value: string) => {
        setSelectedTimeMoney(Number(value));
    };


    const handlePanelChange = (keys: string | string[]) => {
        setActivePanel(keys);
    };

    const [loanWithoutInsurance, setLoanWithoutInsurance] = useState<number>(0);
    const [insuranceCost, setInsuranceCost] = useState<number>(0);
    const [totalLoan, setTotalLoan] = useState<number>(0);
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
    const [lastPaymentDate, setLastPaymentDate] = useState<string>('');

    useEffect(() => {
        if (brand && model && year && tradingPoint && carType && amount !== undefined && firstPayment !== undefined && selectedTimeMoney !== undefined) {
            setLoading(true);
            const loanWithoutInsurance = amount - firstPayment;
            const insuranceCost = amount * 0.0170004 * (selectedTimeMoney / 12);
            const totalLoan = loanWithoutInsurance + insuranceCost;

            // Предположим, что процентная ставка равна 23%
            const annualInterestRate = 0.23;
            const monthlyInterestRate = annualInterestRate / 12;
            const monthlyPayment =
                (monthlyInterestRate * totalLoan) /
                (1 - Math.pow(1 + monthlyInterestRate, -selectedTimeMoney));

            setLoanWithoutInsurance(loanWithoutInsurance);
            setInsuranceCost(insuranceCost);
            setTotalLoan(totalLoan);
            setMonthlyPayment(monthlyPayment);

            const monthsToAdd = selectedTimeMoney;
            const currentDate = new Date();
            currentDate.setMonth(currentDate.getMonth() + monthsToAdd);
            const formattedDate = new Intl.DateTimeFormat('ru-RU').format(currentDate);

            const parts = formattedDate.split('.');
            const day = parts[0];
            const month = parts[1];
            const year = parts[2];
            const monthName = months[parseInt(month, 10) - 1];
            const resultDate = `${day} ${monthName} ${year} г.`;
            setLastPaymentDate(resultDate);
            setLoading(false);

        } else {
            console.log('Не все данные доступны для расчета');
        }
    }, [brand, model, year, tradingPoint, carType, amount, firstPayment, selectedTimeMoney]);

    interface ItemType {
        key: string;
        label: string;
        children: JSX.Element;
        icon: string;
    }

    const items: ItemType[] = [
        {
            key: '1',
            label: 'Freedom Finance',
            children: <div>
                <div className="bank-content">
                    <span>Ежемесячный платеж</span>
                    <span>Ставка</span>
                </div>

                <div className="bank-content bank-content-border">
                    <h3>{countNum(monthlyPayment)}</h3>
                    <h3 className="bank-percent">23,0 %</h3>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Стоимость КАСКО/год</span>
                    <span className="bank-content-font-weight">{countNum(insuranceCost)}</span>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Сумма займа</span>
                    <span className="bank-content-font-weight">{countNum(loanWithoutInsurance)}</span>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Сумма переплаты с учетом КАСКО</span>
                    <span className="bank-content-font-weight">{countNum(totalLoan)}</span>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Дата последнего платежа</span>
                    <span className="bank-content-font-weight">{lastPaymentDate}</span>
                </div>

                <div className="printer-button">
                    <Button icon={<PrinterOutlined />} block>
                        Распечатать
                    </Button>
                </div>

            </div>,
            icon: freedom,
        },
        {
            key: '2',
            label: 'KMF',
            children: <div>
                <div className="bank-content">
                    <span>Ежемесячный платеж</span>
                    <span>Ставка</span>
                </div>

                <div className="bank-content bank-content-border">
                    <h3>{countNum(monthlyPayment)}</h3>
                    <h3 className="bank-percent">23,0 %</h3>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Стоимость КАСКО/год</span>
                    <span className="bank-content-font-weight">{countNum(insuranceCost)}</span>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Сумма займа</span>
                    <span className="bank-content-font-weight">{countNum(loanWithoutInsurance)}</span>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Сумма переплаты с учетом КАСКО</span>
                    <span className="bank-content-font-weight">{countNum(totalLoan)}</span>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Дата последнего платежа</span>
                    <span className="bank-content-font-weight">{lastPaymentDate}</span>
                </div>

                <div className="printer-button">
                    <Button icon={<PrinterOutlined />} block>
                        Распечатать
                    </Button>
                </div>

            </div>,
            icon: kmf,
        },
        {
            key: '3',
            label: 'Halyk Bank',
            children: <div>
                <div className="bank-content">
                    <span>Ежемесячный платеж</span>
                    <span>Ставка</span>
                </div>

                <div className="bank-content bank-content-border">
                    <h3>{countNum(monthlyPayment)}</h3>
                    <h3 className="bank-percent">23,0 %</h3>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Стоимость КАСКО/год</span>
                    <span className="bank-content-font-weight">{countNum(insuranceCost)}</span>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Сумма займа</span>
                    <span className="bank-content-font-weight">{countNum(loanWithoutInsurance)}</span>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Сумма переплаты с учетом КАСКО</span>
                    <span className="bank-content-font-weight">{countNum(totalLoan)}</span>
                </div>

                <div className="bank-content bank-content-margin-top">
                    <span className="bank-content-color">Дата последнего платежа</span>
                    <span className="bank-content-font-weight">{lastPaymentDate}</span>
                </div>

                <div className="printer-button">
                    <Button icon={<PrinterOutlined />} block>
                        Распечатать
                    </Button>
                </div>

            </div>,
            icon: halyk,
        },
    ];


    return <>
        <div style={{ width: '1000px', display: 'flex', marginLeft: '20px' }}>
            <Card className="your-card" style={{ flex: 1, backgroundColor: 'white', alignSelf: 'flex-start' }}>
                <div className="card-header">
                    <h4>Рассчитать автокредитование</h4>
                </div>
                <div className="card-content" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "10px" }}>
                    <Select
                        placeholder="Торговая точка"
                        style={{ width: '48%', height: '40px', }}
                        value={tradingPoint || undefined}
                        onChange={handleTradingPointChange}>
                        <Select.Option value="option1">Doscar</Select.Option>
                    </Select>
                    <Select
                        placeholder="Тип авто"
                        style={{ width: '48%', height: '40px', }}
                        value={carType || undefined}
                        onChange={handleCarTypeChange}>
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
                        value={displayValue()}
                        placeholder="Марка, модель и год выпуска" />
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
                        style={{ width: '48%', height: '40px', paddingTop: '6px' }}
                        placeholder="Стоимость авто"
                        onChange={p => setAmount(p || 0)}
                        size="small" className="of-input repo-amount-open"
                        formatter={v => countNum(v as number)}
                        controls={false} />

                    <InputNumber
                        value={firstPayment}
                        style={{ width: '48%', height: '40px', paddingTop: '6px' }}
                        placeholder="Первоначальный взнос"
                        onChange={p => setFirstPayment(p || 0)}
                        size="small" className="of-input repo-amount-open"
                        formatter={v => countNum(v as number)}
                        controls={false} />
                </div>

                <div className="card-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "10px" }}>
                    <Select
                        placeholder="Срок займа"
                        style={{ width: '48%', height: '40px', }}
                        value={selectedTimeMoney ? selectedTimeMoney.toString() : undefined}
                        onChange={handleSelectChange}>
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

            <Card loading={loading} className="your-card" style={{ flex: 1, backgroundColor: 'white', marginLeft: '20px' }}>
                <div className="card-header">
                    <h4>Калькулятор</h4>
                </div>

                {
                    (brand && model && year && tradingPoint && carType && amount !== undefined && firstPayment !== undefined && selectedTimeMoney !== undefined) ?
                        <>
                            <div className="card-content">
                                <Radio.Group style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                    <Radio.Button
                                        style={{ flex: 1, textAlign: 'center' }}
                                        value="standard">Стандарт
                                    </Radio.Button>
                                    <Radio.Button style={{ flex: 1, textAlign: 'center' }} value="subsidy">Субсидия</Radio.Button>
                                </Radio.Group>
                            </div>
                            <div className="card-content" style={{ marginTop: '20px' }}>
                                <Collapse
                                    style={{ border: 'none' }}
                                    activeKey={activePanel}
                                    onChange={handlePanelChange}
                                    items={items}
                                    defaultActiveKey={['1']}
                                    expandIcon={({ isActive }) => isActive ? <MinusOutlined /> : <PlusOutlined />}
                                    expandIconPosition="end" >
                                    {items.map(item => (
                                        <Panel
                                            key={item.key as string}
                                            className="bank-panel"
                                            style={{
                                                marginBottom: '20px',
                                                backgroundColor: activePanel.includes(item.key) ? '#f5f9ff' : '',
                                            }}
                                            header={
                                                <div>
                                                    <Image src={item.icon} preview={false} style={{ marginRight: '8px', height: '20px' }} /> {item.label}
                                                </div>}>
                                            {item.children}
                                        </Panel>
                                    ))}
                                </Collapse>
                            </div>

                            <div className="printer-button" style={{ marginTop: '20px' }}>
                                <Button onClick={() => navigate("/")} block>Создать заявку</Button>
                            </div>
                        </>
                        :
                        <div>
                            <span>Заполните все параметры, чтобы получить предварительные решения от банков</span>
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <Image src={icon} style={{ width: '100px', height: '100px' }} />
                            </div>
                        </div>
                }
            </Card>
        </div>

    </>
}