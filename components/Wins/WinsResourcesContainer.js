import styles from "../../styles/Wins/components/WinsResourcesContainer.module.scss";

import { WinsResource } from "./WinsResource";

export const WinsResourcesContainer = ({ resources }) => {
  return (
    <div className={styles["resources-container"]}>
      {resources.map((resource) => {
        return <WinsResource key={resource._id} resource={resource} />;
      })}
    </div>
  );
};
