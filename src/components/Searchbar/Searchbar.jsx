import { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchBar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
    static propTypes = {
        onSubmitForApp: PropTypes.func.isRequired,
    }
    
    state = {
        searchQuery: '',
    }

    handleNameChange = event => {
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            toast.warn("Searchign form is empty! Please input some text.");
            return;
        }

        this.props.onSubmitForApp(this.state.searchQuery);
        this.reset();
    }

    reset = () => {
        this.setState({
            searchQuery: '',
        })
    }

    render() {
        const { searchQuery } = this.state;

        return (
            <SearchBar>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormButton type="submit">
                        <FaSearch size={32}/>
                        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                    </SearchFormButton>

                    <SearchFormInput
                        type="text"
                        name="searchQuery"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchQuery}
                        onChange={this.handleNameChange}
                    />
                </SearchForm>
            </SearchBar>
        )
    }
}