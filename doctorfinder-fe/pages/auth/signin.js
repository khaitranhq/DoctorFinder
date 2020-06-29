import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Router from "next/router";
import { request, LOGIN_API } from "../../src/utils/apiRequest";

const useStyles = theme => ({
    containerWrapper: {
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    },
    left: {
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url(/static/images/authentic.png)",
        backgroundSize: "cover",
    },
    logoTitle: {
        fontWeight: "Bold",
        color: "#232241",
        fontSize: 30,
        lineHeight: "35px",
        fontFamily: "Roboto",
        color: "#1D3F4C",
        textAlign: "center",
        marginBottom: theme.spacing(3),
        "&:hover": {
            cursor: "pointer",
        },
    },
    textFieldInput: {
        width: "100%",
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        "& .MuiFormHelperText-contained, .MuiFormHelperText-root": {
            marginTop: 0,
        },
    },
    input: {
        padding: "10px 14px",
        fontSize: 16,
        fontFamily: "Roboto Slab",
    },
    btnInput: {
        width: "100%",
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(2),
    },
    formControl: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
    },
    signup: {
        textDecoration: "None",
        color: "#3163C1",
        fontSize: 10,
        lineHeight: "17px",
        fontFamily: "Roboto Slab",
    },
});

const initialState = {
    email: "",
    emailError: false,
    password: "",
    passwordError: false,
    openSnackbar: false,
};

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailError: false,
            password: "",
            passwordError: false,
            openSnackbar: false,
        };
    }

    static async getInitialProps() {
        return {
            namespacesRequired: ["sign-in"],
        };
    }
    validate = () => {
        let emailError = false;
        let passwordError = false;

        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (
            !re.test(
                String(this.state.email).toLowerCase().trimLeft().trimRight()
            )
        ) {
            emailError = true;
        }

        if (this.state.password.length < 3) {
            passwordError = true;
        }

        if (emailError || passwordError) {
            this.setState({
                emailError,
                passwordError,
            });
            return false;
        }
        return true;
    };

    handleSubmit = async e => {
        e.preventDefault();
        const isValid = this.validate();
        const { dispatch } = this.props;
        if (isValid) {
            const payload = { ...this.state };
            payload.email = payload.email.trimLeft().trimRight();
            this.setState(initialState);

            try {
                const response = await request(LOGIN_API, "post", {
                    email: this.state.email,
                    password: this.state.password,
                });
                Router.push("/");
            } catch (err) {
                console.error(err);
            }
        }
    };

    handleNavigate = () => {
        Router.push("/");
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
                        container
                        direction="column"
                        item
                        xs={10}
                        sm={8}
                        md={8}
                        className={classes.containerWrapper}
                    >
                        <label
                            data-cy="title"
                            className={classes.logoTitle}
                            onClick={this.handleNavigate}
                        >
                            Welcome to Doctor Finder! 
                            <br /> 
                            Please login
                        </label>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                name="email"
                                id="email"
                                placeholder="Email*"
                                color="primary"
                                variant="outlined"
                                value={this.state.email}
                                onChange={e =>
                                    this.setState({ email: e.target.value })
                                }
                                classes={{ root: classes.textFieldInput }}
                                InputProps={{
                                    classes: { input: classes["input"] },
                                }}
                                error={this.state.emailError}
                                helperText={
                                    this.state.emailError ? "email-Error" : " "
                                }
                            />
                            <TextField
                                id="password"
                                name="password"
                                color="primary"
                                placeholder={"password"}
                                variant="outlined"
                                classes={{ root: classes.textFieldInput }}
                                InputProps={{
                                    classes: { input: classes["input"] },
                                }}
                                type="password"
                                value={this.state.password}
                                onChange={e =>
                                    this.setState({ password: e.target.value })
                                }
                                error={this.state.passwordError}
                                helperText={
                                    this.state.passwordError
                                        ? "password-Error"
                                        : " "
                                }
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.btnInput}
                                type="submit"
                            >
                                <a>ĐĂNG NHẬP</a>
                            </Button>
                        </form>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="center"
                        >
                            <label
                                className={classes.signup}
                                style={{ color: "#006064" }}
                            >
                                Chưa có tài khoản? 
                            </label>
                            &nbsp;
                            <Link href="./signup">
                                <a
                                    data-cy="link-to-signup"
                                    className={classes.signup}
                                >
                                    Đăng kí tại đây
                                </a>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Snackbar
          message={this.lang("errorMessage")}
          variant="error"
          open={this.props.auth.isShowLoginErr}
          onClose={() => this.props.dispatch(authErr(false))}
        /> */}
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    const { auth, sidebar } = state;
    return { auth, sidebar };
}

export default withStyles(useStyles)(SignIn);
