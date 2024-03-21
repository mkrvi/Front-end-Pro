import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from './UI/Input';
import {registerSchema} from "../../data/schema";
import {useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {updateData} from "../../reducers/formReducer";

const RegisterForm = () => {
    const dispatch = useDispatch()
    const {firstNames} = useSelector(state=> state.formData)
    const {lastNames} = useSelector(state=> state.formData)
    const {emails} = useSelector(state=> state.formData)
    const {passwords} = useSelector(state=> state.formData)
    const {usernames} = useSelector(state => state.formData)
    const {passwordConfirmations} = useSelector(state => state.formData)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues:{
            username: usernames,
            password: passwords,
            passwordConfirmation: passwordConfirmations,
            firstName: firstNames,
            lastName: lastNames,
            email: emails,
        }
    });

    const navigate = useNavigate();

    function onSubmit(data) {
        dispatch(updateData(data))
        console.log(data);
        navigate('/login')
    }

    return (
        <React.Fragment>
            <Box sx={{width: '500px', margin: 'auto'}}>
            <h2 style={{textAlign:'center'}}>Register Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <FormInput
                        label="First Name"
                        {...register('firstName')}
                        type="text"
                    />
                    <FormInput label="Last Name" {...register('lastName')} type="text" />
                </Stack>
                <FormInput
                    label="Username"
                    {...register('username')}
                    type="text"
                    sx={{ mb: 3 }}
                />
                <FormInput
                    label="Email"
                    {...register('email')}
                    type="email"
                    sx={{ mb: 3 }}
                />
                <p>{errors.email?.message}</p>
                <FormInput
                    label="Password"
                    {...register('password')}
                    type="password"
                    sx={{ mb: 3 }}
                />
                <p>{errors.password?.message}</p>
                <FormInput
                    label="Password Confirmation"
                    name='passwordConfirmation'
                    {...register('passwordConfirmation')}
                    type="password"
                    sx={{ mb: 3 }}
                />
                <p>{errors.passwordConfirmation?.message}</p>
                <FormInput
                    // label="Date of Birth"
                    {...register('birthDay')}
                    type="date"
                    sx={{ mb: 3 }}
                />
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <FormControlLabel
                        value="female"
                        control={<Radio {...register('gender')} />}
                        label="Female"
                    />
                    <FormControlLabel
                        value="male"
                        control={<Radio {...register('gender')} />}
                        label="Male"
                    />
                    <FormControlLabel
                        value="other"
                        control={<Radio {...register('gender')} />}
                        label="Other"
                    />
                </RadioGroup>

                <Button variant="contained" sx={{backgroundColor:'#00ffff', color: '#25282B'}} type="submit">
                    Login
                </Button>
            </form>
            </Box>
        </React.Fragment>
    );
};

export default RegisterForm;
