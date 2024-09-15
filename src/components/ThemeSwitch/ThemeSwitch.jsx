import React, { useContext } from "react";
import Switch from "react-switch";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { ThemeContext } from "../../context/ThemeProvider";

const getStyles = (mode) => ({
  switch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    fontSize: 20,
    paddingLeft: mode === "dark" ? 30 : 10,
  }
});

const ThemeSwitch = () => {
  const { setTheme, mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <Switch
      checked={mode === "light" ? true : false}
      height={20}
      width={50}
      offColor="#FF7043"
      onColor="#202328" 
      checkedIcon={
        <IoMdSunny style={styles.switch} color="white" className="light" />
      }
      
      uncheckedIcon={
        <IoMdMoon style={styles.switch} color="white" className="dark" />
      }
      onChange={setTheme}
     />
  );
};

export default ThemeSwitch;
