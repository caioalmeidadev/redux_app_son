export const clickReducer = (state = {msg: ''},action) => {
    switch(action.type){
        case 'CLICK_HELLO':
            return {...state, msg: action.msg}
        break;

        default :
            return state;
    }
}