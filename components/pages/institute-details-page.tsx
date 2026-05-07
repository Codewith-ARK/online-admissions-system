import { InstituteDetails } from '@/types/institute.types'
import React from 'react'

const InstituteDetailsPage = ({
    id,
    programs,
    title,
    type,
    address,
    desc
}: InstituteDetails) => {
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Foreground Content */}
                    <div className="relative z-10 w-full p-6 flex items-end justify-between">

                        {/* Left Side */}
                        <div className="flex items-center gap-4 text-white">

                            <div className="bg-white p-2 rounded-lg">
                                <img src="https://placehold.co/60" className="w-12 h-12" />
                            </div>

                            <div>
                                <p className="text-xs opacity-80">Stanford, California, USA</p>
                                <h1 className="text-2xl font-semibold">Stanford University</h1>
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
                            <h2 className='text-lg font-semibold'>Lorem, ipsum dolor.</h2>
                            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugit quaerat veniam, ea velit quia illum ullam corporis itaque iusto eligendi? Dolor eligendi, libero nulla nihil sapiente accusantium deleniti enim harum vel ducimus eum cupiditate placeat voluptates facere ea aliquam nisi iste quo id labore! Sapiente optio mollitia dolorum in.</p>
                        </div>
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
