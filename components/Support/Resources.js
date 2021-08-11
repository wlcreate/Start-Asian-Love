import Image from "next/image";
import styles from "../../styles/Support/Resources.module.scss";
import { urlFor } from "../../lib/sanity";

export const Resources = ({ resourcesList }) => {
  return (
    <div className="page-container">
      <div className={styles["resources-container"]}>
        {resourcesList.length > 0 ? (
          resourcesList.map((resource) => {
            return (
              <div className={styles["resource-card"]} key={resource.id}>
                <div onClick={() => window.open(resource.url, "_blank")}>
                  <Image
                    src={urlFor(resource.image).url()}
                    alt={`Image of ${resource.title}`}
                    loading="lazy"
                    width={200}
                    height={150}
                    layout="responsive"
                  />
                  <h3>{resource.title}</h3>
                  <p className={styles.description}>{resource.description}</p>
                  <div className={styles["categories"]}>
                    <p>{resource.category[0]}</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <p>{resource.category[1]}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles["no-resources-text"]}>Sorry! No resources yet!</div>
        )}
      </div>
    </div>
  );
};