import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_FILM } from "queries/films";

export default function Film() {
  const params = useParams();

  const { loading, data } = useQuery(GET_FILM, {
    variables: { filmId: params.filmId },
  });

  console.log("location", params, loading, data);

  return (
    <div>
      <div>Film</div>
    </div>
  );
}
