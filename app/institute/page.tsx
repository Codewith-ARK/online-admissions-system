import axios from 'axios'
import React from 'react'

const Page = async () => {

    const res = await axios.get('/api/institute');

    return (
        <div>

        </div>
    )
}

export default Page
