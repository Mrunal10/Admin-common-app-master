import authHeader from '../services/auth-header'

export const ADD_BOOK = "ADD_BOOK"
export const ERROR_BOOK = "ERROR_BOOK"
const saveBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export const addbook = (book) => {
    //add your code

    return dispatch => {
        fetch('http://localhost:8080/api/v1/book/', {
            method: 'POST',
            headers: authHeader(),
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(book => {
                console.log(book)
                if(book.success)
                {
                    // dispatch(fetchusers(""));
                    dispatch(saveBook(book));
                }
                else
                {
                    dispatch({
                        type: ERROR_BOOK,
                        payload: book
                    });
                }
                
            })
    }
}
