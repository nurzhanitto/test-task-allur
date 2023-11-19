import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Modal, Row, Select } from "antd"
import { TState, dispatch } from "../../store";
import { closeModalCar, setBrand, setModel, setYear } from "../../store/modal.slice";

const ModalCar = () => {
    const { showModalCar, brand, model, year } = useSelector((state: TState) => state.modal);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(brand);
    const [selectedModel, setSelectedModel] = useState<string | null>(model);
    const [selectedYear, setSelectedYear] = useState<string | null>(year);

    const handleCancel = () => {
        dispatch(closeModalCar());
    }

    const handleSave = () => {
        dispatch(setBrand(selectedBrand));
        dispatch(setModel(selectedModel));
        dispatch(setYear(selectedYear));
        dispatch(closeModalCar());
    }

    const handleBrandChange = (value: string | null) => {
        setSelectedBrand(value);
    };

    const handleModelChange = (value: string | null) => {
        setSelectedModel(value);
    };

    const handleYearChange = (value: string | null) => {
        setSelectedYear(value);
    };

    const isButtonDisabled = !selectedBrand || !selectedModel || !selectedYear;


    return <>
        <Modal
            open={showModalCar}
            onCancel={handleCancel}
            width={400}
            footer={null}>
            <div className="modal">
                <div className="modal-text">
                    <h1>Марка, модель и год выпуска</h1>
                </div>
            </div>

            <div className="modal-inputs">
                <Select
                    placeholder="Марка авто"
                    style={{ width: '100%', height: '50px', marginBottom: '15px' }}
                    value={selectedBrand}
                    onChange={handleBrandChange}>
                    <Select.Option value="Kia">Kia</Select.Option>
                </Select>

                <Select
                    placeholder="Модель авто"
                    style={{ width: '100%', height: '50px', marginBottom: '15px' }}
                    value={selectedModel}
                    onChange={handleModelChange}>
                    <Select.Option value="Serato">Serato</Select.Option>
                </Select>

                <Select
                    placeholder="Год выпуска"
                    style={{ width: '100%', height: '50px', }}
                    value={selectedYear}
                    onChange={handleYearChange}>
                    <Select.Option value="2023 г.">2023 г.</Select.Option>
                    <Select.Option value="2022 г.">2022 г.</Select.Option>
                    <Select.Option value="2021 г.">2021 г.</Select.Option>
                    <Select.Option value="2020 г.">2020 г.</Select.Option>
                    <Select.Option value="2019 г.">2019 г.</Select.Option>
                    <Select.Option value="2018 г.">2018 г.</Select.Option>
                    <Select.Option value="2017 г.">2017 г.</Select.Option>
                </Select>
            </div>

            <div className="modal-buttons">
                <Row gutter={16}>
                    <Col span={12}>
                        <Button block onClick={handleCancel}>
                            Отмена
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button block onClick={handleSave} disabled={isButtonDisabled}>
                            Сохранить
                        </Button>
                    </Col>
                </Row>
            </div>
        </Modal>
    </>
}

export default ModalCar