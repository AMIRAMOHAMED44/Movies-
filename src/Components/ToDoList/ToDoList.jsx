import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import "./ToDoList.css"

function TodoApp() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, { text: task, completed: false }]);
        setTask("");
    };

    const handleCompleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <Container className="mt-5 ptn">
        <h2 className="text-center mb-4">To-Do App!</h2>
        
        <Form className="d-flex">
            <Form.Control
            type="text"
            placeholder="Enter new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <Button variant="danger" onClick={handleAddTask} className="ms-2">
            Add
            </Button>
        </Form>

        <ListGroup className="mt-4">
            {tasks.map((task, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
                </span>
                <div>
                <Button variant="success" size="sm" onClick={() => handleCompleteTask(index)}>
                    Complete
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDeleteTask(index)} className="ms-2">
                    Delete
                </Button>
                </div>
            </ListGroup.Item>
            ))}
        </ListGroup>
        </Container>
    );
}

export default TodoApp;
