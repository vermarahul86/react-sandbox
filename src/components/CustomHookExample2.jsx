import useLocalStorage from "../hooks/useLocalStorage"

function CustomHookExample2() {

 const[task, setTask] = useLocalStorage('task', '')
 const[tasks, setTasks] = useLocalStorage('tasks', [])

const onSubmit = (e) => {
    e.preventDefault()

    const taskObj = {
        task,
        completed : false,
        date : new Date().toLocaleDateString()
    }

    setTasks([...tasks, taskObj])
}

  return (
    <form className="w-50" onSubmit={onSubmit}>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Task</label>
            <br></br>
            <input className="form-control" type="text" value={task} onChange={(e) =>
                setTask(e.target.value)}></input>
                
        </div>
        <button type="submit" className='btn btn-primary'>Submit it</button>
    </form>
  )
}

export default CustomHookExample2
