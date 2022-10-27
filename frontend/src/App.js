import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex">
                <Paper elevation={3} className="container">
                    <div className="heading">Mes Tâches</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >



                    <div class="input-group mb-3">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Ajouter une tache" 
                        aria-label="Ajouter une tache" 
                        aria-describedby="button-addon2"
                        style={{ width: "60%" }}
                        value={this.state.currentTask}
                        required={true}
                        onChange={this.handleChange}
                    />
                    <button 
                        class="btn btn-primary" 
                        type="submit" 
                        id="button-addon2">Ajouter une Tâche</button>
                    </div>




                        
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                </div>
                                <Button
                                    onClick={() => this.handleDelete(task._id)}
                                    color="secondary"
                                >
                                    <DeleteIcon />
                                    delete
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;
