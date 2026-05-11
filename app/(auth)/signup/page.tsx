'use client';

import { useAuth } from '@/components/auth/AuthProvider';
import InputField from '@/components/form/form-input';
import SelectInput from '@/components/form/form-select-input';
import { UserRoles } from '@/constants/user-role';
import axiosClient from '@/lib/api-client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Page = () => {
    const methods = useForm();
    const { register, handleSubmit, watch } = methods;
    const { setUser } = useAuth();
    const router = useRouter();
    const showPass = watch('showPassword');

    const formFields = [
        { type: 'text', name: 'firstName', label: 'First Name', placeholder: 'John' },
        { type: 'text', name: 'lastName', label: 'Last Name', placeholder: 'Doe' },
        { type: 'email', name: 'email', label: 'Email', placeholder: 'john.doe@example.com' },
        { type: 'password', name: 'password', label: 'Password', placeholder: 'Password' },
    ];

    const userRoles: { value: UserRoles, label: string }[] = [
        { value: 'APPLICANT', label: 'Applicant' },
        { value: 'INSTITUTE_MANAGEMENT', label: 'Institute Management' },
        { value: 'SUPER_ADMIN', label: 'Super Admin' }
    ];

    const onSubmit = async (data: any) => {
        try {
            const res = await axiosClient.post('/api/auth/register', data);
            methods.reset();
            if (res.status === 200) router.push('/login');
        } catch (e) {
            toast.error('Error', { description: e.response.data.error });
        }
    }

    return (
        <FormProvider {...methods}>
            <section className='flex justify-between items-center h-full gap-6 px-40 py-10'>
                <div className="h-full flex justify-evenly flex-col border border-base-300 px-4 py-6 rounded-xl">
                    <div className=" h-full space-y-3">
                        <h2 className='text-xl font-semibold'>AdmissionPro</h2>
                        <h1 className='text-2xl font-semibold'>Your future starts here.</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nam.</p>
                    </div>
                    <div className="card card-border card-body">
                        hello!
                    </div>
                </div>

                <form className='card card-body max-w-md' onSubmit={handleSubmit(onSubmit)}>
                    {
                        formFields.map((item) => {
                            if (item.type == 'password') return (
                                <InputField
                                    key={item.name}
                                    label={item.label}
                                    name={item.name}
                                    type={showPass ? 'text' : 'password'}
                                    placeholder={item.placeholder}
                                    required
                                />
                            );
                            return <InputField
                                key={item.name}
                                label={item.label}
                                name={item.name}
                                type={item.type}
                                placeholder={item.placeholder}
                                required
                            />
                        }
                        )
                    }
                    <SelectInput
                        className='w-full'
                        options={userRoles}
                        name='role'
                        label='User Role'
                        required
                    />
                    <label className="label">
                        <input type="checkbox" className="checkbox" {...register('showPassword')} />
                        Remember me
                    </label>
                    <div className="flex justify-end">
                        <button className='btn btn-link'>Forgot Password?</button>
                    </div>
                    <button type='submit' className='btn btn-primary'>Signup</button>
                    <button type='button' onClick={() => router.push('/login')} className='btn'>Login</button>
                </form>
            </section>
        </FormProvider>
    )
}

export default Page
