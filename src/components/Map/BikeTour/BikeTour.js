import React, { useState, useEffect } from "react";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ReplyIcon from "@mui/icons-material/Reply";
import { BIKE_TOUR } from "@/constants/tour";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { API, graphqlOperation } from "aws-amplify";
import { listBiketours } from "@/src/graphql/queries";
import { createBiketour, updateBiketour } from "@/src/graphql/mutations";

const MAX_PARTECIPANTS = 10;

const BikeTour = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [index, setIndex] = useState(0);
  const [showList, setShowList] = useState(false);
  const [tours, setTours] = useState();
  const [day, setDay] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const handleChange = (e) => {
    setDay(e.target.value);
  };

  const disableButton = (tourId) => {
    const currentTour = tours.find((tour) => tour.id === tourId);
    if (currentTour.partecipants >= MAX_PARTECIPANTS) {
      return true;
    }

    return false;
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    const current = tours.find((item) => item.id === day);
    const partecipantsNames = JSON.parse(current.partecipantsNames);
    const partecipantsNumbers = JSON.parse(current.partecipantPhoneNumbers); // mail

    partecipantsNames.push(name);
    partecipantsNumbers.push(phone);

    const input = {
      id: day,
      partecipantsNames: JSON.stringify(partecipantsNames),
      partecipantPhoneNumbers: JSON.stringify(partecipantsNumbers),
      partecipants: current.partecipants + 1,
    };
    try {
      await API.graphql(graphqlOperation(updateBiketour, { input }));
      setDay(null);
      setName(null);
      setPhone(null);
      setShowSuccess(true);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    API.graphql(graphqlOperation(listBiketours)).then(({ data }) =>
      setTours(data.listBiketours.items)
    );
  }, []);

  const handleShowTour = (index) => {
    setIndex(index);
    setShowList(true);
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 40,
      }}
    >
      <DirectionsBikeIcon style={{ color: "white", width: 80, height: 80 }} />
      <h2 style={{ display: "inline", width: "70%", textAlign: "center" }}>
        {showSuccess
          ? "Prenotazione andata a buon fine, Passa al prossimo step!"
          : "Prenotati per il BikeTour!"}
      </h2>
      {showSuccess && !showList && (
        <h4
          style={{
            display: "inline",
            width: "80%",
            textAlign: "center",
            color: "white",
            margin: 0,
            fontSize: 26,
            lineHeight: 1.2,
            opacity: 0.7,
          }}
        >
          Scrivi al 366 815 4418 specificando il nome e la data da te scelta per
          confermare la tua presenza
        </h4>
      )}
      {!showSuccess && (
        <>
          <ButtonGroup
            variant="contained"
            aria-label="text button group"
            color="secondary"
            style={{ marginBottom: 20 }}
          >
            <Button
              style={{ color: "black" }}
              onClick={() => handleShowTour(0)}
            >
              Percorso 15 Aprile
            </Button>
            <Button
              style={{ color: "black" }}
              onClick={() => handleShowTour(1)}
            >
              Percorso 16 Aprile
            </Button>
          </ButtonGroup>
          {showList && (
            <Button
              variant={"outlined"}
              startIcon={<ReplyIcon />}
              color="secondary"
              onClick={() => setShowList(false)}
              style={{ marginBottom: 20 }}
            >
              Torna alla registrazione
            </Button>
          )}
        </>
      )}
      {tours && !showSuccess && !showList && (
        <Box
          sx={{
            minWidth: 400,
            padding: 10,
            backgroundColor: "white",
            borderRadius: 6,
          }}
        >
          <FormControl
            fullWidth
            size="xl"
            style={{
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Seleziona Data
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={day}
              label="Data"
              onChange={handleChange}
              style={{ borderColor: "white", color: "black" }}
              placeholder="Seleziona Giorno"
            >
              <MenuItem
                disabled={disableButton(BIKE_TOUR[0].id)}
                value={BIKE_TOUR[0].id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  fontWeight: "bold",
                }}
              >
                {BIKE_TOUR[0].day}
                <p style={{ fontWeight: "400" }}>
                  {MAX_PARTECIPANTS - tours[0].partecipants} posti disponibili
                </p>
              </MenuItem>
              <MenuItem
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  fontWeight: "bold",
                }}
                disabled={disableButton(BIKE_TOUR[1].id)}
                value={BIKE_TOUR[1].id}
              >
                {BIKE_TOUR[1].day}
                <p style={{ fontWeight: "400" }}>
                  {MAX_PARTECIPANTS - tours[1].partecipants} posti disponibili
                </p>
              </MenuItem>
            </Select>
            <TextField
              id="outlined-basic"
              label="Nome e Cognome"
              variant="outlined"
              style={{ marginTop: 10, marginBottom: 10 }}
              onChange={(e) => setName(e.target.value)}
            />
            <Button variant="contained" onClick={handleReservation}>
              Prenotati!
            </Button>
          </FormControl>
        </Box>
      )}
      {showList && (
        <List
          sx={{
            width: "90%",
            bgcolor: "background.paper",
            borderRadius: 8,
            padding: 2,
          }}
        >
          {BIKE_TOUR[index].program.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <DirectionsBikeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default BikeTour;
