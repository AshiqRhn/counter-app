import {
  Box,
  Button,
  Container,
  Grid, Input, Stack,
  TextField,
  Typography
} from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";


const Home: NextPage = () => {
  const [countOne, setCountOne] = useState(0);
  const [playerOne, setPlayerOne] = useState(""); 
  const [countTwo, setCountTwo] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(""); 

  return (
    <div
      style={{ backgroundColor: "#0abef0", maxWidth: "100%", height: "100vh" }}
    >
      <Typography variant="h3" align="center" paddingTop={4} color="white">
        Team Scores
      </Typography>
      <Container
        maxWidth="lg"
        sx={{ height: "50vh", paddingTop: "30px", display: "flex" }}
      >
        <Grid container spacing={2} marginTop="10">
          <Grid item xs={12} md={6} lg={6}>
            <Box
              sx={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                borderRadius: "7px",
                elevation: "3",
                color: "#3685d9",
                marginBottom: "20px",
              }}
            >
              <Stack sx={{ alignItems: "center" }}>
                <Typography variant="h3" marginBottom={5} marginTop={5}>
                  Wayland Thunder
                </Typography>
                <Typography variant="h4" marginBottom={2}>
                  Player : {playerOne}
                </Typography>

                <Typography variant="h4" marginBottom={5}>
                  Score : 
                  <Button
                    variant="outlined"
                    sx={{ m: 3 }}
                    onClick={() => setCountOne(countOne - 1)}
                  >
                    {" "}
                    -{" "}
                  </Button>
                  <b>{countOne}</b>
                  <Button
                    variant="outlined"
                    sx={{ m: 3 }}
                    onClick={() => setCountOne(countOne + 1)}
                  >
                    {" "}
                    +{" "}
                  </Button>
                </Typography>

                <div style={{ marginBottom: "30px" }}>
                  <Input 
                    placeholder="Enter Player's Name"                    
                    type="text"                                
                    onChange={e=> setPlayerOne(e.target.value)}                   
                  />               
                </div>
              </Stack>
            </Box>
          </Grid>


          <Grid item xs={12} md={6} lg={6}>
            <Box
              sx={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                borderRadius: "7px",
                elevation: "3",
                color: "#3685d9",
                marginBottom: "20px",
              }}
            >
              <Stack sx={{ alignItems: "center" }}>
                <Typography variant="h3" marginBottom={5} marginTop={5}>
                  Hamilton Hunters
                </Typography>
                <Typography variant="h4" marginBottom={2}>
                  Player : {playerTwo}
                </Typography>

                <Typography variant="h4" marginBottom={5}>
                  Score : 
                  <Button
                    variant="outlined"
                    sx={{ m: 3 }}
                    onClick={() => setCountTwo(countTwo - 1)}
                  >
                    {" "}
                    -{" "}
                  </Button>
                  <b>{countTwo}</b>
                  <Button
                    variant="outlined"
                    sx={{ m: 3 }}
                    onClick={() => setCountTwo(countTwo + 1)}
                  >
                    {" "}
                    +{" "}
                  </Button>
                </Typography>

                <div style={{ marginBottom: "30px" }}>
                <Input 
                    placeholder="Enter Player's Name"                    
                    type="text"                                
                    onChange={e=> setPlayerTwo(e.target.value)}                   
                  />                
                </div>
              </Stack>
            </Box>
          </Grid>
















          {/* <Grid item xs={12} md={6} lg={6}>
            <Box
              sx={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                borderRadius: "7px",
                color: "#3685d9",
              }}
            >
              <Stack sx={{ alignItems: "center" }}>
                <Typography variant="h3" marginBottom={5} marginTop={5}>
                  Granville Hunters
                </Typography>
                <Typography variant="h4" marginBottom={2}>
                  Player :
                </Typography>
                <Typography variant="h4" marginBottom={5}>
                  Score :
                  <Button variant="outlined" sx={{ m: 3 }}>
                    {" "}
                    -{" "}
                  </Button>{" "}
                  0{" "}
                  <Button variant="outlined" sx={{ m: 3 }}>
                    {" "}
                    +{" "}
                  </Button>
                </Typography>
                <div style={{ marginBottom: "30px" }}>
                  <Input
                    id="outlined-basic"
                    label="Enter Player's Name"
                    variant="outlined"                   
                  />
                  <Button
                    size="large"
                    variant="outlined"
                    sx={{ padding: "14px" }}                    
                  >
                    Enter
                  </Button>
                </div>
              </Stack>
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
