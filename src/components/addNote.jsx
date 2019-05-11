import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class NoteField extends Component{
    state={
        text:"",
        title:""
    }
    handleChange = text => event => {
        this.setState({
          [text]: event.target.value,
        });
      };
    render()
    {
        return (
            <form noValidate autoComplete="off">
            <TextField
                id="new-note"
                label="Note"
                value={this.state.text}
                onChange={this.handleChange('text')}
                margin="normal"
                variant="filled"
            />
            <Button size="small" onClick={()=>this.props.onClick({text: this.state.text})}>Add</Button>
        </form>
        )
    }
}
export default NoteField;