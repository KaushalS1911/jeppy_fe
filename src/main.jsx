import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import theme from "./components/global/them/them.js";
import {AuthProvider} from "./context/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </ThemeProvider>
    </BrowserRouter>,
)
