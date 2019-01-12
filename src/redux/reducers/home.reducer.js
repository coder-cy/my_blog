const initialState = {
    foo: 0,
    bannerList: [],
    recommendList: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FOO':
            return {
                ...state,
                foo: -10
            };
        case 'FETCH_SLIDER_LIST': 
            return {
                ...state,
                bannerList: action.bannerList
            }
        case 'FETCH_RECOMMEND_LIST':
            return {
                ...state,
                recommendList: action.recommendList
            }
        default:
            return state;
    }
}