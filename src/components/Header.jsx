import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>
                zebso.la
            </h1>
            <nav className={styles.nav}>
                <a href="#">whois</a>
                <a href="#">contact</a>
                <a href="#">writings</a>
                <a href="#">photography</a>
                <a href="#">resume</a>
            </nav>
        </header>
    );
}

export default Header;