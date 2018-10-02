import React from 'react';
import Repo from './repo'

const RepoList = (props) => {
    return (
        <ul>
            {
                props.userRepos.map((repo, index) => {
                    return <Repo key={index} data={repo} />
                })
            }
        </ul>
    )
}

export default RepoList


