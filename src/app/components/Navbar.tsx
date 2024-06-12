
import Link from 'next/link';
import styles from '@/app/styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navLogo}>
                Mokhalad Aljuboori
            </div>
            <div className={styles.navLinks}>
                <Link href="/">
                    <button>About</button>
                </Link>
                <Link href="/courses">
                    <button>Courses</button>
                </Link>
                <Link href="/education">
                    <button>Education</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
