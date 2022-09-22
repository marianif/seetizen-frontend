import styles from "@/styles/pages/404.module.css";

const UnauthorizedPage = () => {
  return (
    <div className={styles.container}>
      <p>
        <span>401</span> Non hai le autorizzazioni per accedere a questa pagina
      </p>
    </div>
  );
};

export default UnauthorizedPage;
