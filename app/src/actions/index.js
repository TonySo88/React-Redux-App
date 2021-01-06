import axios from 'axios';

const headers = {
    Accept: "application/json"
}

export const fetchQuote = () => (dispatch) => {
    dispatch ({ type: "FETCHING_QUOTE_START"})

    axios.get("https://api.kanye.rest", {headers: headers})
    .then(response => {
        dispatch({ type: 'FETCHING_QUOTE_SUCCESS', payload: response.data.quote})
        console.log('response object', response)
        })
    .catch(error => {
        dispatch({ type: 'FETCHING_JOKE_ERROR', payload: "test error"})
        console.log('error object', error)
    })
}


// axios.get("https://api.kanye.rest", {headers: headers})
// .then(response => {
//     dispatch({ type: 'FETCHING_QUOTE_SUCCESS', payload: response})
//     console.log('response object', response)
//     })
// .catch(error => {
//     dispatch({ type: 'FETCHING_JOKE_ERROR', payload: error.response})
//     console.log('error object', error)
// })