import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Note from './components/notes';
import NoteField from './components/addNote';
import AppBar from './components/appBar';

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            notes:[]
        };
    }
    handleDelete= id=>
    {
        this.setState({notes: this.state.notes.filter(note=> note.id!==id)});
    }
    handleDeleteAll=()=>{
        this.setState({notes:[]});
    }
    handleAdd= note=>   
    {
        let index=0;
        if(this.state.notes.length!==0)
            index=this.state.notes[this.state.notes.length-1].id;
        index++;
        let newNote={
            id: index,
            text: note.text,
            title: `Note ${index}`,
        }
        var notes=this.state.notes;
        notes.push(newNote);
        this.setState({notes: notes});
        console.log(this.state);
    }

    render(){
        return (
            <Paper>
            <div>
                <AppBar/>
                <NoteField onClick={this.handleAdd} onDelete={this.handleDeleteAll} />
            </div>
            <div>
                {this.state.notes.map(note=>
                    {
                        console.log(this.state);
                        return(
                            <Note
                                id={note.id}
                                key={note.id}
                                text={note.text}
                                title={note.title}
                                onDelete={this.handleDelete}
                            />
                        )
                    })}
            </div>
            </Paper>
        );
    }
}
export default App;