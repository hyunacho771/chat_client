//login.js

import React, { useState } from "react";
import "./login.css";
import { useStateValue } from "./StateProvider.js";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Snackbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Input } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import { InputAdornment } from "@material-ui/core";
import { auth } from "./firebase.js";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const signIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/chat");
    } catch (error) {
      setError(error.message);
      setOpen(true);
    }
  };

  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const register = async (e) => {
    e.preventDefault();
    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            history.push("/chat");
          }
        });
    } catch (error) {
      setError(error.message);
      setOpen(true);
    }
  };

  return (
    <div className="login">
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email and password.
            </FormHelperText>
          </FormControl>
        </form>
        <Button type="submit" onClick={signIn}>
          Sign In
        </Button>
        <p>
          By signing-in you agree to the WHATSAPP CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Button type="submit" onClick={register}>
          Create your WhatsApp Account
        </Button>
      </div>
    </div>
  );
}

export default Login;
