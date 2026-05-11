import { Program } from '@/types/institute.types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const InstituteProgramCard = ({
    id,
    title,
    description,
    durationInMonths,
    feeInPKR
}: Program) => {
    return (
        <div className='card card-body border border-base-300 shadow-sm space-y-4'>
            <div className="flex justify-between gap-3">
                <h4 className='text-base font-semibold line-clamp-1'>{title}</h4>
                <span className='badge badge-soft badge-sm'>{(durationInMonths / 12).toLocaleString()} Years</span>
            </div>
            <p className='text-base-content'>{description}</p>
            <div className="flex justify-between items-center">
                <p className='font-semibold'>Rs. {feeInPKR.toLocaleString()}/year</p>
                <Link href={''} className='link link-hover link-primary flex items-center gap-1'>Apply Now <ArrowRight size={14} /></Link>
            </div>
        </div>
    )
}

export default InstituteProgramCard
