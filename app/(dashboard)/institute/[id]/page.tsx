import InstituteDetailsPage from '@/components/pages/institute-details-page'
import axiosClient from '@/lib/api-client'
import { InstituteDetails } from '@/types/institute.types'
import React from 'react'

const Page = async ({
  params
}: {
  params: Promise<{ id: string; }>
}) => {

  const { id } = await params;
  const { data } = await axiosClient.get<InstituteDetails>(`/api/institute/${id}`);
  return <InstituteDetailsPage {...data} />
}

export default Page
