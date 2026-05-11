import { InstituteDetails } from '@/types/institute.types'
import React from 'react'
import SectionSubheading from '../ui/typography/section-sub-heading'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import InstituteProgramCard from '../ui/cards/institute-program-card'

const InstituteDetailsPage = ({
    id,
    programs,
    title,
    type,
    address,
    desc
}: InstituteDetails) => {
    console.log(title, address)
    return (
        <section className='px-10 py-10 space-y-6 max-w-6xl mx-auto'>
            <header>
                <div className="relative flex items-end h-112.5 rounded-xl overflow-hidden">

                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="https://picsum.photos/1200/800"
                            alt="cover image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Foreground Content */}
                    <div className="relative z-10 w-full p-6 flex items-end justify-between">

                        {/* Left Side */}
                        <div className="flex items-center gap-4 text-white">

                            <div className="bg-white p-2 rounded-lg">
                                <img src="https://placehold.co/60" className="w-12 h-12" />
                            </div>

                            <div>
                                <p className="text-xs opacity-80">{address ?? '-'}</p>
                                <h1 className="text-2xl font-semibold">{title ?? '-'}</h1>
                            </div>
                        </div>

                        {/* Right Side Buttons */}
                        <div className="flex gap-3">
                            <button className="btn btn-outline text-white border-white">
                                Save
                            </button>
                            <button className="btn btn-primary">
                                Apply Now
                            </button>
                        </div>

                    </div>
                </div>

            </header>

            <main>
                <div className="flex gap-6">
                    <div id="col-left" className="space-y-6 flex-2">
                        <div className="space-y-1 bg-base-300 rounded-2xl p-6">
                            <SectionHeading text='About the Institution' />
                            <p className='text-sm'>{desc}</p>
                        </div>
                        <section className='space-y-6'>
                            <div className="flex justify-between items-center">
                                <SectionHeading text='Programs' />
                                <Link href={'#'} className='link link-hover link-primary text-xs flex items-center gap-1'>All Programs <ArrowRight size={14} /></Link>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {
                                    programs?.map((p, idx) => <InstituteProgramCard key={idx} {...p} />)
                                }
                            </div>
                        </section>
                    </div>

                    <div id="col-right" className="space-y-6 flex-1">
                        <div className="space-y-1 bg-base-300 rounded-2xl p-6">
                        </div>
                    </div>
                </div>
            </main>
        </section>

    )
}

export default InstituteDetailsPage
