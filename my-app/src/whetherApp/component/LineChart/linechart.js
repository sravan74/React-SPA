import React from 'react';
import { LineChart, CartesianGrid, XAxis, Tooltip, Line, } from 'recharts';




const Chart = (props) => {
    return (
        <LineChart
            width={600}
            height={200}
            data={props.data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
            <XAxis dataKey="date" />
            <Tooltip />
            {/* <YAxis/> */}
            <CartesianGrid stroke="#000000" />
            <Line type="monotone" dataKey="temp" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="temp_min" stroke="#ff0000" yAxisId={1} />
            <Line type="monotone" dataKey="temp_max" stroke="#00ff00" yAxisId={2} />
        </LineChart>
    )
}

export default Chart;