import React from 'react';
import Button from '@mui/material/Button';
import FormInput from './UI/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {Box, ButtonGroup, Paper, Stack} from "@mui/material";
import {schemaSecondStep} from "../data/schema";
import {useContext} from "react";
import {AppContext} from "../context/Context";
import {nextStep, previousStep, updateData} from "../reducer/Reducer";

const Password = () => {
    const [{formData}, dispatch] = useContext(AppContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaSecondStep),
        defaultValues:{
            password: formData.password,
            passwordConfirmation: formData.passwordConfirmation
        }
    });

    const onSubmit = (data) => {
        dispatch(nextStep())
        dispatch(updateData(data))
        console.log(data);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 'auto',
                width: 400,
            },
        }}>
            <Paper>
                <form style={{display:"grid", marginBottom:36}} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}  sx={{ marginBottom: 4, paddingLeft:3, paddingRight:3}}>
                        <h2 style={{textAlign:"center"}}>Password</h2>
                        <FormInput
                            label="Password"
                            name='password'
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
                    </Stack>
                    <ButtonGroup variant="text" aria-label="text button group">
                    <Button style={{margin:"auto"}} variant="outlined" color="secondary" type='button' onClick={()=>dispatch(previousStep())}>
                        Previous
                    </Button>
                    <Button style={{margin:"auto"}} variant="outlined" color="secondary" type="submit">
                        Next
                    </Button>
                    </ButtonGroup>
                </form>
            </Paper>
        </Box>
    );
};

export default Password;