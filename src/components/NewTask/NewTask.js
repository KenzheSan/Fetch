import React from 'react';
import useHttp from '../../hooks/use-https';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {isLoading,error ,sendRequest: sednTaskRequest} = useHttp()

  const createdTask = (taskText,taskData) =>{
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sednTaskRequest({
      url:'https://react-http-test-a5917-default-rtdb.firebaseio.com/tasks.json',
      method: "POST",
      body: {text:taskText},
      headers: {
        'content-type' : 'application/json',
      }
    },createdTask.bind(null,taskText))
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
