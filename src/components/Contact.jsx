import React from 'react'
import './Contact.css'

class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state={
            online: this.props.online,
        }

    }
    render(){
    return <div className='Contact'> 
        <img className='avatar' src={this.props.img} alt={this.props.name}/>
        <div>
            <h3 className='name'>{this.props.name}</h3>
            <div onClick={()=>{
                this.setState({online: !this.state.online})
                }} className='status'>
                <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                <span className='status-text'>{this.state.online ? 'Online' : 'Offline'}</span>
            </div>
        </div>
    </div>
    }
}


export default Contact ; 