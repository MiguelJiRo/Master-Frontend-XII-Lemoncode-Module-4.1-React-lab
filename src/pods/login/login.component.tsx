import React from "react";
import "./login.styles.scss";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { routes } from '../../core/router/routes';

const themeLight = createTheme({
    palette: {
        background: {
            default: "#e5dde6"
        }
    }
});


const themeDark = createTheme({
    palette: {
        background: {
            default: "#8f7193"
        },
        text: {
            primary: "#000"
        }
    }
});

export const LoginComponent = () => {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [light, setLight] = React.useState(true);

    const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username === "admin" && password === "admin") {
            navigate(routes.memberList);
        } else {
            alert("User / password not valid, psst... admin / admin");
        }
    };

    return (
        <ThemeProvider theme={light ? themeLight : themeDark}>
            <CssBaseline />
            <Card className="loginCard">
                <div className="loginHeaderContainer">
                    <CardHeader className="loginCardHeader" title="Module 4.1 React" />
                    <IconButton color="primary" component="label" onClick={() => setLight((prev) => !prev)}>
                        <LightbulbIcon />
                    </IconButton>
                </div>
                <CardContent className="loginCardContent">
                    <form onSubmit={handleNavigation}>
                        <div className="loginCardContent">
                            <TextField label="Username" value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                            <TextField label="Password" type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <FormControlLabel control={
                                <Checkbox defaultChecked />
                            } label="Keep me logged in" />
                            <Button variant="outlined" type="submit" endIcon={<LoginIcon />}>Login</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}