const initialState = {
    isShowMask: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_IS_SHOW_MASK':
            return {
                ...state,
                isShowMask: action.isShowMask,
            }
        default:
            return state;
    }
}