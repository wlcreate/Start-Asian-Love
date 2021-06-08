import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Support/Support.module.css";
import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";
import { ReusableButtons } from "../components/Support/ReusableButtons";
import ScrollButton from "../components/Layout/ScrollButton";
import { Resources } from "../components/Support/Resources";
import resourcesData from "../database/SupportResources";

export default function Support() {
  const [allyship, setAllyship] = useState("all");
  const [category, setCategory] = useState("All");

  const changeAllyship = (chosenAllyship) => {
    setAllyship(chosenAllyship);
  };

  const changeCategory = (chosenCategory) => {
    setCategory(chosenCategory);
  };

  // filters the resources based on the allyship and category chosen by the user
  // the default being anyone && all
  // otherwise, since the resources first depend on the allyship, filter the resources by allyship then by category (unless allyship is anyone)
  // future: if a resource has more than 2 categories?
  const filterResources = () => {
    if (allyship === "all" && category === "All") {
      return resourcesData;
    } else if (allyship === "all" && category !== "All") {
      let filteredResourcesByCategory = resourcesData.filter((resource) => {
        return resource.category[0] === category || resource.category[1] === category;
      });

      return filteredResourcesByCategory;
    } else if (allyship === "asian" && category === "All") {
      let filteredResourcesByAllyship = resourcesData.filter((resource) => {
        return resource.allyship[0] === "asian" || resource.allyship[1] === "asian";
      });

      return filteredResourcesByAllyship;
    } else if (allyship === "asian" && category !== "All") {
      let filteredResourcesByAllyship = resourcesData.filter((resource) => {
        return resource.allyship[0] === "asian" || resource.allyship[1] === "asian";
      });

      let filteredResourcesByCategory = filteredResourcesByAllyship.filter((resource) => {
        return resource.category[0] === category || resource.category[1] === category;
      });

      return filteredResourcesByCategory;
    } else if (allyship === "bipoc" && category === "All") {
      let filteredResourcesByAllyship = resourcesData.filter((resource) => {
        return resource.allyship[0] === "bipoc" || resource.allyship[1] === "bipoc";
      });

      return filteredResourcesByAllyship;
    } else if (allyship === "bipoc" && category !== "All") {
      let filteredResourcesByAllyship = resourcesData.filter((resource) => {
        return resource.allyship[0] === "bipoc" || resource.allyship[1] === "bipoc";
      });

      let filteredResourcesByCategory = filteredResourcesByAllyship.filter((resource) => {
        return resource.category[0] === category || resource.category[1] === category;
      });
      return filteredResourcesByCategory;
    } else if (allyship === "white" && category === "All") {
      let filteredResourcesByAllyship = resourcesData.filter((resource) => {
        return resource.allyship[0] === "white" || resource.allyship[1] === "white";
      });

      return filteredResourcesByAllyship;
    } else if (allyship === "white" && category !== "All") {
      let filteredResourcesByAllyship = resourcesData.filter((resource) => {
        return resource.allyship[0] === "white" || resource.allyship[1] === "white";
      });

      let filteredResourcesByCategory = filteredResourcesByAllyship.filter((resource) => {
        return resource.category[0] === category || resource.category[1] === category;
      });
      return filteredResourcesByCategory;
    }
  };

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Resources on how you can support and be an ally to Asian Americans right now."
        />
        <title>Start Asian Love | Support</title>

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        {/* Open Graph/Facebook */}
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://www.startalove.com/" key="ogurl" />
        <meta
          property="og:title"
          content="Start Asian Love— Combat Hate. Choose Love."
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Resources on how you can support and be an ally to Asian Americans right now."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg"
          key="ogimage"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:url" content="https://www.startalove.com/" key="twurl" />
        <meta
          property="twitter:title"
          content="Start Asian Love— Combat Hate. Choose Love."
          key="twtitle"
        />
        <meta
          property="twitter:description"
          content="Resources on how you can support and be an ally to Asian Americans right now."
          key="twdesc"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dpqssv1uu/image/upload/v1621022082/StartAsianLove-og.jpg"
          key="twimage"
        />
      </Head>
      <Header />

      <h2 className={"page-heading"}>Support</h2>

      <ScrollButton scrollPoint={5000} />
      <div className={styles.description}>
        <p>
          As the <span>#StopAsianHate</span> movement has grown, so has the number of resources to
          educate about the Asian-American experience, Asian culture, places you can donate, etc.
          Consequently with this influx of information, it can be overwhelming to sort through and
          understand where to go to for what. As a result, we have decided to create our own list of
          resources to address this pain point, making it easier for you and others to understand,
          share, and sort through all of this information.{" "}
        </p>
        <p>
          Below you will find our growing list of resources. Check back for updates and if you know
          a great resource but don't see it listed please reach out to contribute!
        </p>
      </div>

      <div className={styles["filter-section"]}>
        <h3>Who are these resources for?</h3>
        <ReusableButtons
          buttonData={resourcesData}
          group={"allyships"}
          changeSelection={changeAllyship}
        />
        <h3>Filter by Category</h3>
        <ReusableButtons
          buttonData={resourcesData}
          group={"categories"}
          changeSelection={changeCategory}
        />
      </div>

      <p className={styles.viewing}>
        Viewing&nbsp;
        <span className={styles["selected-category"]}>{category}&nbsp;</span>
        resources for&nbsp;
        <span className={styles["selected-allyship"]}>{allyship}&nbsp;</span>
        <a
          href="https://www.merriam-webster.com/dictionary/folx"
          target="_blank"
          rel="noopener noreferrer">
          folx
        </a>
        .
      </p>

      <Resources resourcesList={filterResources()} />
      <Footer />
    </div>
  );
}
