import React, {useContext} from "react";
import {AppContext} from "../context/Context";
import {
    Button,
    ButtonGroup,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {previousStep} from "../reducer/Reducer";

function Conclusion(){
    const [{formData}, dispatch] = useContext(AppContext)

return(
        <TableContainer  className='table' component={Paper} sx={{  display: 'grid',
            '& > :not(style)': {
                m: 'auto',
                width: 400,
            },}}>
            <h2 style={{textAlign:'center', marginBottom:15}}>Conclusion</h2>
            <form>
            <Table aria-label="caption table">
                <TableHead>
                <TableRow>
                        <TableCell >Input</TableCell>
                        <TableCell align='right'>Value</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">First Name</TableCell>
                        <TableCell align="right">{formData.firstName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Last Name</TableCell>
                        <TableCell align="right">{formData.lastName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="right">{formData.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Password</TableCell>
                        <TableCell align="right">{formData.password}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <ButtonGroup style={{display:'flex', marginTop:15, marginBottom:15}} variant="text" aria-label="text button group">
                <Button style={{margin:'auto'}} variant="outlined" color="secondary" type='button' onClick={()=>dispatch(previousStep())}>
                    Previous
                </Button>
                <Button style={{margin:'auto'}} variant="outlined" color="secondary" type="submit">
                    Finish
                </Button>
            </ButtonGroup>
            <img src={formData.image.toString()} style={{display:'block', width:'100%', height:'100%'}} alt='grogu'/>
            </form>
        </TableContainer>
)
}

export default Conclusion