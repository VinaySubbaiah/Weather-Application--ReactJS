import React from 'react';
class Form extends React.Component {
    render() {
        return (
            <div className="container">
                <center>
                <form onSubmit={this.props.getWeather}>
                        <input type="text" name="city" placeholder="Enter city..."/> &nbsp;&nbsp;
                        <input type="text" name="country" placeholder="Enter country..."/>&nbsp;&nbsp;
                        <button className="btn btn-danger">Find Weather  </button>
                </form>
                </center>
            </div>
        );
    }
}
export default Form;