import React from 'react';
import { connect } from 'react-redux';

import { fetchOneData } from '../actions';

import '../styles/SearchBar.css';
import trending from '../images/trending.png';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestion: [],
            showSuggestion: true,
            userInput: ''
        };
    }

    onChange = (e) => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
        const filteredSuggestions = suggestions.filter(
            (suggestion) => suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        )

        this.setState({
            activeSuggestion: 0,
            filteredSuggestion: filteredSuggestions,
            //showSuggestion: userInput.length>2?true:false,
            showSuggestion: true,
            userInput: userInput
        });
    }

    onClick = (e) => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestion: [],
            showSuggestion: true,
            userInput: e.currentTarget.innerText
        });
        var text = e.currentTarget.innerText
        this.props.fetchOneData(text, this.props.searchNumber)
    }

    onIconClick = (e) => {
        const suggestionState = this.state.showSuggestion
        this.setState({
            showSuggestion: true
        })
    }

    onKeyDown = (e) => {
        const { activeSuggestion, filteredSuggestion } = this.state;

        if(e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestion: true,
                userInput: filteredSuggestion[activeSuggestion].name,
                filteredSuggestion: []
            });
            var text = filteredSuggestion[activeSuggestion].name
            this.props.fetchOneData(text, this.props.searchNumber)
        }
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0){
                return;
            }
            else{
                this.setState({
                    activeSuggestion: activeSuggestion - 1
                });
            }
        }
        else if (e.keyCode === 40) {
            if (activeSuggestion === filteredSuggestion.length-1) {
                return;
            }
            else {
                this.setState({
                    activeSuggestion: activeSuggestion + 1
                });
            }
        }
    }

    autocompleteSuggestions = () => {
        if(this.state.showSuggestion) {
            if(this.state.filteredSuggestion.length > 0) {
                return (
                    <div className="suggestions-div">
                        <div className="suggestion-heading">
                            <p>Trending</p>
                            <img src={trending} className="trending-icon"/>
                        </div>
                        <ul className="suggestion-container">
                            {this.state.filteredSuggestion.map((suggestion, index) => {
                                return (
                                    <li key={suggestion.id} onClick={this.onClick} className="suggestion-item">
                                        {suggestion.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            }
            else {
                return (
                    <div className="suggestions-div">
                        <div className="suggestion-heading">
                            <p>Trending</p>
                            <img src={trending} className="trending-icon"/>
                        </div>
                        <ul className="suggestion-container">
                            {this.props.suggestions.map((suggestion, index) => {
                                return (
                                    <li key={suggestion.id} onClick={this.onClick} className="suggestion-item">
                                        {suggestion.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            }
            // else {
            //     return (
            //         <div className="no-suggestions">
            //             <em>No Records Found!</em>
            //         </div>
            //     )
            // }
        }
    }

    render () {
        return (
            <React.Fragment>
                <div className="icon-container">
                    <i className="add-icon" onClick={this.onIconClick}></i>
                </div>
                <input 
                    className="searchbar" 
                    placeholder="Search for a particular product"
                    autoComplete="off"
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    value={this.state.userInput}
                />
                {this.autocompleteSuggestions()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
}

export default connect(mapStateToProps, {
    fetchOneData
})(SearchBar);