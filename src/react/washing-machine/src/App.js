import React from "react";
import "./App.scss";
import {MainLayout, Reservations} from "./components";
import {Provider} from "react-redux";
import createStore from "./store";
import {PersistGate} from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GlobalStyle} from "./assests/styles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import {theme} from "./assests/styles/theme";
import AddUserForm from "./pages/Users/AddUserForm";

const {store, persistor} = createStore();

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<Reservations/>}/>
                            <Route path="users" element={<AddUserForm/>}/>
                        </Routes>
                    </MainLayout>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </ThemeProvider>
)
export default App;