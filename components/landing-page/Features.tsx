import React from 'react'
import FeaturesCard from './features-card'

function Features() {
    return (
        <section className='grid grid-cols-3 max-w-4xl gap-6 p-6'>
            <div className="col-span-2 card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* <FeaturesCard />
            <FeaturesCard /> */}
        </section>
    )
}

export default Features
