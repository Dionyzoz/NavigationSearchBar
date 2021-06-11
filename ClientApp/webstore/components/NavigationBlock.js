import React, { useEffect, useState, useCallback } from 'react'
import styles from './NavigationSearchBar.module.scss';
import Autosuggest from 'react-autosuggest';
import { searchNavigation } from 'behavior/actions'
import { connect } from 'react-redux';
import Fuse from 'fuse.js'
import { navigateTo } from 'sana/events'


const renderSuggestion = suggestion => (
  <div>
    {suggestion.item.title}
  </div>
)



const NavigationBlock = ({items, searchNavigation, navigateTo, model}) => {
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const onChange = (event, {newValue, method}) => {
    setValue(newValue)
  }

  console.log(suggestions)
  const fetchSuggestions = useCallback(({value, reason}) => {
    items instanceof Fuse && setSuggestions([...items.search(value)])
  }, [items])

  const getSuggestionValue = (suggestion) => {
    return suggestion.item.title
  }

  const onSelect = (event, { suggestion }) => {
    console.log(suggestion)
    navigateTo(null, suggestion.item.link.url)
  }

  useEffect(() => {
    searchNavigation(2, "MAIN")
  }, [])
  return (
    items && (
      <Autosuggest
        onSuggestionsClearRequested={()=>{setSuggestions([])}}
        theme={styles}
        renderSuggestion={renderSuggestion}
        inputProps={{value, onChange, placeholder: "Search in navigation.."}}
        id="navigation"
        getSuggestionValue={getSuggestionValue}
        onSuggestionsFetchRequested={fetchSuggestions}
        suggestions={suggestions}
        onSuggestionSelected={onSelect}
      />
    )
  )
}


export default connect((state) => {return { items: state.searchItems }}, {searchNavigation, navigateTo})(NavigationBlock)