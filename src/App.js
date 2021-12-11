import React, { useEffect, useState } from 'react'
import useHttp from './hooks/use-https'
import Tasks from './components/Tasks/Tasks'
import NewTask from './components/NewTask/NewTask'

function App() {
	const [tasks, setTasks] = useState([])

  const transformTasks = taskObj =>{
    const loadedTasks = []

    for(const taksKey in taskObj) {
      loadedTasks.push({id: taksKey, text: taskObj[taksKey].text})
    }
    setTasks(loadedTasks)
  }  

  const { error , isLoading , sendRequest : fetchTasks} = useHttp({
    url: 'https://react-http-test-a5917-default-rtdb.firebaseio.com/tasks.json'
  },transformTasks);
 

	useEffect(() => {
		fetchTasks();
	}, [])

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task))
	}

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks}
			/>
		</React.Fragment>
	)
}

export default App
