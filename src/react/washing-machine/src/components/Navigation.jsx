import React from "react";
import { NavLink } from 'react-router-dom'
import {Navbar} from "./Navigation.styles";
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
            <div>
                {navigation
                    .map(({ name, href, icon }) => (
                    <NavLink key={name} to={href}>{name}</NavLink>
                    ))}
            </div>
        </Navbar>
    )
}