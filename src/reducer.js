const initialState = 0;
export const reducer = (state = initialState, {type, payload}) => {

    switch(type){
        case 'RND':
            return state + payload;
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;

        default:
            return state;
    }
}
