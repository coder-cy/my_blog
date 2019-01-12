export const setIsShowMask = val => {
    return (dispatch,getState) => {
        dispatch({
            type: 'SET_IS_SHOW_MASK',
            isShowMask: val
        });
    }
}

