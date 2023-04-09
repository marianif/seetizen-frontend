import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { updateFlow, updateReservation } from "@/src/graphql/mutations";
import { createReservation } from "@/src/graphql/mutations";
import { listFlows, listReservations } from "@/src/graphql/queries";
import { HOUSES } from "@/constants/places";
import UpdateCard from "@/components/UpdateCard/UpdateCard";
import { useState, useEffect } from "react";
import styles from "../../src/styles/pages/Reservation.module.css";

const PERFORMANCES = [
  {
    id: "1",
    houseId: "1",
  },
  {
    id: "2",
    houseId: "1",
  },
  {
    id: "3",
    houseId: "1",
  },
  {
    id: "4",
    houseId: "1",
  },
  {
    id: "5",
    houseId: "1",
  },
  {
    id: "6",
    houseId: "1",
  },
  {
    id: "6",
    houseId: "1",
  },
  {
    id: "8",
    houseId: "1",
  },
  {
    id: "9",
    houseId: "1",
  },
  {
    id: "10",
    houseId: "1",
  },
  {
    id: "11",
    houseId: "1",
  },
  {
    id: "12",
    houseId: "1",
  },
  {
    id: "1",
    houseId: "1",
  },
  {
    id: "13",
    houseId: "1",
  },
  {
    id: "14",
    houseId: "1",
  },
  {
    id: "15",
    houseId: "1",
  },
  {
    id: "16",
    houseId: "1",
  },
  {
    id: "17",
    houseId: "1",
  },
  {
    id: "18",
    houseId: "1",
  },
  {
    id: "19",
    houseId: "1",
  },
  {
    id: "20",
    houseId: "1",
  },
  {
    id: "21",
    houseId: "1",
  },
  {
    id: "22",
    houseId: "1",
  },
  {
    id: "23",
    houseId: "1",
  },
  {
    id: "24",
    houseId: "1",
  },
  {
    id: "25",
    houseId: "1",
  },
];

const ReservationPage = () => {
  const [performances, setPerformances] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [selected, setSelected] = useState();
  const [user, setUser] = useState();

  const fetch = async () => {
    try {
      const { data } = await API.graphql(graphqlOperation(listReservations));
      console.log({ data });
      setPerformances(data.listReservations.items);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSelect = (performance) => {
    setSelected(performance);
    setShowInput(true);
  };

  const handleReservation = async (performance) => {
    const current = performances.find((item) => item.id === performance.id);
    const partecipants = JSON.parse(current.partecipants);
    partecipants.push(user);

    const input = {
      id: performance.id,
      reservationId: performance.houseId,
      houseId: performance.houseId,
      partecipants: JSON.stringify(partecipants),
    };
    setSelected(null);
    setUser(null);
    setShowInput(false);
    try {
      await API.graphql(graphqlOperation(updateReservation, { input }));
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div style={{ flex: 1 }}>
      {PERFORMANCES.map((performance) => (
        <div
          onClick={() => handleSelect(performance)}
          key={performance.id}
          className={styles.selector}
        >
          <h1>Performance {`${performance.id}`}</h1>
          {showInput && performance.id === selected.id && (
            <>
              <input
                onChange={(e) => setUser(e.target.value)}
                value={user}
                placeholder="Nome"
                className={styles.input}
              />
              <button
                className={styles.button}
                onClick={() => handleReservation(performance)}
              >
                confirm
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReservationPage;
