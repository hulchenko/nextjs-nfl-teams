import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box sx={{ flexGrow: 1, position: "absolute", bottom: 0, width: "100%", textAlign: "center" }}>
      <AppBar position="static" sx={{ background: "var(--sport)" }}>
        <Toolbar>
          <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
            {year}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
