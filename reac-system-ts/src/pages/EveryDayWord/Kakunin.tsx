import * as React from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { Controller,useForm } from 'react-hook-form';
import { Button, Grid, TextField } from '@mui/material';
import {IFormInput} from '../EveryDayWord/EveryDayWord'
import { useLocation } from "react-router-dom";

const Kakunin = () => {
    let uselocation = useLocation()
    const { control, handleSubmit } = useForm<IFormInput>();
    // const [submitDisabled, setSubmitDisabled] = React.useState<boolean>(true);


    // let wordRef = React.useRef<HTMLInputElement|undefined>(undefined);

    // const { respMessage, isLoading, isError, isAdded, fetchDataFun } = useAddEveryDayWordState()
    // console.log(respMessage, isLoading, isError, isAdded, fetchDataFun)

    const onSubmit = (data: IFormInput) => console.log(data)

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: '100%'}}>
          
            <Grid container spacing={1} >
            <Grid item xs={12}>
                    <Collapse in={false} >
                        <Alert severity="warning"/>
                    </Collapse>
                </Grid>
                  {/* 1行目 */}
                <Grid item xs={4}>
                    <Controller
                        render={({ field }) => <TextField {...field}  label="単語"  disabled/>}
                        name="word"
                        defaultValue={uselocation.state.word}
                        control={control}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Controller
                        render={({ field }) => <TextField {...field} required label="発音" disabled/>}
                        name='lomazi'
                        defaultValue={uselocation.state.lomazi}
                        control={control}
                    />
                </Grid>
            {/* 2行目 */}
            <Grid item xs={9}>
                <Controller
                    name='translate'
                    defaultValue={uselocation.state.translate}
                    render={({ field }) => <TextField {...field} required sx={{ width: 700, mt: 2 }} label="翻訳" disabled/>}
                    control={control}
                />
             </Grid>
            <Grid item xs={3}>
            </Grid>
            {/* 3行目 */}
            <Grid item xs={7}>
            </Grid>
            <Grid item xs={1}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, ml: 20, height: 55 }}
                >
                    確認
                </Button>
            </Grid>
        </Grid>
    </Box>
    )

}


export default Kakunin