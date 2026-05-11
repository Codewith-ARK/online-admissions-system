import { Institute } from '@/types/institute.types';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'


const InstituteCard = ({
    id,
    title,
    type,
    address,
    desc
}: Institute) => {
    return (
        <div className='card card-border border border-neutral-200 shadow-lg bg-base-200'>
            <header className='h-45 overflow-clip rounded-t-lg'>
                <img src="https://picsum.photos/180/180" className='object-cover w-full h-full' />
            </header>
            <main className='card-body'>
                <p className='flex gap-1 px-2 py-1 bg-base-300 w-fit rounded-full'>
                    <span className='text-base-content text-xs'>{address}</span>
                </p>
                <h2 className='text-base font-semibold'>{title}</h2>
                <p className='text-base-content'>{desc}</p>
                <div className="card-actions justify-end">
                    <Link href={`/institute/${id}`} className='btn'>
                        View Profile
                    </Link>
                    <Link href={`/institute/${id}/apply`} className='btn btn-primary'>
                        Apply Now
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default InstituteCard
