import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemToList } from '../actions';
import * as Api from '../services/Api';

const Form = ({ addItem }) => {
    const inicitalInput = {
        id: 0,
        item: '',
        update: false,
    }
    const [item, setItem] = useState(inicitalInput)

    const handleChange = ({target: {value, id}}) => {
        console.log(item);
        setItem({
            [id]: value,
        });
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setItem((prev) => ({ id: prev.id + 1 }));
        addItem(item);
        setItem(inicitalInput);
        await Api.createItem(item);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' id='item' value={item.item} onChange={handleChange}/>
            <button
                type='submit'
                disabled={item.item.length <= 0}
            >
                Adcionar Item
            </button>
        </form>
    )
}

// class Form extends Component {

//     constructor(props) {
//         super(props);
        
//         this.state = {
//             id: 0,
//             item: '',
//             update: false
//         };
//     }

//     render() {
        
//         const { addItem } = this.props;
//         const { item } = this.state;

//         const handleChange = ({target: {value, id}}) => {
//             this.setState({
//                 [id]: value,
//             });
//         };
        
//         const handleSubmit = async (event) => {
//             event.preventDefault();

//             this.setState((prev) => ({
//                 id: prev.id + 1,
                
//             }));

//             addItem(this.state);
//             await Api.createItem(this.state);
//         }

//         return (
//             <form onSubmit={handleSubmit}>
//                 <input type='text' id='item' onChange={handleChange}/>
//                 <button type='submit' disabled={item.length <= 0}>Adcionar Item</button>
//             </form>
//         )
//     }
// }

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItemToList(item)),
});

export default connect(null, mapDispatchToProps)(Form);
