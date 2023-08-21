import styles from './Sidebar.module.css';

function Sidebar({handleNavClick}) {
    return (
        <div className={styles.sidebar}>
            <header className={styles.header}>
                <h1 className={styles.h1}>
                    <span data-href="index" onClick={handleNavClick} title="go to home content">Zeb Sola</span>
                </h1>
            </header>
            <nav className={styles.nav}>
                <span data-href="contact" onClick={handleNavClick} title="go to contact information">contact</span>
                <span data-href="writings" onClick={handleNavClick} title="go to posts">writings</span>
                <span data-href="photos" onClick={handleNavClick} title="go to photos">photos</span>
                <span data-href="resume" onClick={handleNavClick} title="go to resume">resume</span>
            </nav>
            <footer>
                <p>© 2023</p>
            </footer>
        </div>
    );
}

export default Sidebar;