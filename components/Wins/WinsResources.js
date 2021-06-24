import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Wins/WinsResources.module.scss";

export const WinsResources = (props) => {
  let { resources, category } = props;

  return (
    <div className={styles["resources-container"]}>
      {resources.map((resource) => {
        return (
          <div className={styles.resource} key={resource.id}>
            <Image
              className={styles.portrait}
              src={resource.portrait}
              alt={`Image of ${resource.title}`}
              loading="lazy"
              width={200}
              height={265}
              layout="responsive"
            />
            <h4>{resource.title}</h4>
            <p>{resource.content}</p>
            <Link href={`/wins/${category}/${resource.id}`}>Learn more</Link>
          </div>
        );
      })}
    </div>
  );
};
