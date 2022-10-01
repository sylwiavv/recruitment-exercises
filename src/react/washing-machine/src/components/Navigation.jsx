import React from "react";
import { NavLink } from 'react-router-dom'

const navigation = [
    {
        name: 'Users',
        href: '/users',
        // icon: <UserIcon />,
        // roles: [Role.ADMIN, Role.OFFICE_MANAGER],
    },
];

export const Navigation = () => {
    return (
        <nav className="flex h-full min-h-screen flex-col bg-primary-bg">
            <div className="mx-auto flex w-fit flex-col gap-y-10">
                {navigation
                    .map(({ name, href, icon }) => (
                    <NavLink
                    key={name}
                    to={href}>
                {name}
                    </NavLink>
                    ))}
            </div>
        </nav>
    )
}