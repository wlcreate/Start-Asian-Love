import { Header } from '../components/header'
import { Footer } from '../components/Footer'
import styles from '../styles/Support.module.css';

export default function Support() {
  return (
    <div className={styles.container}>

    <Header/>

    {/* divs are outlined for reference in module.css file */}

      <div className={styles.main}>
        <h2>I am the Support Page</h2>
      </div>
      
      <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit, commodi omnis ab aliquam ea eius corrupti, aspernatur facilis ipsam nihil perferendis asperiores quia consectetur excepturi ducimus laborum, officiis in pariatur deleniti deserunt necessitatibus? Ullam animi adipisci nulla nisi dolore et tempora? Vel quas repellendus alias excepturi quos odit nisi! Et cupiditate minus recusandae architecto ut ea eligendi quidem aspernatur atque nostrum officiis fugiat, dolore, aliquam expedita vel voluptatum earum ab. At labore repellendus odit ad blanditiis nihil laudantium veritatis quam iste, provident tenetur esse ea dolorum libero maxime ex. Doloribus assumenda blanditiis, soluta repudiandae ex ipsum pariatur debitis eum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit, commodi omnis ab aliquam ea eius corrupti, aspernatur facilis ipsam nihil perferendis asperiores quia consectetur excepturi ducimus laborum, officiis in pariatur deleniti deserunt necessitatibus? Ullam animi adipisci nulla nisi dolore et tempora? Vel quas repellendus alias excepturi quos odit nisi! Et cupiditate minus recusandae architecto ut ea eligendi quidem aspernatur atque nostrum officiis fugiat, dolore, aliquam expedita vel voluptatum earum ab. At labore repellendus odit ad blanditiis nihil laudantium veritatis quam iste, provident tenetur esse ea dolorum libero maxime ex. Doloribus assumenda blanditiis, soluta repudiandae ex ipsum pariatur debitis eum.</p>
      </div>
      

    <Footer/>
    </div>

  );
}