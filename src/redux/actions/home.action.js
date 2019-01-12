import axios from 'axios';


export const foo = () => {
    return {
        type: 'FOO'
    }
}

export const asyncFetchSliderImg = () => {
    return (dispatch,getState) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            console.log(res);
            dispatch({
                type: 'FETCH_SLIDER_LIST',
                bannerList: res
            });
        })
    }
}

