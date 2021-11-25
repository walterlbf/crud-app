import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveEdit } from '../actions';

class Edit extends Component {
    
    constructor(props) {
        super(props);
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

        const handleSubmit = (event) => {
            const { saveEdit } = this.props;
            event.preventDefault();

            console.log(this.state);
            saveEdit(this.state)

        }

        return (
            <form onSubmit={handleSubmit}>
                <input type='text' id='item' value={this.state.item} onChange={handleChange} />
                <button type='submit'>Save</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    saveEdit: (item) => dispatch(saveEdit(item)),
});

export default connect(null, mapDispatchToProps)(Edit);
