import InstituteListPage from '@/components/pages/institute-list-page';
import apiClient from '@/lib/api-client';
import axios from 'axios'
import React from 'react'

const Page = async () => {
    const res = await apiClient.get('/api/institute');

    return <InstituteListPage institutes={res.data} />
}

export default Page
