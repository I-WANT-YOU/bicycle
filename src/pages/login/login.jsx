import React from 'react';
import {connect} from 'react-redux';

class Login extends React.Component {
    onClick(name){
          this.props.setName(name);
    }
    onHandle=(name)=>{
        console.log(name);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                Login<br/>
                <span onClick={()=>{this.onClick('lihui')}}>{this.props.state.name}</span>
                <button onClick={()=>{this.onHandle('tianmeng')}}>点击</button>
            </div>
        );
    }
}

export default connect((state, props) => {
    const login = {state, props}
    return {
        state
    }
}, {
    setName(name){
        console.log(name)
        return{
            type:'set_name',
            name,
        }


    },
})(Login)
