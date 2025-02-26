import React from 'react';
import styles from './home.module.css';
import GitHubLogo from '../../assets/images/github_logo.svg';
import TgLogo from '../../assets/images/tg_logo.svg';
import EmailLogo from '../../assets/images/email_logo.svg';

const Home = () => {
    return (
        <main>
            <div className={styles.home}>
                <div>
                    <h1>Lusine Nazaryan</h1>
                    <h2>Front-end Developer</h2>
                </div>
                <div>
                    <ul className={styles.home_sidebar}>
                        <li>
                            <a href="https://github.com/LFemina" target="_blank" rel="noopener" itemProp="">
                                <img src={GitHubLogo} className={styles.home_nav} alt="github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/Lfemina" target="_blank" rel="noopener" itemProp="">
                                <img src={TgLogo} className={styles.home_nav} alt="telegram" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:lfemina@yandex.ru" target="_blank" rel="noopener" itemProp="">
                                <img src={EmailLogo} className={styles.home_nav} alt="email" />
                            </a> 
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Home;