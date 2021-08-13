import Link from "next/link";
import Image from "next/image";
import { urlFor, PortableText } from "../../lib/sanity";
import styles from "../../styles/Wins/WinsResource.module.scss";

export const WinsResource = ({ resource }) => {
  return (
    <div className={styles.resource}>
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
};
