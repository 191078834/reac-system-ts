import * as React from 'react'
import Box from '@mui/material/Box';
import { useForm, Controller } from 'react-hook-form';
import useAddEveryDayWordState from '../../api/useAddEveryDayWordState'
import { Button, Grid, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

export interface IFormInput {
    word: string,
    lomazi: string,
    translate: string
};
const EveryDayWord: React.FC<{}> = () => {

    const { control, handleSubmit } = useForm<IFormInput>();
    const [submitDisabled, setSubmitDisabled] = React.useState<boolean>(true);
    let inputData = JSON.parse(window.localStorage.getItem('inputData') as string)
    // let jsonObj =JSON.parse(inputData)


    // let wordRef = React.useRef<HTMLInputElement|undefined>(undefined);

    const { respMessage, isLoading, isError, isAdded, fetchDataFun } = useAddEveryDayWordState()
    console.log(isLoading, isAdded)


    const onSubmit = (data: IFormInput) => fetchDataFun(data)
    const handlerOnBlur = (data: IFormInput) => (data.word.length < 1 || data.lomazi.length < 1 || data.translate.length < 1) ? setSubmitDisabled(true) : setSubmitDisabled(false)


    // const handleOnblur = (e: React.FocusEvent<HTMLInputElement>) => {
    //     e.preventDefault()
    // }

    return (

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: '100%', ml: 30 }}>
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <Collapse in={isError} >
                        <Alert severity="warning">
                            {respMessage}
                        </Alert>
                    </Collapse>
                </Grid>
                {/* 1行目 */}
                <Grid item xs={4}>
                    <Controller
                        render={({ field }) => <TextField {...field} onBlur={handleSubmit(handlerOnBlur)} label="単語" />}
                        name="word"
                        control={control}
                        defaultValue={inputData.word}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Controller
                        render={({ field }) => <TextField {...field} label="発音" onBlur={handleSubmit(handlerOnBlur)} />}
                        name='lomazi'
                        defaultValue={inputData.lomazi}
                        control={control}
                    />
                </Grid>
                {/* 2行目 */}
                <Grid item xs={9}>
                    <Controller
                        name='translate'
                        defaultValue={inputData.translate}
                        render={({ field }) => <TextField {...field} sx={{ width: 700, mt: 2 }} label="翻訳" onBlur={handleSubmit(handlerOnBlur)} />}
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
                        disabled={submitDisabled}
                        sx={{ mt: 1, ml: 20, height: 55 }}
                    >
                        確認
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EveryDayWord

