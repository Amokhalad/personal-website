
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
                <li>
                    <Link href="/" passHref>
                        <button type="button" aria-label="Home page">Home</button>
                    </Link>
                </li>
                <li>
                    <Link href="/projects" passHref>
                        <button type="button" aria-label="Projects page">Projects</button>
                    </Link>
                </li>
                <li>
                    <Link href="/education" passHref>
                        <button type="button" aria-label="Education page">Education</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
