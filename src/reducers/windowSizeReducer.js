export const windowSizeReducer = (state = {
    windowHeight: 0,
    windowWidth: 0,
    resizeClass: 'normal'
}, action) => {
    switch (action.type) {
        case 'RESIZE':
            return {
                ...state,
                windowWidth: action.payload[0],
                windowHeight: action.payload[1],
            }
        default:
            return state;
    }
}