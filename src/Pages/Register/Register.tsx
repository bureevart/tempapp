import { Box, Typography, TextField, Button, Grid, Link} from "@mui/material";
import { useDispatch } from 'react-redux';
import { UserActions } from "../../redux";

const Register = (props: any) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    //   const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    //     setEmail(event.target.value);
    //   };
    //   const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    //     setPassword(event.target.value);
    //   };
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
        var email = data.get('email');
        var password = data.get('password');
    
        let psw: string = data.get('password') as string;
        let addrs: string = data.get('email') as string;
    
        console.log({ emailRead: addrs, passwordRead: psw});

        dispatch({ type: UserActions.userRegister, payload: { email, password, isAuthenticated:false } }); // использование функции dispatch для отправки действия userRegister

      };

    return (
        <Box sx={{my: 8,mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h1" variant="h5">Регистрация</Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                <TextField margin="normal" required fullWidth id="email" label="Адрес электронной почты" name="email" autoComplete="email" autoFocus/>
                <TextField margin="normal" required fullWidth name="password" label="Пароль" type="password" id="password" autoComplete="current-password"/>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color="secondary">Войти</Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href='/login' variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
    
};

export default Register