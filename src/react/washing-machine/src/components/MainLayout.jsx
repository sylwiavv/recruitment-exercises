import React from "react";
import {Navigation} from "./Navigation"
import {Container} from "./Main.styles";

export const MainLayout = ({ children }) => (
    <Container>
        <Navigation />
        <div>{children}</div>
    </Container>
)