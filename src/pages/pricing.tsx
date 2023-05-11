import { Box, Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import React from "react";

enum Options {
  beds = 'Beds',
  baths = 'Baths',
  pets = 'Pets',
  consultation = "Consultation",
  tidyUp = "Tidy-up",
  deepCleans = 'Deep Clean',
  cabinets = "Cabinets",
  fridge = "Fridge",
  oven = "Oven",
  moving = "Move-in/out",
}

const defaults = {
  [Options.beds]: 0,
  [Options.baths]: 0,
  [Options.pets]: 0,
  [Options.tidyUp]: 0,
  [Options.deepCleans]: 0,
  [Options.consultation]: true,
  [Options.cabinets]: false,
  [Options.fridge]: false,
  [Options.oven]: false,
  [Options.moving]: false
}

export function Pricing() {
  const [options, setOptions] = React.useState(defaults);

  return <Box sx={{ width: '100%' }}>
    <Box sx={{ overflow: 'auto' }}>
      <Grid container gap={1} justifyContent={"center"} >
        {
          Object.entries(options).map(([k, v]) => {
            if (typeof v === "number")
              return <Grid key={k} item padding={1} >
                <TextField
                  id={k}
                  label={k}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={v.toString()}
                  onChange={(evt) => {
                    let newVal = parseInt(evt.target.value, 10);
                    if(!newVal)
                      newVal = 0;
                    const newOptions = {...options}
                    console.log(newVal)
                    // @ts-ignore
                    newOptions[k] = newVal;
                    setOptions(newOptions);
                  }}
                />
              </Grid>
          })
        }
      </Grid>
      <Grid container gap={1} justifyContent={"center"} >
        {
          Object.entries(options).map(([k, v]) => {
            if (typeof v === "boolean")
              return <Grid key={k} item padding={1}>
                <FormControlLabel
                  control={
                    <Checkbox name={k} value={v} onChange={(newVal) => {
                      const newOptions = { ...options }
                      // @ts-ignore
                      newOptions[k] = newVal.currentTarget.checked;
                    }} />
                  }
                  label={k}
                />
              </Grid>
          })
        }
      </Grid>
    </Box>
  </Box>
}