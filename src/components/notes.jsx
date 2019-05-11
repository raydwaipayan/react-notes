import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Note extends Component{
    state={
        title: this.props.title,
        text: this.props.text,
        id: this.props.id
    }

    render(){
        return(
          <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {this.state.title}
                </Typography>
                <Typography color="textSecondary" variant="h5">
                    {this.state.text}    
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>this.props.onDelete(this.state.id)}>Delete</Button>
            </CardActions>
          </Card>  
        )
    }
}

export default Note;