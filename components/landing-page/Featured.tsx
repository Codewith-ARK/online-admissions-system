import React from 'react'
import FeaturedCard from './featured-card'
import { CheckCircle, Users, Zap } from 'lucide-react'

const featuresData = [
    {
        title: "Easy Application Process",
        description: "Streamlined online admissions with step-by-step guidance.",
        icon: <CheckCircle size={18} />,
        href: "/apply"
    },
    {
        title: "Expert Support Team",
        description: "Get help from our dedicated admissions experts anytime.",
        icon: <Users size={18} />,
        href: "/support"
    },
    {
        title: "Fast Processing",
        description: "Quick turnaround times for all your admission needs.",
        icon: <Zap size={18} />,
        href: "/process"
    }
]

function Featured() {
    return (
        <div className="bg-base-200">
            <div className="flex justify-center text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">Why Choose Admission Pro?</h1>
                    <p className="py-6 text-base-content">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pb-8">
                {featuresData.map((feature, index) => (
                    <FeaturedCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        href={feature.href}
                    />
                ))}
            </div>
        </div>
    )
}

export default Featured

