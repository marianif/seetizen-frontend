import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import styles from "../../../styles/components/HouseList.module.css";
import Image from "next/image";
import logo from "../../../../public/images/aprile-logo.png";
import { Box } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const HouseCard = ({ house, flow }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "95%", marginBottom: 5, backgroundColor: "#2C2C2C" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p className="p-light p-sm">Affluenza </p>
        <div className={styles.flowContainer}>
          <p className="p-light p-sm">
            {flow === 1
              ? "Spazio Libero"
              : flow === 2
              ? "Si sta affollando"
              : flow === 3 && "Affollato"}
          </p>
          <span
            className={styles.flowCircle}
            style={{
              backgroundColor:
                flow === 1
                  ? "green"
                  : flow === 2
                  ? "yellow"
                  : flow === 3 && "red",
            }}
          />
        </div>
      </Box>
      <CardContent>
        <Box
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 100,
              height: "100%",
              borderRadius: 100,
              overflow: "hidden",
              marginRight: 10,
              backgroundColor: "white",
            }}
          >
            <Image
              src={logo}
              layout="responsive"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <h2 className="text-white">{house.houseName}</h2>
        </Box>
        <p className="p-light p-sm" style={{fontFamily: 'prompt'}}>{house.address}</p>

        <p className="p-light p-sm" >{house.description}</p>

      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent> */}
      </Collapse>
    </Card>
  );
};

export default HouseCard;
