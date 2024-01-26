import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const Sort = () => {
  const [sortItems, setSortItems] = useState("none");

  const handleChange = (event) => {
    setSortItems(event.target.value);
  };
  return (
    <div>
      <FormControl
        sx={{
          minWidth: 150,
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E77975",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E77975",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            boxShadow: "none",
          },
          "& .MuiSelect-icon": {
            color: "white",
          },
        }}
      >
        <Select
          MenuProps={{
            disableScrollLock: true,
          }}
          labelId="sort-label"
          id="simple-sort"
          value={sortItems}
          label="Sort"
          onChange={handleChange}
          sx={{
            "& .MuiInputBase-input": {
              backgroundColor: "#E77975",
              color: "#fff ",
              overflow: "visible",
            },
          }}
        >
          <MenuItem
            sx={{ "&:hover": { backgroundColor: "#E77975" } }}
            value={"none"}
          >
            Sort
          </MenuItem>
          <MenuItem
            sx={{ "&:hover": { backgroundColor: "rgb(252 165 165)" } }}
            value={"lowHigh"}
          >
            Price: Low-High
          </MenuItem>
          <MenuItem
            sx={{ "&:hover": { backgroundColor: "rgb(252 165 165)" } }}
            value={"highLow"}
          >
            Price: High-Low
          </MenuItem>
          <MenuItem
            sx={{ "&:hover": { backgroundColor: "rgb(252 165 165)" } }}
            value={"alphabet"}
          >
            Alphabetical
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
Sort;
