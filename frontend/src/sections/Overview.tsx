import React, { useEffect } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel, MenuItem, TextField, Grid } from "@mui/material";
import { CivForm, Ethnicity } from "../types";
import "./Overview.css";

export default function Overview({
  data,
  updateData,
}: {
  data: CivForm;
  updateData: React.Dispatch<React.SetStateAction<CivForm>>;
}) {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    updateData((prevData) => ({
      ...prevData,
      overview: {
        ...prevData.overview,
        [name]: value,
      },
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    updateData((prevData) => ({
      ...prevData,
      overview: {
        ...prevData.overview,
        ethnicity: event.target.value as Ethnicity,
      },
    }));
  };

  return (
    <div id="form-layout">
      <img
        alt="yongle"
        src="https://static.wikia.nocookie.net/civilization/images/5/5a/Yongle_%28Civ6%29.png"
      />
      <Grid container spacing={2} rowGap={0} width="40%">
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            name="name"
            variant="filled"
            placeholder="Name (e.g. Altona)"
            value={data.overview.name || ""}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="adjective"
            variant="filled"
            placeholder="Adjective (e.g. Altonian)"
            value={data.overview.adjective || ""}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            rows={4}
            fullWidth
            name="description"
            placeholder="Description"
            multiline
            variant="filled"
            value={data.overview.description || ""}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="ethnicity-select-lbl">Ethnicity</InputLabel>
          <Select
            fullWidth
            variant="filled"
            name="ethnicity"
            labelId="ethnicity-select-lbl"
            value={data.overview.ethnicity || Ethnicity.African}
            onChange={handleSelectChange}
          >
            <MenuItem value={Ethnicity.African}>African</MenuItem>
            <MenuItem value={Ethnicity.Asian}>Asian</MenuItem>
            <MenuItem value={Ethnicity.European}>European</MenuItem>
            <MenuItem value={Ethnicity.Mediterranean}>Mediterranean</MenuItem>
            <MenuItem value={Ethnicity["South American"]}>
              South American
            </MenuItem>
          </Select>
        </Grid>
      </Grid>
    </div>
  );
}
