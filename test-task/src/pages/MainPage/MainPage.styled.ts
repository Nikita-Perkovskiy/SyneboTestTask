import {
  BASIC_BLACK,
  BASIC_PURPLE,
  BASIC_WHITE,
} from "../../config/constants/constants.ts";

export const style = {
  headerFon: {
    backgroundColor: BASIC_PURPLE,
    width: "100%",
    height: "200px",
  },
  formWrapper: {
    margin: "10px 10px 10px 10px",
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
    padding: "5px 5px 5px 5px",
    backgroundColor: BASIC_WHITE,
    width: "100%",
    borderRadius: "5px",
    overFlow: "hidden",
  },
};
