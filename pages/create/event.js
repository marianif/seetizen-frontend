import { API, Auth, graphqlOperation, withSSRContext } from "aws-amplify";
import styles from "@/styles/pages/CreateEvent.module.css";
import Link from "next/link";
import { EventForm, Layout } from "@/src/components";
import { useState, useMemo, useEffect } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  TextField,
  Select,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { BiImageAdd } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { tags } from "@/data/tags";
import { generateImageKey } from "@/src/helpers/storage";
import { createEvent } from "@/src/graphql/mutations";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { colors } from "@/src/utils/colors";
import { BASE_URL } from "constants";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

// Tags Select Menu props
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CreateEventPage = () => {
  const router = useRouter();
  const sessionToken = useMemo(() => uuidv4(), []);
  const { hasPermission, isUsingAs, currentGroup } = useSelector(
    (state) => state.user
  );
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [selTags, setSelTags] = useState([]);
  const [values, setValues] = useState({
    title: "",
    label: "",
    location: "",
    address: "",
    description: "",
    coordinates: {},
    date: "",
    image: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFile = async (e) => {
    if (e.target.files.length !== 0) {
      const [file] = e.target.files;
      setFile(file);
      const src = URL.createObjectURL(file);
      setValues({
        ...values,
        image: src,
      });
    }
  };

  const onSearch = async (e) => {
    const search = e.target.value;
    setSearch(search);

    try {
      const res = await fetch(
        `${BASE_URL}api/places/search?place=${search}&sessionToken=${sessionToken}`
      );
      const { predictions } = await res.json();
      setPredictions(predictions);
      setShowResults(true);
    } catch (error) {
      console.warn(error);
    }
  };

  const onLocationSelect = async ({ address, placeId }) => {
    setShowResults(false);
    console.log({ address, placeId });
    try {
      const res = await fetch(
        `http://localhost:3000/api/places/select?placeId=${placeId}&sessionToken=${sessionToken}`
      );
      const { result } = await res.json(res);
      const { location: coords } = result.geometry;
      const { name: shortAddress } = result;
      console.log(result);
      setValues({
        ...values,
        coordinates: coords,
        address: shortAddress,
      });

      setSelectedResult(address);
    } catch (error) {
      console.warn(error);
    }
  };

  const clear = () => {
    setSearch("");
    setSelectedResult("");
    setValues({
      ...values,
      address: "",
    });
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelTags(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const onPublish = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const hasEmptyFields = Object.values(values).some(
        (field) => field === ""
      );
      const hasSelectedTags = selTags.length > 0;
      // Form Validation
      if (hasEmptyFields || !hasSelectedTags) {
        alert("Compila tutti i campi");
        setLoading(false);
        return;
      }
      const selectedTags = selTags.map((selTag) => {
        const tag = tags.find((tag) => tag.label === selTag);
        return tag;
      });

      const tagIDS = selTags.map((selTag) => {
        const tag = tags.find((tag) => tag.label === selTag);
        return tag.id;
      });

      const coverKey = await generateImageKey(file);
      const { attributes } = await Auth.currentAuthenticatedUser();
      const {
        title,
        label,
        address,
        location,
        description,
        date,
        coordinates,
      } = values;

      const input = {
        organizerId: isUsingAs === "user" ? attributes.sub : currentGroup.id,
        title,
        description,
        label,
        url: `https://${url}`,
        startsAt: date,
        address,
        latitude: coordinates.lat,
        longitude: coordinates.lng,
        location,
        tags: JSON.stringify(selectedTags),
        tagIDS: JSON.stringify(tagIDS),
        coverKey,
      };

      if (isUsingAs === "group") {
        Object.defineProperty(input, "groupEventsId", {
          value: currentGroup.id,
        });
      }

      await API.graphql(graphqlOperation(createEvent, { input }));
      setLoading(false);
      router.back();
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    !hasPermission && router.push("/dashboard");

    return;
  }, [hasPermission]);

  return (
    <Layout headerType="app" title="Crea Evento" hiddenFooter>
      <div className={styles.container}>
        <div className={styles.innerTop}>
          <span className={styles.innerTopLeft}>
            <Link href="/dashboard">
              <a>← Indietro</a>
            </Link>
            <h3 className="text-dark">Crea nuovo evento</h3>
          </span>
          <LoadingButton
            onClick={onPublish}
            loading={loading}
            sx={{
              backgroundColor: colors.emerald400,
              color: colors.white,
              "&:hover": {
                backgroundColor: colors.gray100,
                border: 1,
                borderColor: colors.darkGray,
                color: colors.darkGray,
              },
            }}
          >
            Pubblica
          </LoadingButton>
        </div>
        <div className={styles.innerBottom}>
          <div className={styles.formContainer}>
            <EventForm
              values={values}
              onChange={onChange}
              handleSearch={{ search, onSearch, onLocationSelect }}
              handleAddress={{ selectedResult, clear }}
              showAddressResults={showResults}
              predictions={predictions}
            />
          </div>
          <div className={styles.sidebar}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField fullWidth {...props} />}
                label="Calendario *"
                value={values.date ? values.date : new Date()}
                inputFormat="dd/MM/yyyy hh:mm a"
                minDateTime={new Date()}
                onChange={(newValue) => {
                  setValues({
                    ...values,
                    date: new Date(newValue).toISOString(),
                  });
                }}
              />
            </LocalizationProvider>
            {/* Tags evento */}
            <div className={styles.tagsContainer}>
              <FormControl fullWidth>
                <InputLabel id="multiple-chip-label">Categorie *</InputLabel>
                <Select
                  labelId="multiple-chip-label"
                  id="multiple-chip"
                  multiple
                  required
                  value={selTags}
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Categorie"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {tags.map((tag) => (
                    <MenuItem key={tag.id} value={tag.label}>
                      {tag.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <TextField
              fullWidth
              label="Link"
              id="outlined-start-adornment"
              onChange={(e) => setUrl(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">https://</InputAdornment>
                ),
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Non è obbligatorio
            </FormHelperText>
            <div className={styles.uploadImg}>
              <br />
              <label htmlFor="imageUpload">
                <BiImageAdd size={28} color={"black"} />
                <input
                  type="file"
                  name="image"
                  accept=".png, .jpeg, .jpg"
                  onChange={handleFile}
                />
              </label>
              {values.image && (
                <img src={values.image} className={styles.img} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ req, res }) {
  const { Auth } = withSSRContext({ req });

  try {
    await Auth.currentAuthenticatedUser();
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/401",
        permanent: false,
      },
    };
  }
}

export default CreateEventPage;
