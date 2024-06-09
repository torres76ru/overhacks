import { useEffect, useState } from 'react';
import css from './TasksPage.module.scss';

import { API_URL } from '../../App';
import axios from 'axios';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + '/tasks');
        setTasks(response.data.data);
      } catch (error) {
        console.error('Error fetching tasks data:', error);
      }
    };

    fetchData();
  }, []);

  return <div className={`${css.wrapper}`}></div>;
};

export default TasksPage;
