import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Wins/WinsResources.module.css";

export const WinsResources = (props) => {
  let { resources, category } = props;

  return (
    <div className="page-container">
      <div className={styles.main}>
        {resources.map((resource) => {
          return (
            <div className={styles.card} key={resource.id}>
              <Image
                className={styles.portrait}
                src={resource.portrait}
                alt={`Image of ${resource.title}`}
                loading="lazy"
                width={200}
                height={265}
                layout="responsive"
              />
              <h4 className={styles.titlebox}>{resource.title}</h4>
              <p className={styles.content}>{resource.content}</p>
              <Link href={`/wins/${category}/${resource.id}`}>Learn more</Link>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
};
