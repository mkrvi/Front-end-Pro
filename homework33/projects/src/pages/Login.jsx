import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import FormInput from "../UI/FormInput";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {loginSchema} from "../data/schema";
import {useNavigate} from "react-router-dom";
import {Box, Paper} from "@mui/material";
import {AppContext} from "../Context/Context";
import {updateData} from "../Reducer/reducer";


const Login = () => {
    const [{formData}, dispatch] = useContext(AppContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues:{
            username: formData.username,
            password: formData.password,
        }

    });

    const navigate = useNavigate();

    function onSubmit(data) {
        dispatch(updateData(data))
        navigate('/home');
    }

    return (
        <Box sx={{height:'100vh'}}>
            <Paper sx={{
                width: '400px', position: 'absolute', top: '50%',
                left: '50%', padding: '40px', transform: 'translate(-50%, -50%)',
                borderRadius: '12px'
            }}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login Form</h2>
                    <FormInput
                        label="Username"
                        {...register('username')}
                        type="text"
                    />
                    <p>{errors.username?.message}</p>
                    <FormInput
                        label="Password"
                        {...register('password')}
                        type="password"
                        sx={{mb: 3}}
                    />
                    <p>{errors.password?.message}</p>
                    <Button variant="contained" sx={{backgroundColor:'#00ffff', color: '#25282B'}} type="submit">
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;
