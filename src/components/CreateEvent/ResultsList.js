import styles from "@/styles/components/ResultsList.module.css";
import { PlaceResult } from "..";

const ResultsList = ({ items, onLocationSelect }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <PlaceResult
          item={item}
          key={index}
          onClick={() =>
            onLocationSelect({
              address: item.description,
              placeId: item.place_id,
            })
          }
        />
      ))}
    </div>
  );
};

export default ResultsList;
