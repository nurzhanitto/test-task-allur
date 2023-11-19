import { Route, Routes } from "react-router-dom"
import { ModalFormHolder } from "./ModalFormHolder"
import { AutoCredit, MainPage } from "./AutoCredit/AutoCredit";

export const WorkSpace = () => {
    return <>
        <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path="/auto-credit" element={<AutoCredit />} />
        </Routes>
        <ModalFormHolder />
    </>
}