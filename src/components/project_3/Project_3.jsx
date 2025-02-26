import React from "react";
import VideoProject3 from '../../assets/video/project_3.mp4'
import styles from './project_3.module.css';

const Project_3 = () => {
    return (
        <main>
            <h2>Проект 3.</h2>
            <p>Третий командный проект.</p>
            <p><i>Стэк:</i> JavaScript, React, API, Vite.</p>
            <div>
                <video className='video' controls>
                    <source src={VideoProject3} type='video/mp4'/>
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
            <div>
                <a href='https://github.com/LFemina/ITGIRLS_teamproject1' className='btn' target='_blank' rel='noopener'>
                    Репозиторий
                </a>
            </div>
        </main>
    );
};

export default Project_3;