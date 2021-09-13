import React from 'react';
import data from '../data';

function Timetable() {
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>รหัสวิชา</th>
                        <th>ชื่อวิชา</th>
                        <th>หน่วยกิต</th>
                        <th>อ.ผู้สอน</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.timetables.map((item, index) =>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unit}</td>
                            <td>{item.teacher}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Timetable;

