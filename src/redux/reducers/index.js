import {combineReducers} from 'redux';

import UsersReducer from './users';
import DeckOptions from './create-deck/deck-options';
import DeckCreation from './create-deck/create-deck';
import DeckCreationFilters from './create-deck/filters';

const rootReducer = combineReducers({
  users: UsersReducer,
  deckOptions: DeckOptions,
  deckCreation: DeckCreation,
  deckCreationFilters: DeckCreationFilters
});

export default rootReducer;