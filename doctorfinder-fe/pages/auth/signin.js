import { connect } from "react-redux";
import { authErr } from "../../src/actions/auth.actions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { login } from "../../src/actions/auth.actions";
import withAuth from "../../components/hoc/auth.hoc";
import { withTranslation } from "../../i18n";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "../../components/common/default/Snackbar";
import Loading from "../../components/common/default/Loading";
import { FormControlLabel } from "@material-ui/core";
import Router from "next/router";

const useStyles = theme => ({
  containerWrapper: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  left: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url(/static/images/authentic.png)",
    backgroundSize: "cover"
  },
  logoTitle: {
    fontWeight: "Bold",
    color: "#232241",
    fontSize: 30,
    lineHeight: "17px",
    fontFamily: "Orbitron",
    color: "#1D3F4C",
    textAlign: "center",
    marginTop: theme.spacing(1.5),
    "&:hover":{
      cursor: "pointer"
    }
  },
  signInDescription: {
    fontSize: 15,
    lineHeight: "12px",
    color: "#00363A",
    opacity: 1,
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(4),
    textAlign: "center",
    fontFamily: "Roboto Slab"
  },
  textFieldInput: {
    width: "100%",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    "& .MuiFormHelperText-contained, .MuiFormHelperText-root": {
      marginTop: 0
    }
  },
  checkboxLabel: {
    color: "#000000",
    fontFamily: "Roboto Slab",
    fontSize: 14,
    lineHeight: "18px",
  },
  forgotPass: {
    textDecoration: "None",
    color: "#006064",
    fontSize: 14,
    lineHeight: "18px",
    fontFamily: "Roboto Slab"
  },
  input: {
    padding: "10px 14px",
    fontSize: 16,
    fontFamily: "Roboto Slab"
  },
  btnInput: {
    width: "100%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2)
  },
  formControl: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0)
  },
  signup: {
    textDecoration: "None",
    color: "#3163C1",
    fontSize: 10,
    lineHeight: "17px",
    fontFamily: "Roboto Slab"
  }
});

const initialState = {
  email: "",
  emailError: false,
  password: "",
  passwordError: false,
  openSnackbar: false
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: false,
      password: "",
      passwordError: false,
      openSnackbar: false
    };
    this.lang = this.props.t;
  }

  static async getInitialProps() {
    return {
      namespacesRequired: ["sign-in"]
    };
  }
  validate = () => {
    let emailError = "";
    let passwordError = "";

    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(this.state.email).toLowerCase())) {
      emailError = true;
    }

    if (this.state.password.length < 1) {
      passwordError = true;
    }

    if (emailError || passwordError) {
      this.setState({
        emailError,
        passwordError
      });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    const { dispatch } = this.props;
    if (isValid) {
      this.setState(initialState);
      try {
        dispatch(login(this.state, this.props.socket));
      } catch (err) {
        console.log(err);
      }
    }
  };

  handleNavigate = () => {
    Router.push('/');
  };

  render() {
    const { classes, sidebar } = this.props;

    return (
      <Grid container direction="row">
        <Grid
          data-cy="picture"
          item
          xs={true}
          sm={4}
          md={6}
          className={classes.left}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          container
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid 
            container direction="column" 
            item xs={10} sm={8} md={8}
            className={classes.containerWrapper}
            >
            <label data-cy="title" className={classes.logoTitle} onClick={this.handleNavigate}>
              EZ TEAM
            </label>
            <label data-cy="page-title" className={classes.signInDescription}>
              {this.lang("title")}
            </label>
            <form
              noValidate
              onSubmit={this.handleSubmit}
            >
              <TextField
                name="email"
                id="email"
                placeholder="Email*"
                color="primary"
                variant="outlined"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                classes={{ root: classes.textFieldInput }}
                InputProps={{ classes: { input: classes["input"] } }}
                error={this.state.emailError}
                helperText={
                  this.state.emailError ? this.lang("email-Error") : " "
                }
              />
              <TextField
                id="password"
                name="password"
                color="primary"
                placeholder={this.lang("password")}
                variant="outlined"
                classes={{ root: classes.textFieldInput }}
                InputProps={{ classes: { input: classes["input"] } }}
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                error={this.state.passwordError}
                helperText={
                  this.state.passwordError ? this.lang("password-Error") : " "
                }
              />
              <Grid container direction="row" className={classes.formControl}>
                <Grid container direction="row" item xs={6}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label={
                      <label className={classes.checkboxLabel}>
                        {this.lang("remember-Me")}
                      </label>
                    }
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="flex-end"
                  item
                  xs={6}
                >
                  <Link href="/">
                    <a className={classes.forgotPass}>
                      {this.lang("forgot-Password")}
                    </a>
                  </Link>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                className={classes.btnInput}
                type="submit"
              >
                <a>{this.lang("button-Signin")}</a>
              </Button>
            </form>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <label className={classes.signup} style={{color: "#006064"}}>
                {this.lang("no-Account")}
              </label>
              &nbsp;
              <Link href="./signup">
                <a data-cy="link-to-signup" className={classes.signup}>{this.lang("link-Signup") }</a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar
          message={this.lang("errorMessage")}
          variant="error"
          open={this.props.auth.isShowLoginErr}
          onClose={() => this.props.dispatch(authErr(false))}
        />
        <Loading isLoading={sidebar.isLoading} />
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const { auth, sidebar } = state;
  return { auth, sidebar };
}

export default connect(mapStateToProps)(
  withStyles(useStyles)(withTranslation("sign-in")(withAuth(SignIn)))
);
