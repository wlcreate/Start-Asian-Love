import styles from "../../styles/Support/SupportResourcesContainer.module.scss";

import { SupportResource } from "./SupportResource";

export const SupportResourcesContainer = ({ resourcesList }) => {
  return (
    <div className="page-container">
      <div className={styles["resources-container"]}>
        {resourcesList.length > 0 ? (
          resourcesList.map((resource) => {
            return <SupportResource key={resource._id} resource={resource} />;
          })
        ) : (
          <div className={styles["no-resources-text"]}>Sorry! No resources yet!</div>
        )}
      </div>
    </div>
  );
};
