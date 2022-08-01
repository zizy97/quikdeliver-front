import { TextField } from "@mui/material";
import React from "react";
import ReactGoogleAutocomplete, {
  usePlacesWidget,
} from "react-google-autocomplete";

export default function Test() {
  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey: "AIzaSyBpda2wKD2u7JS8cJoNKzLCxuKGjbTGOvs",
    onPlaceSelected: (place) => {
      console.log(place);
    },
  });
  return (
    <div>
      <ReactGoogleAutocomplete
        apiKey="AIzaSyBpda2wKD2u7JS8cJoNKzLCxuKGjbTGOvs"
        onPlaceSelected={(place) => console.log(place)}
      />
      <TextField label="City" inputRef={ref} type="text" />
    </div>
  );
}
