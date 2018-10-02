import React from 'react';
import Repos from './Repos.jsx';

const RepoList = ({userRepos}) => {
    return (
        <div>
            <ul className="list-group">
                {
                    userRepos.map((r, i) => {
                        return <Repos key={i} repo={r} />
                    })
                }
            </ul>
        </div>
    )
}

export default RepoList;