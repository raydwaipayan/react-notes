import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

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
            <Card>
                <CardContent>
                    <form noValidate autoComplete="off">
                    <TextField
                        id="new-note"
                        label="Note"
                        value={this.state.text}
                        onChange={this.handleChange('text')}
                        margin="normal"
                        variant="filled"
                    />
                </form>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>this.props.onClick({text: this.state.text})}>Add</Button>
                    <Button size="small" onClick={this.props.onDelete}>Delete All</Button>
                </CardActions>
        </Card>
        )
    }
}
export default NoteField;