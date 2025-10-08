import React from 'react';
import {  Bar, BarChart, XAxis, YAxis } from 'recharts';

const Rating = ({appDetail}) => {
    const data = appDetail.ratings
    return (
        <div>
            <h1 className='text-2xl text-[#001931] font-semibold border-t-1 border-[#00193120] mt-10 pt-10'>Rating</h1>

            <BarChart width={800} height={500} data={data} layout="vertical">
                <XAxis dataKey="count" type="number" axisLine={false} tickLine={false} ></XAxis>
                <YAxis dataKey="name" type="category" reversed={true} axisLine={false} tickLine={false} tickMargin={16}></YAxis>
                <Bar dataKey={'count'} barSize={32} fill='#FF8811' ></Bar>

            </BarChart>
        </div>
    );
};

export default Rating;