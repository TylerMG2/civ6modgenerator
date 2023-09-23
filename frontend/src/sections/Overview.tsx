import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel, MenuItem, TextField } from "@mui/material";

enum Ethnicity {
  "African" = "ETHNICITY_AFRICAN",
  "Asian" = "ETHNICITY_ASIAN",
  "European" = "ETHNICITY_EURO",
  "Mediterranean" = "ETHNICITY_MEDIT",
  "South American" = "ETHNICITY_SOUTHAM",
}

interface CivOverview {
  name?: string;
  description?: string;
  adjective?: string;
  ethnicity?: Ethnicity;
}

export default function Overview() {
  const [civOverview, setCivOverview] = React.useState<CivOverview>({});

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCivOverview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setCivOverview((prevState) => ({
      ...prevState,
      ethnicity: event.target.value as Ethnicity,
    }));
  };

  return (
    <div id="form-grid">
      <TextField
        name="name"
        placeholder="Name (e.g. Altona)"
        value={civOverview.name || ""}
        onChange={handleInputChange}
      />
      <TextField
        name="description"
        placeholder="Description"
        multiline
        value={civOverview.description || ""}
        onChange={handleInputChange}
      />
      <TextField
        name="adjective"
        placeholder="Adjective (e.g. Altonian)"
        value={civOverview.adjective || ""}
        onChange={handleInputChange}
      />
      <InputLabel id="ethnicity-select-lbl">Ethnicity</InputLabel>
      <Select
        name="ethnicity"
        labelId="ethnicity-select-lbl"
        value={civOverview.ethnicity || ""}
        onChange={handleSelectChange}
      >
        <MenuItem value={Ethnicity.African}>African</MenuItem>
        <MenuItem value={Ethnicity.Asian}>Asian</MenuItem>
        <MenuItem value={Ethnicity.European}>European</MenuItem>
        <MenuItem value={Ethnicity.Mediterranean}>Mediterranean</MenuItem>
        <MenuItem value={Ethnicity["South American"]}>South American</MenuItem>
      </Select>
    </div>
  );
}
