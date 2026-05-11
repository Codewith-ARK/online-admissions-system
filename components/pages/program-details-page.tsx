import { ProgramDetails } from '@/types/institute.types'
import React from 'react'

// const ProgramDetailsPage = ({
//     id,
//     title,
//     description,
//     durationInMonths,
//     feeInPKR,
//     financing,
//     level
// }: ProgramDetails) => {
//     return (
//         <div>
//             <h1>Lorem, ipsum dolor.</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, in?</p>


//         </div>
//     )
// }

const ProgramDetailsPage = ({ title, degree, field, durationInMonths, feeInPKR, seats, deadline, description, requirements }: ProgramDetails) => {
    return (
        <div className="card card-border overflow-hidden">
            <div className="card-body border-b border-base-300">
                <div className="flex justify-between items-start gap-3">
                    <div>
                        <p className="text-xs text-base-content/60 mb-1">{field}</p>
                        <h2 className="text-lg font-medium mb-1.5">{title}</h2>
                        <span className="badge badge-info badge-soft">{degree}</span>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-medium">Rs. {feeInPKR.toLocaleString()}</p>
                        <p className="text-xs text-base-content/60 mt-1">per year</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-base-300">
                <div className="p-4"><p className="text-xs text-base-content/60 mb-1">Duration</p><p className="font-medium">{durationInMonths / 12} years</p></div>
                <div className="p-4"><p className="text-xs text-base-content/60 mb-1">Seats</p><p className="font-medium">{seats}</p></div>
                <div className="p-4"><p className="text-xs text-base-content/60 mb-1">Deadline</p><p className="font-medium">{deadline}</p></div>
            </div>

            <div className="p-4 border-t border-base-300">
                <p className="text-sm text-base-content/70">{description}</p>
            </div>

            <div className="p-4 border-t border-base-300">
                <p className="text-xs uppercase tracking-wide text-base-content/50 mb-2">Requirements</p>
                <div className="flex flex-wrap gap-1.5">
                    {requirements.map((req, i) => (
                        <span key={i} className="badge badge-ghost badge-sm">{req}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramDetailsPage
