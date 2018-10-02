import React from 'react';

const Repos = ({repo})=>{
    return(
        <li className="list-group-item">
            <a target="_blank" href={repo.html_url}>{repo.name}: {repo.description}</a>
        </li>
    )
}

export default Repos;