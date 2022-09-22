import axios from "axios";

const GOOGLE_PLACES_API = process.env.GOOGLE_PLACES_API;

export default async function (req, res) {
  const { sessionToken, placeId } = req.query;
  let config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/details/json?key=${GOOGLE_PLACES_API}&sessionToken=${sessionToken}&place_id=${placeId}&fields=name,geometry`,
  };

  const { data } = await axios(config);

  res.status(200).json(data);
}
