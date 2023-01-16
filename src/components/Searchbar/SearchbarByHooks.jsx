import { useState } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SearchBar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";
import { FaSearch } from 'react-icons/fa';

export const SearchbarByHooks = ({ onSubmitForApp }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleNameChange = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            toast.warn("Searchign form is empty! Please input some text.");
            return;
        }

        onSubmitForApp(searchQuery);
        reset();
    }

    const reset = () => {
        setSearchQuery('')
    }

    return (
        <SearchBar>
            <SearchForm onSubmit={handleSubmit}>
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
                    onChange={handleNameChange}
                />
            </SearchForm>
        </SearchBar>
    )
}

SearchbarByHooks.propTypes = {
    onSubmitForApp: PropTypes.func.isRequired,
}
