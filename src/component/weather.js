import React from 'react';
class Weather extends React.Component {
    render() {
        return (
            <div className="container">

<br/>
               
                    <h3 className ="text-center">
                    {/* <p className="card bg-light text-center"> */}
                        {this.props.city && this.props.country && <p> Location : {this.props.city},{this.props.country} </p>}
                        {this.props.temperature && <p> Temperature :{this.props.temperature}</p>}
                        {this.props.humidity && <p> Humidity : {this.props.humidity}</p>}
                        {this.props.description && <p> Condition: {this.props.description}</p>}
                      
</h3>
                    {/* </p> */}

               
                
                {this.props.error && <p className="alert-danger"> {this.props.error}</p>}
                <br />
                <hr />
                <br />
                {/* {this.props.city && this.props.country && <p> Location : {this.props.city},{this.props.country} </p>}
                {this.props.temperature && <p> Temperature :{this.props.temperature}</p>}
                {this.props.humidity && <p> Humidity : {this.props.humidity}</p>}
                {this.props.description && <p> Condition: {this.props.description}</p>}
                {this.props.error && <p className="alert-danger"> {this.props.error}</p>} */}
            </div>
        );
    }
}
export default Weather;
//state less component Anothor way of defining code (highly ordered functions')
// const Weather = () => {
//     return (
//         <div>
//             {this.props.city && this.props.country && <p> Location : {this.props.city},{this.props.country} </p>}
//             {this.props.temperature && <p> Temperature :{this.props.temperature}</p>}
//             {this.props.humidity && <p> Humidity : {this.props.humidity}</p>}
//             {this.props.description && <p> Condition: {this.props.description}</p>}
//             {this.props.error && <p> {this.props.error}</p>}
//         </div>
//     );
// }
// State less component can be use like this is not accepted any this keyword to access bcz we are not declared any class keyword
// const Weather = props => 
//      (
//         <div>
//             {props.city && props.country && <p> Location : {props.city},{props.country} </p>}
//             {props.temperature && <p> Temperature :{props.temperature}</p>}
//             {props.humidity && <p> Humidity : {props.humidity}</p>}
//             {props.description && <p> Condition: {props.description}</p>}
//             {props.error && <p> {props.error}</p>}
//         </div>
//     );
// 