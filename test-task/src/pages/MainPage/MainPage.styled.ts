import { BASIC_PURPLE } from "../../config/constants/constants.ts";

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
    color: "white",
    fontSize: "26px",
    fontWeight: "bold",
  },
  formInput: {
    minWidth: "300px",
    backgroundColor: "white",
    borderRadius: "15px",
    "& .MuiInputBase-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      color: "black",
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
};
