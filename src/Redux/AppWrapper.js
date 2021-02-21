import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../Components/App';


const UPDATE_ARRAY = 'UPDATE_ARRAY';

const updateArray = (newArray) => {
    return {
        type: UPDATE_ARRAY,
        newArray
    }
}

const defaultState = [];

const arrayReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_ARRAY:
            return action.newArray;
        default:
            return state;
    }
}


const store = createStore(arrayReducer);


export default class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}