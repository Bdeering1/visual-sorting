import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
import { setColors, thunkActions } from './actions';
import Interface from '../Components/Interface';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
    return {
        colors: state.interface.colors,
        selected: state.interface.selected,
        transition: state.interface.transition,
        array: state.sorting.array,
        arraySize: state.sorting.arraySize,
        minSize: state.sorting.minSize,
        maxSize: state.sorting.maxSize
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setColors: (colorObject) => { dispatch(setColors(colorObject)) },
        actions: bindActionCreators(thunkActions, dispatch)
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