import React from 'react';

// another version of creating a component
const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="City"/>
        <button>Get weather</button>
    </form>
)
/*class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="City"/>
                <button>Get weather</button>
            </form>
        );
    }
}*/

export default Form;
