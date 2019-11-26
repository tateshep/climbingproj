import React, { Component } from 'react';
import axios from '../../axios-quotes';
import Spinner from '../../components/UI/Spinner/Spinner';

class Modivation extends Component {
    
    state = {
        fetchedQuote: undefined,
        fetchedAuthor: undefined,
        loading: true,
    }

    componentDidMount() {
        axios.get('/qod.json?category=inspire')
            .then(res=> {
                console.log(res.data.contents.quotes[0]);
                this.setState({fetchedQuote: res.data.contents.quotes[0].quote, fetchedAuthor:res.data.contents.quotes[0].author, loading: false})
            })
    }
    
    render() {

        return (
            <div>
                <h2>Modivational Quote of the Day</h2>
                    
                <p>{ this.state.fetchedQuote ? this.state.fetchedQuote : null }</p>
                <p>{ this.state.fetchedAuthor ? this.state.fetchedAuthor : null }</p>
                
                { this.state.loading ? <Spinner /> : null }
     
            </div>
        )
    }
}

export default Modivation;