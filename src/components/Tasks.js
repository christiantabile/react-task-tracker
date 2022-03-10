import Task from './Task'

// State is immutable, one way data. Make a copy and pass through
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>

    )
}

export default Tasks