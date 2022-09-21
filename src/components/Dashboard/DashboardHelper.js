import Link from "next/link";
import styles from "@/styles/components/DashboardHelper.module.css";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const DashboardHelper = ({ item, preview }) => {
  const { heading, paragraph, path } = item;
  return (
    <Link href={`/create/article`}>
      <div className={styles.helper}>
        <div>
          <h6>{heading}</h6>
          {preview && (
            <span className={`bg-accent ${styles.preview}`}>Coming Soon</span>
          )}
        </div>

        <p>{paragraph}</p>
        <span>
          <BsArrowUpRightSquareFill color="white" size={22} />
        </span>
      </div>
    </Link>
  );
};

export default DashboardHelper;
