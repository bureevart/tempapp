import { Component } from "react";
import {Button, TextField, Typography, Box} from "@mui/material";
import { useDispatch } from "react-redux";
import { UserActions } from "../../redux";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password')
        });
    
        let password: string = data.get('password') as string;
        let email: string = data.get('email') as string;

    
        console.log({ emailRead: email, passwordRead: password });
        dispatch({ type: UserActions.userAuth, payload: { email, password } }); // использование функции dispatch для отправки действия userRegister
        navigate('/main');
      };

    return (
        <Box sx={{my: 8,mx: 4,display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h1" variant="h5">Вход</Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                <TextField margin="normal" required fullWidth id="email" label="Адрес электронной почты" name="email" autoComplete="email" autoFocus/>
                <TextField margin="normal" required fullWidth name="password" label="Пароль" type="password" id="password" autoComplete="current-password"/>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color="secondary">Войти</Button>
            </Box>
        </Box>
    );
    
};

export default Login