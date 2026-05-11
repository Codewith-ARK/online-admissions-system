import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    icon?: React.ReactNode;
    description?: string;
    href?: string;
    actionText?: string;
}

const DashboardActionCard = ({
    title,
    description,
    actionText='Click here',
    href = "#",
    icon
}: Props) => {
    return (
        <div className="card card-body card-border gap-6">
            <div className="flex justify-between gap-6">
                <div className="">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-sm text-base-content">{description}</p>
                </div>
                <button className='btn btn-soft btn-primary btn-circle'>{icon}</button>
            </div>
            <div className="card-actions">
                <Link href={href} className="btn btn-primary btn-sm rounded-full">{actionText}<ArrowRight size={16} /></Link>
            </div>
        </div>
    )
}

export default DashboardActionCard
