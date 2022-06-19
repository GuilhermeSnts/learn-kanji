import { FunctionComponent, ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Level } from "./pages/Level";

export const Router: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/level/:id" element={<Level />} />
            </Routes>
        </BrowserRouter>
    )
}