import ProgramListPage from '@/components/pages/program-list-page';
import axiosClient from '@/lib/api-client';
import { Program } from '@/types/institute.types';
import React from 'react'

const Page = async () => {
    const { data } = await axiosClient.get<Program[]>('/api/programs/');
    return <ProgramListPage programs={data} />
}

export default Page;
