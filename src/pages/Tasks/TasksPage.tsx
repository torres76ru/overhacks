import { useEffect, useState } from 'react';
import css from './TasksPage.module.scss';

import { API_URL } from '../../App';
import axios from 'axios';
import TasksPageLogo from './TasksPageLogo';
import TaskItem from './TaskItem';

type Task = {
  id: string;
  name: string;
  reward: number;
};

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + '/tasks');
        setTasks(response.data.data);
      } catch (error) {
        console.error('Error fetching tasks data:', error);
      }
    };
    tasks;
    fetchData();
  }, []);

  return (
    <div className={`${css.wrapper}`}>
      <div className={css.logoWrapper}>
        <TasksPageLogo />
        <h2 className={css.mainTitle}>Earn OverXP and spend on reward</h2>
      </div>
      <div className={css.balance}>
        My points: <span className={css.balanceScore}>300 overXP coins</span>
      </div>
      <div className={css.container}>
        <h4 className={css.title}>Daily Tasks</h4>
        <TaskItem
          img={
            <svg
              width="40"
              height="18"
              viewBox="0 0 40 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="31" cy="9" r="9" fill="#5F5F5F" />
              <circle cx="9" cy="9" r="9" fill="#5F5F5F" />
              <circle cx="11" cy="9" r="9" fill="white" />
              <circle cx="29" cy="9" r="9" fill="white" />
              <circle
                cx="24.5"
                cy="9.5"
                r="4.35"
                fill="#01FFB4"
                stroke="#5F5F5F"
                stroke-width="0.3"
              />
              <circle
                cx="15.5"
                cy="9.5"
                r="4.35"
                fill="#01FFB4"
                stroke="#5F5F5F"
                stroke-width="0.3"
              />
            </svg>
          }
          title="Match 10 times with people"
          reward={100}
        />
        <TaskItem
          img={
            <svg
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5001"
                cy="13.9998"
                r="9.18333"
                fill="#D9D9D9"
                stroke="black"
                stroke-width="0.3"
              />
              <path
                d="M10.5 7C14.366 7 17.5 3.86599 17.5 0L3.5 0C3.5 3.86599 6.63401 7 10.5 7Z"
                fill="#5F5F5F"
              />
              <circle
                cx="10.5"
                cy="14"
                r="10.5"
                transform="rotate(180 10.5 14)"
                fill="#00FFB4"
              />
              <circle
                cx="10.5"
                cy="14"
                r="8.6"
                fill="white"
                stroke="black"
                stroke-width="0.3"
              />
            </svg>
          }
          title="Check a new hackathon"
          reward={100}
        />
      </div>
      <div className={css.container}>
        <h4 className={css.title}>List of tasks</h4>
        {tasks.map((task) => (
          <TaskItem
            img={
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 20C7.58172 20 4 23.5817 4 28H20C20 23.5817 16.4183 20 12 20Z"
                  fill="#5F5F5F"
                />
                <circle cx="12" cy="12" r="12" fill="#DCFFF5" />
                <circle
                  cx="10"
                  cy="12.6665"
                  r="5.85"
                  fill="#03FDB3"
                  stroke="#5F5F5F"
                  stroke-width="0.3"
                />
              </svg>
            }
            key={task.id}
            title={task.name}
            reward={task.reward}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
