import React from "react";
import "./App.css";
import {MainLayout, Reservations, SignInForm} from "./components";
import { Provider } from "react-redux";
import createStore from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const { store, persistor } = createStore();

const App = () => (
    <Provider store={store}>
        {console.log(store.getState())}
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Reservations />} />
                        <Route path="users" element={<SignInForm />} />
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </PersistGate>
    </Provider>
)
export default App;