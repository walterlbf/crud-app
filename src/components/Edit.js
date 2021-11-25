import React, { Component } from 'react'
import { connect } from 'react-redux'

class Edit extends Component {
    
    constructor(props) {
        super(props);
        console.log(this.props);
        const { item } = this.props;
        this.state = {
            id: item.id,
            item: item.item,
            update: item.update
        };
    }

    render() {

        console.log(this.props);
        const handleChange = ({target: {value, id}}) => {
            this.setState({
                [id]: value,
            });
        };
        console.log(this.state);

        const handleSubmit = (event) => {
            event.preventDefault();

            console.log('olá');
        }

        return (
            <form onSubmit={handleSubmit}>
                <input type='text' id='item' onChange={handleChange} />
                <button type='submit'>Save</button>
            </form>
        )
    }
}

export default Edit;
