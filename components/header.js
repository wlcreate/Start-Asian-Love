import Link from 'next/link';
// import './header.css'

export default () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/support"><a>Support</a></Link>
                </li>
                <li>
                    <Link href="/wins"><a>Wins</a></Link>
                </li>
            </ul>
        </nav>
    </header>
) 
