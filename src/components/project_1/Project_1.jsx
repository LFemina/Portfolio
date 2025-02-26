import React from 'react';
import VideoProject1 from '../../assets/video/project_1.mp4'
import styles from './project_1.module.css';

const Project_1 = () => {
    return (
        <main>
            <h2>Проект 1.</h2>
            <p>Первый командный проект.</p>
            <p><i>Стэк:</i> HTML5, CSS3, SASS, Webpack, БЭМ.</p>
            <div>
                <video className='video' controls>
                    <source src={VideoProject1} type='video/mp4'/>
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

export default Project_1;