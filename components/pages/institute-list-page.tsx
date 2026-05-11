import React from 'react'
import InstituteCard from '../institute/institute-card';
import { Institute } from '@/types/institute.types';
import SectionHeading from '../ui/typography/section-heading';

type Props = {
    institutes: Institute[];
}

const InstituteListPage = ({
    institutes
}: Props) => {
    return (
        <section className='space-y-6'>
            <div className='space-y-1'>
                <SectionHeading text='Discover Universities' />
                {/* <h1 className='text-base-content text-2xl font-medium'>Discover Universities</h1> */}
                <p className='text-base-content text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dignissimos?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {institutes.map((item => (
                    <InstituteCard
                        key={item.id}
                        {...item}
                    />
                )))}
            </div>
        </section>
    )
}

export default InstituteListPage
