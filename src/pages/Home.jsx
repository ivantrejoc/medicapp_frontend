import { Box } from "@mui/material"

const Home = () => {
  return (
    <Box
    sx={{
      flexGrow: 1,
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      maxHeight: { md: "100vh" },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}
  >
    <h1>HOME</h1>
  </Box>
  )
}
export default Home