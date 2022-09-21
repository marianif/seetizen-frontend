import styles from "@/styles/components/ResultsList.module.css";

const PlaceResult = ({ item, onClick }) => {
  return (
    <div className={styles.placeContainer} onClick={onClick}>
      <p>{item.description}</p>
    </div>
  );
};

export default PlaceResult;
