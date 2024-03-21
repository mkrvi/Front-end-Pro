import React, {createRef, useContext} from "react";
import {Box, Button, ButtonGroup, Paper} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormInput from "./UI/Input";
import {nextStep, previousStep, updateData} from "../reducer/Reducer";
import {AppContext} from "../context/Context";
import {schemaThirdStep} from "../data/schema";

// case 'SET_IMAGE':
//     return {
//         ...state,
//         formData: {
//             ...state.formData,
//             image: action.payload.data,
//         }
//     }

// export const setImage = (data) => ({
//     type: SET_IMAGE,
//     payload: data
// })

// const SET_IMAGE = 'SET_IMAGE'

const Avatar = () => {
    const [{formData}, dispatch] = useContext(AppContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaThirdStep),
        defaultValues:{
            image: formData.image
        }
    });

    const fileInputRef = createRef();

    const updateImage = (file) => {
        console.log(file);

        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
        }

        reader.onloadend = () => {
            console.log(reader.result);
            dispatch(updateData({ image: reader.result.toString() }));
        };
    }

    const onSubmit = () => {
        dispatch(nextStep());
    };

    const choseFile = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = () => {
        const file = fileInputRef.current.files[0];
        console.log(file)
        updateImage(file);
    }


    return(
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 'auto',
                width: 400,
            },
        }}>
            <Paper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Button fullWidth sx={{marginBottom: '10px'}} onClick={choseFile}>
                        Choose File
                    </Button>
                    <label>
                        <FormInput
                            label="Avatar"
                            sx={{display: 'none'}}
                            type="file"
                            name='image'
                            {...register("image")}
                            onChange={handleFileChange}
                            ref={fileInputRef}
                        />
                    </label>
                    <img style={{maxWidth: 400}} src={formData.image} />
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button  variant="outlined" color="secondary" type='button' onClick={()=>dispatch(previousStep())}>
                            Previous
                        </Button>
                        <Button variant="outlined" color="secondary" type="submit">
                            Finish
                        </Button>
                    </ButtonGroup>
                </form>
            </Paper>
        </Box>
)
}

export default Avatar