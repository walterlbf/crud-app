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

        const { item } = this.state;
        const handleChange = ({target: {value, id}}) => {
            this.setState({
                [id]: value,
            });
        };

        const handleSubmit = (event) => {
            const { saveEdit } = this.props;
            event.preventDefault();

            saveEdit(this.state);
        }

        return (
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    id='item'
                    value={item}
                    // placeholder={item.length <= 0 ? 'digite algo para adcionar na lista' : ' '}
                    onChange={handleChange}
                />

                <button
                    type='submit'
                    disabled={item.length <= 0}
                >
                    Save
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    saveEdit: (item) => dispatch(saveEdit(item)),
});

export default connect(null, mapDispatchToProps)(Edit);
