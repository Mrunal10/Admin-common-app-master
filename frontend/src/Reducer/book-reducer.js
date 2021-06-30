import * as actions from '../Actions/book-action';
let initialState = {
    book: [
        {
            title:'',
            author:'',
            isbn:'',
            price:'',
            discount:'',
            publishDate:'',
            category:'',
            price:'',
            stock:''
        }
    ],
   
    message:''
}

// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) => {
    console.log('Action recieved at reducer***  ', action);
    switch (action.type) {
        
        case actions.ERROR_BOOK:
            return {
               
                ...state,
                message: action.payload.message
            }
        case actions.ADD_BOOK:
            return {
                ...state,
                message: action.payload.message
            }
    
        default: return state
    }

}

export default reducer;