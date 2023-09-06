import { Box, Drawer, Typography, useTheme } from "@mui/material";

export const MenuSuperior: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const Theme = useTheme();
  return (
    <>
      <Drawer anchor="top" variant="permanent" >
        <Box
          sx={{
            background: Theme.palette.primary.main,
            minWidth: "40px",
            minHeight: "10vh",
          }}
        >
          Menu
        </Box>
      </Drawer>
      <Box
        sx={{
          marginLeft: "80px",
          height: "100vh",
        }}
      >
        {children}
      </Box>
    </>
  );
};