import { Grid2, Box, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import { style } from "./MainPage.styled.ts";
import { ITaskData } from "./interface.tsx";
import { ulid } from "ulid";
import Icon from "@mdi/react";
import { mdiCheckboxBlankCircleOutline } from "@mdi/js";
import { mdiCheckCircle } from "@mdi/js";

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
      setTaskValue("");
    }
  };

  const toggleIsComplete = (id) => {
    setTaskData((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

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
          <Grid2 container sx={style.taskList}>
            <Grid2>
              <Grid2
                container
                direction="column"
                sx={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {taskData.map((task) => (
                  <Grid2 key={task.id} container sx={{ cursor: "pointer" }}>
                    <Grid2 onClick={() => toggleIsComplete(task.id)}>
                      <Icon
                        path={
                          task.isComplete
                            ? mdiCheckCircle
                            : mdiCheckboxBlankCircleOutline
                        }
                        size={1}
                      />
                    </Grid2>
                    <Grid2>
                      <Typography>{task.value}</Typography>
                    </Grid2>
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
            <Grid2></Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </Grid2>
  );
};
