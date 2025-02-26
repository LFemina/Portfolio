import React from "react";
import VideoProject4 from '../../assets/video/project_4.mp4';
import styles from './project_4.module.css';

const Project_4 = () => {
    return (
        <main>
            <h2>Проект 4.</h2>
            <p>Индивидуальный проект.</p>
            <p><i>Стэк:</i> JavaScript, React, API, Context, MobX, Router, Vite.</p>
            <div>
                <video className='video' controls>
                    <source src={VideoProject4} type='video/mp4'/>
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
            <div>
                <a href='https://github.com/LFemina/22_week-React-LanguageLearningApp' className='btn' target='_blank' rel='noopener'>
                    Репозиторий
                </a>
            </div>
        </main>
    );
};

export default Project_4;