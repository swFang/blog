import jsonPlaceholder from '../apis/jsonPlaceholder.js';
import reduxThunk from 'redux-thunk';

export const fetchPosts =  () => {
    const promise =  jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POST',
        payload : promise
    };
};