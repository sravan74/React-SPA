import axios from 'axios';

export const updateLoadingStatus = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'DATALOADED',
            value: status
        })
    }
}

export const updateSearchterm = (term) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATETERM',
            value: term
        })
    }
}

export const getProfileData = (term) => {
    return (dispatch) => {
        const url = `https://api.github.com/users/${term}?client_id=a53caa444374908dad87&client_secret=ba93ad8671b0d881b47d5e5f797947d343adabef`;
        return new Promise((resolve, reject) => {
            axios.get(url).then(({ data }) => {
                dispatch({
                    type: 'UPDATEPROFILEDATA',
                    value: data
                })
                resolve()
            }).catch((err)=>{
                reject()
            })
        })
    }
}

export const getrepoData = () => {
    return (dispatch, getState) => {
        const repoUrl = getState().git.userData.repos_url;
        return new Promise((resolve, reject) => {
            axios.get(repoUrl).then(({ data }) => {
                dispatch({
                    type: 'UPDATEREPODATA',
                    value: data
                })
                resolve();
            })
        })
    }
}