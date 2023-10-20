import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import bg from "/public/images/bg-michelotti.jpeg";

export default function HistoryCard({ item, onReadPress, onFindPress, index }) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 6 }}>
      <CardContent>
        <Typography
          style={{
            fontFamily: "Syne Mono",
            marginBottom: 10,
          }}
          variant="body2"
          color="text.secondary"
        >
          Capitolo {index + 1}
        </Typography>
        <Typography
          style={{
            fontFamily: "Indie Flower",
            fontWeight: "bold",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.name}
        </Typography>
        <Typography
          style={{
            fontFamily: "Syne Mono",
          }}
          fontWeight="bold"
          variant="body2"
          color="text.secondary"
        >
          {item.content.slice(0, 150)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={onReadPress}>
          Leggi la storia
        </Button>
        <Button size="small" variant="outlined" onClick={onFindPress}>
          Scopri nel parco
        </Button>
      </CardActions>
    </Card>
  );
}
