import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Sidebar = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-10">
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side border-r border-base-300 shadow-sm">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <SidebarLink href='/dashboard' label='Dashboard' icon={<Home size={18} />} />
                    <SidebarLink href='/my-application' label='My Applications' />
                    <SidebarLink href='/institute' label='Universities' />
                </ul>
            </div>
        </div>
    )
}

const SidebarLink = ({
    href,
    label,
    icon
}: {
    href: string;
    label: string;
    icon?: React.ReactNode;
}) => {
    if (icon) return (
        <li><Link href={href} className='flex gap-1'>
            {icon}{label}
        </Link></li>
    )
    return (
        <li><Link href={href}>
            {label}
        </Link></li>
    )
}

export const SidebarToggle = () => (
    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
        Open drawer
    </label>
)

export default Sidebar
