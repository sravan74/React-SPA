import React from 'react';

const Repo = ({data}) => {
    return (
        <li><a href={data.html_url}>{data.name}</a></li>
    )
}

export default Repo;