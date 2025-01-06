import {
  BASIC_BLACK,
  BASIC_GRAY,
  BASIC_PURPLE,
  BASIC_WHITE,
  DANGEROUS_RED,
  HOVER_BLUE,
} from "../../config/constants/constants.ts";

export const style = {
  headerFon: {
    backgroundColor: BASIC_PURPLE,
    width: "100%",
    height: "200px",
  },
  formWrapper: {
    margin: "10px 10px 10px 10px",
    width: "100%",
    maxWidth: "500px",
    height: "100%",
    position: "absolute",
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "20",
  },
  formTitle: {
    textTransform: "uppercase",
    color: BASIC_WHITE,
    fontSize: "26px",
    fontWeight: "bold",
  },
  formInput: {
    minWidth: "300px",
    backgroundColor: BASIC_WHITE,
    borderRadius: "15px",
    "& .MuiInputBase-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      color: BASIC_BLACK,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
  },
  taskList: {
    padding: "5px 0px 5px 0px",
    backgroundColor: BASIC_WHITE,
    width: "100%",
    borderRadius: "5px",
    overFlow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  infoText: {
    width: "100%",
    padding: "20px 5px 20px 5px",
    textAlign: "center",
  },
  taskItem: {
    width: "100%",
    padding: "20px 10px 20px 10px",
    cursor: "pointer",
    alignItems: "center",
    borderBottom: `1px solid ${BASIC_GRAY}`,
  },
  taskTextUnComplete: {
    marginLeft: "15px",
    color: BASIC_BLACK,
    "&:hover": {
      color: HOVER_BLUE,
      fontWeight: "bold",
    },
  },
  taskTextComplete: {
    marginLeft: "15px",
    textDecoration: "line-through",
    color: BASIC_GRAY,
  },
  navigationText: {
    padding: "5px 5px 5px 5px",
    fontSize: "14px",
    color: BASIC_GRAY,
    cursor: "pointer",
    "&:hover": {
      color: HOVER_BLUE,
      fontWeight: "bold",
    },
  },
  navigationDeleteHover: {
    "&:hover": {
      color: DANGEROUS_RED,
      fontWeight: "bold",
    },
  },
  navigationWrapper: {
    margin: "10px 10px 10px 10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
