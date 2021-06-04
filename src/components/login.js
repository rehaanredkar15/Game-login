import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  form,
  Container,
  Grid,
  Paper,
  Toolbar,
  AppBar,
  Typography,
  Button,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import "./_login.css";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 10,
    alignItems: "flex-start",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },

  // toolbar: theme.mixins.toolbar,
}));
const Login = () => {
  const paperStyle = { height: "70vh", width: 700 };
  const classes = useStyles();
  return (
    <Grid>
      <Paper style={paperStyle}>
        {/* <AppBar color="secondary" className={classes.toolbar}>
          <Typography variant="h3" align="center">
            ENTER DETAILS
          </Typography>
        </AppBar> */}
        {/*  */}
        <Typography variant="h4" align="center" className="toolbar">
          ENTER DETAILS
        </Typography>
        <div className={classes.toolbar}> </div>
        <Container className={classes.container} maxWidth="xs">
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      className="textfield"
                      fullWidth
                      required
                      label="UserName(Must be unique)"
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email ID (Optional)"
                      name="email"
                      size="small"
                      className="textfield"
                      InputLabelProps={{ className: "textfield__outline" }}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox name="checkedB" color="secondary" />}
                label="I confirm that I am atleast 18 years of age"
              />
              <FormControlLabel
                control={<Checkbox name="checkedB" color="secondary" />}
                label="I confirm terms of use and privacy policy"
              />
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="I am not a resident of Assam,Odisha, Andra Pradesh,Telangana,
              Tamil Nadu ,Nagaland or Sikkim"
              />
              <div className={classes.textfield}> </div>
              <Grid item xs={12}>
                <Button
                  className="textfield"
                  color="secondary"
                  type="submit"
                  variant="contained"
                  InputLabelProps={{ className: "textfield__outline" }}
                >
                  Let Me Play
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </Grid>
  );
};

export default Login;
