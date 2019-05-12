import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class appBar extends Component{
    render(){
        return (
            <div>
                <AppBar position="static" color="default">
                    <ToolBar>
                        <Typography variant="h6" color="inherit">
                            Notes
                        </Typography>
                    </ToolBar>
                </AppBar>
            </div>
        )
    };
}


  
export default appBar;