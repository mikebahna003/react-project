import React , {Component} from 'react';
import {connect} from 'react-redux';

class EditComment extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const newname = this.getName.value;
        const newmessage = this.getMessage.value;
        const data = {
            newname,
            newmessage
           
        }
        this.props.dispatch({
            type:'UPDATE',
            id:this.props.comment.id,
            data:data
        });

        this.getName.value="";
        this.getMessage.value="";
        //console.log(data);

    }

    render(){
        return(
            <div>
              
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=>this.getName = input} defaultValue={this.props.comment.name}/><br/><br/>
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMessage = input} defaultValue={this.props.comment.message}/><br/><br/>
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComment);