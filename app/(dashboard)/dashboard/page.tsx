'use client';
import { useAuth } from '@/components/auth/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) { router.push('/login'); return; }
        if (user.role === 'APPLICANT') router.push('/dashboard/applicant');
        else if (user.role === 'INSTITUTE_MANAGEMENT') router.push('/dashboard/institute');
        else if (user.role === 'SUPER_ADMIN') router.push('/dashboard/admin');
    }, [user, router]);

    return null;
}

export default Page;