import { GraduationCap } from 'lucide-react'
import React from 'react'

function Hero() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='max-w-xl flex flex-col gap-6'>
                    <div className="badge badge-soft badge-primary"><GraduationCap size={16} /> Empowering Future Leaders</div>
                    <h1 className="text-5xl font-bold">Simplifying Your Journey to Success</h1>
                    <p>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className="flex gap-4">
                        <button className='btn btn-primary'>Get Started</button>
                        <button className='btn btn-soft'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
