import initialState from './initialState';

export const git = (state = initialState.git, action) => {
    switch (action.type) {
        case 'DATALOADED':
            return { ...state, dataLoaded: action.value };
        case 'UPDATETERM':
            return { ...state, term: action.value };
        case 'UPDATEPROFILEDATA':
            return { ...state, userData: action.value };
        case 'UPDATEREPODATA':
            return { ...state, repos: action.value };
        default:
            return state
    }
}


