'use client';
import { Program } from '@/types/institute.types';
import { filterData } from '@/utils/filter-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

type FilterProps = {
    type: string;
    query: string;
}

const ProgramListPage = ({
    programs
}: {
    programs: Program[]
}) => {
    const [filter, setFilter] = useState<FilterProps>({type: '', query: ''});
    const filtered = filterData(programs, {});

    return (
        <section className='space-y-6'>
            <div className="space-y-1">
                <h1 className='text-2xl font-semibold'>All Programs</h1>
                <p className='text-base-content text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, totam.</p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {programs.map((item, idx) => <ProgramCard key={idx} {...item} />)}
            </div>
        </section>
    )
};

const ProgramCard = ({
    id,
    title,
    description,
    durationInMonths,
    feeInPKR
}: Program) => {
    return (
        <main className='card card-body border border-neutral-200 space-y-6'>
            <div className="space-y-1">
                <div className="flex justify-between gap-3">
                    <h2 className='text-base font-semibold line-clamp-1'>{title}</h2>
                    <span className="badge badge-soft badge-sm w-fit">{(durationInMonths / 12).toLocaleString()} Years</span>
                </div>
                <p className='text-base-content'>{description}</p>
            </div>
            <div className="card-actions justify-between">
                <div className="text-sm font-semibold">Rs. {feeInPKR.toLocaleString()}</div>
                <Link href={"#"} className='link link-hover link-primary flex items-center gap-1'>View details <ArrowRight size={14} /></Link>
                {/* <Link href={`/institute/${id}`} className='btn'>
                    View Profile
                </Link>
                <Link href={`/institute/${id}/apply`} className='btn btn-primary'>
                    Apply Now
                    <ArrowRight size={16} />
                </Link> */}
            </div>
        </main>
    )
};

export default ProgramListPage;