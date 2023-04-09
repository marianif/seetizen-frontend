import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloseButton from "../CloseButton/CloseButton";
import CustomButton from "@/components/CustomButton";
import DetailDialog from "@/components/DetailDialog";
import Heading from "@/components/Typography/Heading";
import { PROGRAM } from "@/constants/places";
import Image from "next/image";

import logo from "../../../../public/images/aprile-logo-full.png";

import styles from "../../../styles/components/HouseList.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Program = ({ onHousePress, onClose, flows }) => {
  const [value, setValue] = useState(0);
  const [current, setCurrent] = "dayOne";
  const [showDayOne, setShowDayOne] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [detail, setDetail] = useState();

  const onReadMorePress = (item) => {
    setDetail(item);
    setShowDialog(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        flex: 1,
        backgroundColor: "#090909",
        minHeight: "100vh",
        position: "absolute",
        top: 0,
        paddingBottom: "5%",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "white",
        }}
      >
        <Image
          src={logo}
          // layout="intrinsic"
          width={150}
          height={"100%"}
          objectFit="contain"
        />

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Esposizioni" {...a11yProps(0)} />
          <Tab label="Performance" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div
          style={{
            flexDirection: "row",
            flexWrap: "no-wrap",
          }}
        >
          {PROGRAM.exhibitions.map((item) => {
            //const houseFlow = getHouseFlow(item.id);
            return (
              <div
                className={styles.container}
                key={item.id}
                //onClick={() => onHousePress(item.id)}
              >
                <div className={styles.inner}>
                  <h4 className="text-light">{item.houseName}</h4>
                </div>

                <h1 className="text-light">{item.title}</h1>
                <div className={styles.bottomContainer}>
                  {/* <div className={styles.flowContainer}>
                      <p>
                        {houseFlow === 1
                          ? "Spazio Libero"
                          : houseFlow === 2
                          ? "Sia sta affollando"
                          : houseFlow === 3 && "Affollato"}
                      </p>
                      <span
                        className={styles.flowCircle}
                        style={{
                          backgroundColor:
                            houseFlow === 1
                              ? "green"
                              : houseFlow === 2
                              ? "yellow"
                              : houseFlow === 3 && "red",
                        }}
                      />
                    </div> */}
                </div>
                <div className={styles.inner}>
                  <h3 className="text-light">{item.address}</h3>
                  <CustomButton
                    label={"Leggi di più"}
                    onPress={() => onReadMorePress(item)}
                    variant="filled"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <CustomButton
            label={"15 Aprile"}
            onPress={() => setShowDayOne(true)}
            variant={showDayOne ? "filled" : "outlined"}
          />
          <span style={{ marginRight: 10 }} />
          <CustomButton
            label={"16 Aprile"}
            onPress={() => setShowDayOne(false)}
            variant={!showDayOne ? "filled" : "outlined"}
          />
        </div>
        {showDayOne &&
          PROGRAM.performances.dayOne.map((item) => {
            //const houseFlow = getHouseFlow(item.id);
            return (
              <div
                className={styles.container}
                key={item.id}
                //onClick={() => onHousePress(item.id)}
              >
                <div className={styles.inner}>
                  <h4 className="text-light">{item.houseName}</h4>
                  <p className="text-light">{item.timeRange}</p>
                </div>

                <h1 className="text-light">{item.title}</h1>
                <div className={styles.bottomContainer}>
                  {/* <div className={styles.flowContainer}>
                      <p>
                        {houseFlow === 1
                          ? "Spazio Libero"
                          : houseFlow === 2
                          ? "Sia sta affollando"
                          : houseFlow === 3 && "Affollato"}
                      </p>
                      <span
                        className={styles.flowCircle}
                        style={{
                          backgroundColor:
                            houseFlow === 1
                              ? "green"
                              : houseFlow === 2
                              ? "yellow"
                              : houseFlow === 3 && "red",
                        }}
                      />
                    </div> */}
                </div>
                <div className={styles.inner}>
                  <h3 className="text-light">{item.address}</h3>
                  <CustomButton
                    label={"Leggi di più"}
                    onPress={() => onReadMorePress(item)}
                    variant="filled"
                  />
                </div>
              </div>
            );
          })}
        {!showDayOne &&
          PROGRAM.performances.dayTwo.map((item) => {
            //const houseFlow = getHouseFlow(item.id);
            return (
              <div
                className={styles.container}
                key={item.id}
                //onClick={() => onHousePress(item.id)}
              >
                <div className={styles.inner}>
                  <h4 className="text-light">{item.houseName}</h4>
                  <p className="text-light">{item.timeRange}</p>
                </div>

                <h1 className="text-light">{item.title}</h1>
                <div className={styles.bottomContainer}>
                  {/* <div className={styles.flowContainer}>
                      <p>
                        {houseFlow === 1
                          ? "Spazio Libero"
                          : houseFlow === 2
                          ? "Sia sta affollando"
                          : houseFlow === 3 && "Affollato"}
                      </p>
                      <span
                        className={styles.flowCircle}
                        style={{
                          backgroundColor:
                            houseFlow === 1
                              ? "green"
                              : houseFlow === 2
                              ? "yellow"
                              : houseFlow === 3 && "red",
                        }}
                      />
                    </div> */}
                </div>
                <div className={styles.inner}>
                  <h3 className="text-light">{item.address}</h3>
                  <CustomButton
                    label={"Leggi di più"}
                    onPress={() => onReadMorePress(item)}
                  />
                </div>
              </div>
            );
          })}
      </TabPanel>
      {showDialog && (
        <DetailDialog show={showDialog} setShow={setShowDialog} item={detail} />
      )}
    </Box>
  );
};

export default Program;
