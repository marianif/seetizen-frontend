import axios from "axios";
const GOOGLE_PLACES_API = process.env.GOOGLE_PLACES_API;

export default async function (req, res) {
  const { place, sessionToken } = req.query;
  const config = {
    headers: { "Access-Control-Allow-Origin": "*" },
    method: "get",
    url: `https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyC6rY5Tc1ED5krXQ_pyhcdd9qVZGM0rcNs`,
  };
  const { data } = await axios(config);

  res.status(200).json(data);
  console.log(data);
}
// export default async function (req, res) {
//   const { place, sessionToken } = req.query;
//   const config = {
//     headers: { "Access-Control-Allow-Origin": "*" },
//     method: "get",
//     url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_PLACES_API}&sessionToken=${sessionToken}&input=${place}&types=address&components=country:it&language=it`,
//   };
//   const { data } = await axios(config);

//   res.status(200).json(data);
// }
