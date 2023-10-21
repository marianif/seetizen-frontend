import React, { useEffect, useState } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { Button } from "@mui/material";
import zoo_history from "@/data/zoo-history.json";
import { HistoryCard } from "@/components/index";
import { IconButton } from "@mui/material";

import bg from "/public/images/bg-michelotti.jpeg";
import one from "/public/images/zoo/1.png";
import two from "/public/images/zoo/2.jpg";
import three from "/public/images/zoo/3.jpg";
import four from "/public/images/zoo/4.jpg";
import five from "/public/images/zoo/5.png";
import six from "/public/images/zoo/6.png";
import seven from "/public/images/zoo/7.jpg";
import eight from "/public/images/zoo/8.jpg";
import nine from "/public/images/zoo/9.jpg";
import ten from "/public/images/zoo/10.jpg";
import eleven from "/public/images/zoo/11.jpg";
import twelve from "/public/images/zoo/12.jpg";
import thirteen from "/public/images/zoo/13.jpg";
import fourteen from "/public/images/zoo/14.jpg";
import fifteen from "/public/images/zoo/15.jpg";
import sixteen from "/public/images/zoo/16.jpg";
import seventeen from "/public/images/zoo/17.jpg";
import eighteen from "/public/images/zoo/18.jpg";
import nineteen from "/public/images/zoo/19.jpg";
import twenty from "/public/images/zoo/20.jpg";
import twentyOne from "/public/images/zoo/21.jpg";
import twentyTwo from "/public/images/zoo/22.jpg";
import twentyThree from "/public/images/zoo/23.jpg";
import twentyFour from "/public/images/zoo/24.jpg";
import twentyFive from "/public/images/zoo/25.jpg";
import twentySix from "/public/images/zoo/26.jpg";
import twentySeven from "/public/images/zoo/27.jpg";
import twentyEight from "/public/images/zoo/28.jpg";
import twentyNine from "/public/images/zoo/29.jpg";
import thirty from "/public/images/zoo/30.jpg";
import thirtyThree from "/public/images/zoo/33.jpg";
import thirtyFour from "/public/images/zoo/34.jpg";
import thirtyFive from "/public/images/zoo/35.jpg";

import { IconMapPinCode } from "@tabler/icons-react";
import { IconPhoto } from "@tabler/icons-react";

import "../../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const list = [
  one,
  two,
  three,
  thirtyThree,
  thirtyFour,
  thirtyFive,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyOne,
  twentyTwo,
  twentyThree,
  twentyFour,
  twentyFive,
  twentySix,
  twentySeven,
  twentyEight,
  twentyNine,
  thirty,
];

const sam_list = [
  seven,
  eight,
  nine,
  ten,
  eleven,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyOne,
];

const taz_list = [twentySeven, twentyEight];
const tiger_list = [thirtyThree, thirtyFour, thirtyFive];

function ZooHistory() {
  const router = useRouter();
  const [item, setItem] = useState();
  const [showArchive, setShowArchive] = useState(false);
  const [shown, setShown] = useState(false);

  const showBack = item || showArchive;

  const { data } = router.query;

  // Parse the string back to an object
  const el = data ? JSON.parse(data) : null;

  useEffect(() => {
    if (el && !shown) {
      setItem(el);
      setShown(true);
    }
  }, [el, shown]);

  const handleBack = () => {
    if (item) {
      setItem(null);
    }
    if (showArchive) {
      setShowArchive(false);
    }
  };

  const handleNavigation = (item) => {
    router.push({
      pathname: "/zoo-map",
      query: { data: JSON.stringify(item) },
    });
  };

  return (
    <div
      className="zoo-history-wrapper"
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "2rem",
        paddingBottom: "4rem",
        backgroundColor: "#fcfcfc",
        fontFamily: "Oswald",
        backgroundImage: `url(${bg.src}) !important`,
        backgroundRepeat: "repeat",
      }}
    >
      {!item && !showArchive && (
        <div
          style={{
            width: "100vw",
            color: "#020202",
            display: "flex",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <h1
            style={{
              fontFamily: "Indie Flower",
              color: "#222",
              lineHeight: "3.2rem",
              textAlign: "center",
              fontSize: "4.2rem",
              rotate: "-8deg",
              textShadow: "-7px 5px 0px #fff;",
            }}
          >
            Lo Zoo del Parco Michelotti
          </h1>
        </div>
      )}

      {!item &&
        !showArchive &&
        zoo_history.map((item, i) => (
          <HistoryCard
            item={item}
            index={i}
            key={i}
            onReadPress={() => setItem(item)}
            onFindPress={() => handleNavigation(item)}
          />
        ))}
      {item && !showArchive && (
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <h1
            style={{
              fontFamily: "Indie Flower",
              color: "#222",
              lineHeight: "3.2rem",
              textAlign: "center",
              rotate: "-8deg",
              textShadow: "-7px 5px 0px #fff;",
            }}
          >
            {item.name}
          </h1>
          <p
            style={{
              fontFamily: "Syne Mono",
              color: "#222",
              lineHeight: "1.2rem",
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <p
              style={{
                fontFamily: "Syne Mono",
                color: "gray",
                lineHeight: "1.2rem",
                textAlign: "center",
              }}
            >
              Capitolo{" "}
              {`${zoo_history.findIndex((el) => el.id === item.id) + 1}`}
            </p>
            {item.content}
          </p>
          {item.id === 7 &&
            tiger_list.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Image src={item} />
              </div>
            ))}
          {item.id === 8 &&
            taz_list.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Image src={item} />
              </div>
            ))}
          {item.id === 3 &&
            sam_list.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Image src={item} />
              </div>
            ))}
          {item.id === 3 &&
            sam_list.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Image src={item} />
              </div>
            ))}
          {item.id === 9 && (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "auto",
              }}
            >
              <Image src={twentyNine} />
            </div>
          )}
        </div>
      )}
      {!item && showArchive && (
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
          }}
        >
          <h1
            style={{
              fontFamily: "Indie Flower",
              color: "#222",
              lineHeight: "3.2rem",
              textAlign: "center",
            }}
          >
            {"L'archivio fotografico"}
          </h1>
          {list.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Image src={item} />
              </div>
              <p
                style={{
                  fontFamily: "Syne Mono",
                  color: "gray",
                  lineHeight: "1.2rem",
                }}
              >
                {/* {captions[i]} */}
              </p>
            </div>
          ))}
        </div>
      )}
      {!item && !showArchive && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100vw",
            backgroundColor: "white",
            color: "#020202",
            display: "flex",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <Button
            onClick={() => router.push("/zoo-map")}
            variant="contained"
            startIcon={<IconMapPinCode />}
          >
            Vai alla Mappa
          </Button>
          <Button
            startIcon={<IconPhoto />}
            variant="outlined"
            size="small"
            onClick={() => setShowArchive(true)}
          >
            {"Archivio fotografico"}
          </Button>
        </div>
      )}
      {showBack && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            backgroundColor: "white",
            padding: 10,
            width: "100vw",
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setItem(null)}
        >
          <IconArrowLeft
            onClick={() => handleBack()}
            stroke={2}
            color="black"
            size={30}
          />
          <span
            style={{
              fontFamily: "Indie Flower",
              color: "#222",
              lineHeight: "1.2rem",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            Torna indietro
          </span>
        </div>
      )}
    </div>
  );
}

export default ZooHistory;
