'use client';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import InputField from '../form/form-input';
import SelectInput from '../form/form-select-input';
import { ArrowRight } from 'lucide-react';

const  InstituteApplyPage = () => {
    const methods = useForm();
    return (
        <section className='max-w-3xl mx-auto p-10'>
            <FormProvider {...methods}>
                <form action="" className='space-y-6'>
                    {/* PERSONAL INFO */}
                    <section className='card card-body bg-base-300'>
                        <div className="space-y-1">
                            <h2 className='text-lg font-semibold'>Personal Information</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, doloribus.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <InputField
                                name='firstName'
                                label='First Name'
                            />
                            <InputField
                                name='lastName'
                                label='Last Name'
                            />
                            <InputField
                                name='email'
                                label='Email'
                                type='email'
                            />
                            <InputField
                                name='contact'
                                label='Contact'
                            />
                            <InputField
                                name='city'
                                label='City'
                            />
                            <InputField
                                name='country'
                                label='Country'
                            />
                            <InputField
                                name='address'
                                label='Address'
                                className='md:col-span-2'
                            />
                        </div>
                    </section>

                    {/* ACADEMICS */}
                    <section className='card card-body bg-base-300'>
                        <div className='sapce-y-1'>
                            <h2 className='text-lg font-semibold'>Academic History</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, doloribus.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <InputField
                                name='name'
                                label='Institute Name'
                                className='md:col-span-2'
                            />
                            <SelectInput
                                options={[
                                    { label: 'Matriculation', value: 'matric', disabled: false },
                                    { label: 'Intermediate', value: 'intermediate', disabled: false },
                                    { label: 'Bachelors (4 Years)', value: 'bachelors', disabled: false },
                                    { label: 'Bachelors (2 Years)', value: 'associate', disabled: false },
                                ]}
                                label='Degree Obtained'
                                name='degree'
                            />
                            <InputField
                                name='year'
                                label='Graduation Year'
                                type='date'
                            />
                            <InputField
                                name='marks.total'
                                label='Marks (Total)'
                            />
                            <InputField
                                name='marks.obtained'
                                label='Marks (Obtained)'
                            />
                        </div>
                    </section>

                    <div className="flex justify-end">
                        <button
                            className='btn btn-primary'
                            type='submit'
                        >
                            Next
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </form>
            </FormProvider>
        </section>
    )
}

export default InstituteApplyPage;