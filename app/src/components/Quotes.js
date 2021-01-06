import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuote } from '../actions'

const Quotes = ({ title, quote, isFetching, error, fetchQuote }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>Kanye says: {quote}</h2>
            <button onClick={fetchQuote}>Say what, Kanye?</button>
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        quote: state.quote,
        title: state.title,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = { fetchQuote };

export default connect(MapStateToProps, mapDispatchToProps)(Quotes);