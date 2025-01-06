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
    margin: "10px",
    width: "100%",
    maxWidth: "480px",
    height: "auto",
    position: "absolute",
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "20",
    boxSizing: "border-box",
    overflow: "hidden",
    "@media (max-width: 600px)": {
      width: "90%",
    },
  },
  formTitle: {
    textTransform: "uppercase",
    color: BASIC_WHITE,
    fontSize: "26px",
    fontWeight: "bold",
  },
  formInput: {
    backgroundColor: BASIC_WHITE,
    borderRadius: "5px",
    "& .MuiInputBase-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "10px",
      color: BASIC_BLACK,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
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
    alignItems: "center",
    borderBottom: `1px solid ${BASIC_GRAY}`,
  },
  taskTextUnComplete: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginLeft: "15px",
    color: BASIC_BLACK,
    cursor: "pointer",
    "&:hover": {
      color: HOVER_BLUE,
      fontWeight: "bold",
    },
  },
  taskTextComplete: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginLeft: "15px",
    textDecoration: "line-through",
    color: BASIC_GRAY,
    cursor: "pointer",
  },
  navigationText: {
    padding: "5px",
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
    margin: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconWrapper: {
    cursor: "pointer",
  },
};
