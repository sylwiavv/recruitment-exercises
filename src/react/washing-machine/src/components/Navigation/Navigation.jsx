import React from "react";
import {Navbar, StyledLink} from "./Navigation.styles";

const navigation = [
    {
        name: 'Reservations',
        href: '/',
    },
    {
        name: 'Users',
        href: '/users',
    },
];

export const Navigation = () => {
    return (
        <Navbar>
            {navigation
                .map(({name, href, icon}) => (<StyledLink key={name} to={href}>{name}</StyledLink>))
            }
        </Navbar>
    )
}