import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Wins/WinsResources.module.scss";
import { urlFor, PortableText } from "../../lib/sanity";

export const WinsResources = ({ resources }) => {
  return (
    <div className={styles["resources-container"]}>
      {resources.map((resource) => {
        return (
          <div className={styles.resource} key={resource.id}>
            <Image
              className={styles.portrait}
              src={urlFor(resource.image).url()}
              alt={`Image of ${resource.title}`}
              loading="lazy"
              width={200}
              height={265}
              layout="responsive"
            />
            <h4>{resource.title}</h4>
            <PortableText blocks={resource.content} />
            <Link href={`/wins/${resource._id}`}>Learn more</Link>
          </div>
        );
      })}
    </div>
  );
};
