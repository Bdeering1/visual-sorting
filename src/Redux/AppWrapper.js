import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
import { setColors, updateArray, updateSelected } from './actions';
import Interface from '../Components/Interface';


const mapStateToProps = (state) => {
    return {
        colors: state.interface.colors,
        array: state.sorting.array,
        selected: state.sorting.selected
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setColors: (colorObject) => { dispatch(setColors(colorObject)) }
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