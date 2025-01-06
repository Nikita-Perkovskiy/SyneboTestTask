import { Grid2, Box, Typography, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { style } from "./MainPage.styled.ts";
import { ITaskData } from "./interface.tsx";
import { ulid } from "ulid";
import Icon from "@mdi/react";
import { mdiCheckboxBlankCircleOutline } from "@mdi/js";
import { mdiCheckCircle } from "@mdi/js";

export const MainPage = () => {
  const [taskValue, setTaskValue] = useState<string>("");
  const [taskData, setTaskData] = useState<ITaskData[]>([]);
  const [taskList, setTaskList] = useState<ITaskData[]>([]);
  const [unCompletedCount, setUnCompletedCount] = useState<number>(0);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    if (taskData) {
      const unCompletedTasksCount = taskData.filter(
        (task) => task.isComplete === false
      ).length;
      setUnCompletedCount(unCompletedTasksCount);
    }
    switch (filter) {
      case "all":
        setTaskList(taskData);
        break;
      case "completed":
        setTaskList(taskData.filter((task) => task.isComplete === true));
        break;
      case "uncompleted":
        setTaskList(taskData.filter((task) => task.isComplete === false));
        break;
      default:
        setTaskList(taskData);
        break;
    }
  }, [taskData, filter]);

  const handelTaskValue = (value) => {
    setTaskValue(value);
  };

  const handelCompleteTasks = () => setFilter("completed");
  const handelUnCompleteTasks = () => setFilter("uncompleted");
  const handelAllTasks = () => setFilter("all");
  const handelCleanTaskData = () => {
    const unCompletedTasks = taskData.filter(
      (task) => task.isComplete === false
    );
    setTaskData(unCompletedTasks);
    setFilter("all");
  };

  const handelTaskData = (e) => {
    if (e.key === "Enter") {
      const newTask: ITaskData = {
        id: ulid(),
        value: taskValue,
        isComplete: false,
      };
      setTaskData((prevTasks) => [...prevTasks, newTask]);
      setFilter("all");
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
          <Grid2 container direction="column" spacing={0} sx={style.taskList}>
            <Grid2
              container
              sx={{
                width: "100%",
              }}
            >
              <Grid2
                container
                direction="column"
                sx={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {taskList.length ? (
                  taskList.map((task) => (
                    <Grid2
                      key={task.id}
                      container
                      sx={style.taskItem}
                      onClick={() => toggleIsComplete(task.id)}
                    >
                      <Icon
                        path={
                          task.isComplete
                            ? mdiCheckCircle
                            : mdiCheckboxBlankCircleOutline
                        }
                        size={1}
                      />
                      <Typography
                        sx={
                          task.isComplete
                            ? style.taskTextComplete
                            : style.taskTextUnComplete
                        }
                      >
                        {task.value}
                      </Typography>
                    </Grid2>
                  ))
                ) : (
                  <Grid2 container>
                    <Grid2>
                      <Typography sx={style.infoText}>
                        There are no tasks
                      </Typography>
                    </Grid2>
                  </Grid2>
                )}
              </Grid2>
            </Grid2>
            <Grid2 container direction="row" sx={style.navigationWrapper}>
              <Grid2>
                <Typography sx={style.navigationText}>
                  {unCompletedCount} items left
                </Typography>
              </Grid2>
              <Grid2 container>
                <Typography
                  sx={style.navigationText}
                  onClick={() => {
                    handelAllTasks();
                  }}
                >
                  All
                </Typography>
                <Typography
                  sx={style.navigationText}
                  onClick={() => {
                    handelUnCompleteTasks();
                  }}
                >
                  Active
                </Typography>
                <Typography
                  sx={style.navigationText}
                  onClick={() => {
                    handelCompleteTasks();
                  }}
                >
                  Completed
                </Typography>
              </Grid2>
              <Grid2>
                <Typography
                  sx={{
                    ...style.navigationText,
                    ...style.navigationDeleteHover,
                  }}
                  onClick={() => {
                    handelCleanTaskData();
                  }}
                >
                  Clear completed
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
    </Grid2>
  );
};
