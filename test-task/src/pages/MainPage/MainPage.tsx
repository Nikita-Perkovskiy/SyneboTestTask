import { Grid2, Box, Typography, TextField, FormControl } from "@mui/material";
import React, { useState } from "react";
import { style } from "./MainPage.styled.ts";
import { ITaskData } from "./interface.tsx";
import { ulid } from "ulid";

export const MainPage = () => {
  const [taskValue, setTaskValue] = useState("");
  const [taskData, setTaskData] = useState<ITaskData[]>([]);

  const handelTaskValue = (value) => {
    setTaskValue(value);
  };

  const handelTaskData = (e) => {
    if (e.key === "Enter") {
      const newTask: ITaskData = {
        id: ulid(),
        value: taskValue,
        isComplete: false,
      };
      setTaskData((prevTasks) => [...prevTasks, newTask]);
    }
  };

  console.log(taskData);

  return (
    <Grid2 container>
      <Grid2 sx={style.headerFon} size={12}></Grid2>
      <Box sx={style.formWrapper}>
        <Grid2 container direction="column" spacing={3}>
          <Grid2>
            <Typography sx={style.formTitle}>TODO</Typography>
          </Grid2>
          <Grid2>
            <TextField
              type="search"
              value={taskValue}
              placeholder="Create new to do"
              onChange={(e) => handelTaskValue(e.target.value)}
              sx={style.formInput}
              onKeyDown={handelTaskData}
            />
          </Grid2>
          <Grid2></Grid2>
        </Grid2>
      </Box>
    </Grid2>
  );
};
