export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = (func) => ({
    type: "RND",
    payload: func,
})
