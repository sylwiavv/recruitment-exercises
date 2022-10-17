import React from "react";
import {Navigation} from "./Navigation/Navigation"
import {Container} from "../assests/styles/layout/layout.styles";

export const MainLayout = ({ children }) => (
    <Container>
        <Navigation />
        {children}
    </Container>
)