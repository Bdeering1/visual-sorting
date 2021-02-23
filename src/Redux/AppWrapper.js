import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
import { updateArray, setColors } from './reducer';
import Interface from '../Components/Interface';


const mapStateToProps = (state) => {
    return {
        array: state.interface.array,
        colors: state.interface.colors
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateArray: (newArray) => { dispatch(updateArray(newArray)) },
        setColors: (colorArray) => { dispatch(setColors(colorArray)) }
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