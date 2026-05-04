import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type props = {
    title: string;
    icon?: any;
    description?: string;
    href: string;
}

function FeaturedCard({
    href = '#',
    title,
    description,
    icon
}: props) {
    return (
        <div className="card card-border bg-base-100 w-96">
            <div className="card-body gap-6">
                <div className="p-3 bg-primary/30 w-fit rounded-xl">{icon}</div>
                <div className="space-y-1">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="card-actions justify-start">
                    <Link href={href} className="link link-hover link-primary font-medium flex gap-2 items-center">Buy Now <ArrowRight size={16} /></Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard
