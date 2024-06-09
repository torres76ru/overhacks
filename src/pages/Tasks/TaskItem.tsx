import React from 'react';
import s from './TaskItem.module.scss';

const TaskItem = ({
  img,
  title,
  reward,
}: {
  img: React.ReactNode;
  title: string;
  reward: number;
}) => (
  <div className={s.task}>
    <div className={s.imgWrapper}>{img}</div>
    <div className={s.description}>
      <div>{title}</div>
      <div className={s.reward}>+{reward} overXP coins</div>
    </div>
  </div>
);

export default TaskItem;
