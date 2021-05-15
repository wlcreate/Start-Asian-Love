import { useRouter } from 'next/router';
import styles from '../../styles/Layout/Header.module.css';



export const Header = () => {
    const router = useRouter();

    return(
        <div className={styles.container}>
            <div className={styles.titlelogo}>
                <div onClick={() => router.push('/')}><h1>Start Asian Love</h1></div>
            </div>
            <div className={styles.main}>
                <div onClick={() => router.push('/')}>Home</div>
                <div onClick={() => router.push('/news/1')}>News</div>
                <div onClick={() => router.push('/support')}>Support</div>
                <div onClick={() => router.push('/wins')}>Wins</div>
            </div>
        </div>
    )
};


// FIRST FORMAT

// import Link from 'next/link';
// import './header.css'

// export default () => (
//     <header>
//         <nav>
//             <ul>
//                 <li>
//                     <Link href="/"><a>Home</a></Link>
//                 </li>
//                 <li>
//                     <Link href="/support"><a>Support</a></Link>
//                 </li>
//                 <li>
//                     <Link href="/wins"><a>Wins</a></Link>
//                 </li>
//             </ul>
//         </nav>
//     </header>
// ) 
