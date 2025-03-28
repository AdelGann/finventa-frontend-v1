import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1 className="text-6xl">Hola</h1>}/>
            </Routes>
        </BrowserRouter>
           
    )
}