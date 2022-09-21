import Meta from "./Meta";
import styles from "@/styles/shared/Layout.module.css";
import { Header, AppHeader, Footer } from ".";

const Layout = ({ title, description, keywords, children, headerType }) => {
  return (
    <div>
      <Meta title={title} description={description} keywords={keywords} />
      {headerType === "landing" && <Header />}
      {headerType === "app" && <AppHeader />}
      <main className={styles.main}>{children}</main>
      {/* {!hiddenFooter && <Footer />} */}
    </div>
  );
};

export default Layout;
