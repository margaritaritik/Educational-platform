import React from 'react';
import styles from './footer.module.css';
import vk from './vk.svg';
import mail from './mail.svg';
import logo from './logo.jpg';

const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.container_header}>
                    {/*<div className={styles.container_media}>*/}
                    {/*    <a className={styles.mail} href="/">*/}
                    {/*        <img src={mail}/>*/}
                    {/*    </a>*/}

                    {/*    <a className={styles.social_media} href="/">*/}
                    {/*        <img src={vk}/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    <img src={logo}/>
                </div>
            </footer>

        </>
    );
};

export default Footer;