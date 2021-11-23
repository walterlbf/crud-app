import React, { Component } from 'react';
import { connect } from 'react-redux';
import addItemToList from '../actions';
import * as Api from '../services/Api';



class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            item: '',
        };
    }

    render() {
        
        const { addItem } = this.props;

        const handleChange = ({target: {value, id}}) => {
            this.setState({
                [id]: value,
            });
        };
        console.log(this.state.item);
        
        const handleSubmit = async (event) => {
            event.preventDefault();
            addItem(this.state);
            await Api.createItem(this.state);
            console.log('submit');
            console.log(this.state);
        }

        return (
            <form onSubmit={handleSubmit}>
                <input type='text' id='item' onChange={handleChange}/>
                <button type='submit'>Adcionar Item</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItemToList(item)),
});

export default connect(null, mapDispatchToProps)(Form);
