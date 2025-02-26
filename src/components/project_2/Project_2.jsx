import React from 'react';
import VideoProject2 from '../../assets/video/project_2.mp4';
import styles from './project_2.module.css';

const Project_2 = () => {
    return (
        <main>
            <h2>Проект 2.</h2>
            <p>Второй командный проект c заказчиком.</p>
            <p><i>Стэк:</i> HTML5, CSS3, SASS, JavaScript, Webpack, БЭМ.</p>
            <div>
                <video className='video' controls>
                    <source src={VideoProject2} type='video/mp4' />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
            <div className={styles.section_btn}>
                <a href='https://maksimenko.fit/' className='btn' target='_blank' rel='noopener'>
                    Сайт
                </a>
                <a href='https://github.com/LFemina/ITGIRLS_teamproject2' className='btn' target='_blank' rel='noopener'>
                    Репозиторий
                </a>
            </div>
        </main>
    );
};

export default Project_2;