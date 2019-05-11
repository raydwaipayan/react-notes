import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Note from './components/notes';
import NoteField from './components/addNote';

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            notes:[
                {
                    id: 1,
                    text: "Hello",
                    title: "Note 1",
                },
                {
                    id: 2,
                    text: "Hello",
                    title: "Note 2",
                }
            ]
        };
    }
    handleDelete= id=>
    {
        this.setState({notes: this.state.notes.filter(note=> note.id!==id)});
    }
    handleAdd= note=>   
    {
        let index=this.state.notes[this.state.notes.length-1].id;
        index++;
        let newNote={
            id: index,
            text: "Hello",
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
                <NoteField onClick={this.handleAdd}/>
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