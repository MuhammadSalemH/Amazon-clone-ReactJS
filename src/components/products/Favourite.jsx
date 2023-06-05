import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function Favourite() {
  const [value, setValue] = useState(
    Math.floor(Math.random() * (5 - 1 + 1)) + 1
  );

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Stack direction={"row"} gap={"5px"}>
        <Typography>{`${value || 0}.${
          value < 5 && value > 0
            ? Math.floor(Math.random() * (9 - 1 + 1)) + 1
            : 0
        }`}</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Stack>
    </Box>
  );
}
