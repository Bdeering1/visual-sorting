import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
import { updateArray } from './reducer';
import Interface from '../Components/Interface';


const mapStateToProps = (state) => {
    return { array: state.array }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateArray: (newArray) => { dispatch(updateArray(newArray)) }
    }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Interface);


export default class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}