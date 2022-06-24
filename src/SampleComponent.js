
import React from 'react';


//======== Class way to create Component =====//
// class Hello extends Component {
//     render() {
//         return (
//             <div className="tc">
//                 <h1>First Componet Hello</h1>
//                 <p>Welcome to React</p>
//                 <p>{this.props.greeting}</p>
//             </div>
//         );
//     }
// }

//========Function way to create Component========//
const SampleComponent = (props) => {
    return (
        <div className="tc" >
            <h1>First Componet Hello</h1>
            <p>Welcome to React</p>
            <p> {props.greeting} </p>
        </div >
    )
};

export default SampleComponent;
