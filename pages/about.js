import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Timetable from '../components/Timetable';

function about() {
    return (
        <Layout>
            <h1>เกี่ยวกับเรา</h1>
            <Timetable />
            
        </Layout>
    )
}

export default about;
