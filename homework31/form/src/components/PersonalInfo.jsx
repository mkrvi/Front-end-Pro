import React, {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import FormInput from './UI/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {Box, Paper, Stack} from "@mui/material";
import {schemaFirstStep} from "../data/schema";
import {nextStep, updateData} from "../reducer/Reducer";
import {AppContext} from "../context/Context";

const PersonalInfo = () => {
    const [{ formData }, dispatch] = useContext(AppContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaFirstStep),
        defaultValues:{
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        }
    });

    const onSubmit = (data) => {
        dispatch(nextStep())
        dispatch(updateData(data));
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
                    <h2 style={{textAlign:"center"}}>Personal info</h2>
                    <FormInput
                        label="First Name"
                        name='firstName'
                        {...register('firstName')}
                        type="text"
                    />
                        <p>{errors.firstName?.message}</p>
                    <FormInput label="Last Name" name='lastName' {...register('lastName')} type="text" />
                        <p>{errors.lastName?.message}</p>
                        <FormInput
                            label="Email"
                            name='email'
                            {...register('email')}
                            type="email"
                            sx={{mb: 3}}
                        />
                        <p>{errors.email?.message}</p>
                    </Stack>
                    <Button style={{margin:"auto"}} variant="outlined" color="secondary" type="submit">
                        Next
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default PersonalInfo;
