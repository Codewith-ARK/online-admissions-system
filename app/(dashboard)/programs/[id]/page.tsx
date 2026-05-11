import ProgramDetailsPage from '@/components/pages/program-details-page'
import axiosClient from '@/lib/api-client';
import { ProgramDetails } from '@/types/institute.types';
import React from 'react'

const page = async ({
    params
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;
    const { data } = await axiosClient.get<ProgramDetails>(`/api/programs/${id}`);

    return (
    <div>
        <ProgramDetailsPage {...data} />
    </div>
)
}

export default page
