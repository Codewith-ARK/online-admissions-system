'use client';
import { FileText, Home, LogOut, School, UserRound } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useAuth } from '../auth/AuthProvider';

const Sidebar = ({
    children
}: {
    children: React.ReactNode;
}) => {

    const { user } = useAuth();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-10">
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side border-r border-base-300 shadow-sm h-[90dvh]">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4 flex flex-col justify-between">
                    {/* Sidebar content here */}
                    <div className="">
                        <SidebarLink href='/dashboard' label='Dashboard' icon={<Home size={18} />} />
                        <SidebarLink href='/my-application' label='My Applications' icon={<FileText size={18} />} />
                        <SidebarLink href='/institute' label='Universities' icon={<School size={18} />} />
                    </div>
                    <div className="">
                        <li></li>
                        <SidebarLink href='/logout' label='Logout' icon={<LogOut size={18} />} />
                        <SidebarLink href='/profile' label='Profile' icon={<UserRound size={18} />} />
                        <li></li>
                        <div className="flex items-center gap-3">
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-10 rounded-full">
                                    <span className="text-base">D</span>
                                </div>
                            </div>
                            <div className="">
                                <h4 className='text-sm font-medium'>{`${user?.firstName} ${user?.lastName}`}</h4>
                                <p className='text-xs font-semibold text-neutral-600'>{user?.role}</p>
                            </div>
                        </div>
                    </div>
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
        <li><Link href={href} className='flex gap-3'>
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
