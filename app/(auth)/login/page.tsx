"use client";
import { LoginProps } from '@/types/auth.types';
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';

const page = () => {
    const methods = useForm<LoginProps & { showPassword?: boolean }>();
    const { register, handleSubmit, watch } = methods;
    const { setUser, user } = useAuth();
    const router = useRouter();
    const showPass = watch('showPassword');

    const onSubmitHandler = async (data: LoginProps) => {
        try {
            const res = await axios.post('/api/auth/login', data);
            if (res.data?.ok || res.data?.message === 'OK') {
                console.log(res.data.user);
                setUser(res.data.user);
                console.log("['AUTH']:", user);
                const role = res.data.user.role;
                switch (role) {
                    case 'APPLICANT':
                        router.push('/dashboard/applicant');
                        break;
                    case 'INSTITUTE_MANAGEMENT':
                        router.push('/dashboard/institute');
                        break;
                    case 'SUPER_ADMIN':
                        router.push('/dashboard/admin');
                        break;
                    default:
                        router.push('/');
                }
            }
        } catch (e) {
            const error = e as { response?: { data?: { error?: string } } };
            toast.error('Error', { description: error.response?.data?.error || 'Login failed' });
            console.error('[AUTH]:', e);
        }
    }
    return (
        <section className='flex justify-between items-center h-[85vh] gap-6 px-40 py-10'>
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
            <form className='card card-body max-w-md' onSubmit={handleSubmit(onSubmitHandler)}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input {...register('email')} type="email" className="input w-full" placeholder="john.doe@example.com" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input {...register('password')} type={showPass ? 'text' : 'password'} className="input w-full" placeholder="password" />
                </fieldset>
                <label className="label">
                    <input type="checkbox" className="checkbox" {...register('showPassword')} />
                    Show Password
                </label>
                <div className="flex justify-end">
                    <button className='btn btn-link'>Forgot Password?</button>
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
                <button type='button' onClick={() => router.push('/signup')} className='btn'>Signup</button>
            </form>
        </section>
    )
}

export default page
