import styles from "@/styles/components/EventForm.module.css";
import { TextField } from "@mui/material";
import { ResultsList } from "@/src/components";

const EventForm = ({
  values,
  onChange,
  handleSearch,
  handleAddress,
  predictions,
  showAddressResults,
}) => {
  const { search, onSearch, onLocationSelect } = handleSearch;
  const { selectedResult, clear } = handleAddress;

  const onAddressFocus = () => {
    if (selectedResult) {
      clear();
    }
  };
  return (
    <form className={styles.form}>
      <div className={styles.formInner}>
        <span>
          <TextField
            placeholder="Inserisci nome evento"
            value={values.title}
            name="title"
            onChange={onChange}
            label="Titolo *"
            color="primary"
          />
        </span>
        <span>
          <TextField
            placeholder="Inserisci tema"
            value={values.label}
            name="label"
            onChange={onChange}
            label="Tema *"
            inputProps={{ color: "white" }}
          />
        </span>
      </div>
      <div className={styles.formInner}>
        <span>
          <TextField
            placeholder="Inserisci il nome del luogo"
            value={values.location}
            name="location"
            onChange={onChange}
            label="Luogo *"
          />
        </span>
        <div className={styles.addressContainer}>
          <TextField
            placeholder="Inserisci indirizzo"
            value={selectedResult ? selectedResult : search}
            name="address"
            onChange={onSearch}
            label="Indirizzo *"
            fullWidth
            onFocus={onAddressFocus}
          />
          {showAddressResults && (
            <ResultsList
              items={predictions}
              onLocationSelect={onLocationSelect}
            />
          )}
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <span>
          <TextField
            name="description"
            value={values.description}
            placeholder="Inserisci descrizione"
            cols={8}
            rows={10}
            onChange={onChange}
            label="Descrizione *"
            multiline
          />
        </span>
      </div>
    </form>
  );
};

export default EventForm;
