import * as React from 'react'
import Box from '@mui/material/Box';
import { useForm, Controller } from "react-hook-form";

import { Button, Grid, TextField } from '@mui/material';

interface IFormInput{
    word: string,
    lomazi: string,
    translate: string
};
const EveryDayWord: React.FC<{}> = () => {

    const { control, handleSubmit } = useForm<IFormInput>();
    const [submitDisabled, setSubmitDisabled] = React.useState<boolean>(true);


    // let wordRef = React.useRef<HTMLInputElement|undefined>(undefined);
   
    // const [ajaxUrl, setAjaxUrl] = React.useState<String>("");

    const onSubmit = (data: IFormInput)=>console.log(data);
    const handlerOnBlur = (data: IFormInput)=>(data.word.length<1||data.lomazi.length<1||data.translate.length<1)? setSubmitDisabled(true): setSubmitDisabled(false)
        
       
       
    
    // const handleOnblur = (e: React.FocusEvent<HTMLInputElement>) => {
    //     e.preventDefault()
    //     fetch("http://localhost:8090/everydayword/wordcheck", {
    //         method: "POST",
    //         mode: "cors",
    //         headers: {
    //             "Accept": "application/json,text/plain,*/*",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ word: 1 })
    //     })

    // }



    return (

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: '100%' }}>
            <Grid container spacing={1} >
                {/* 1行目 */}
                <Grid item xs={4}>
                <Controller
                    render={({ field }) => <TextField {...field} onBlur={handleSubmit(handlerOnBlur)}  label="単語"/>}
                    name="word"
                    
                    control={control}
                    defaultValue=""
                    />
                </Grid>
                <Grid item xs={5}>
                    <Controller
                        render={({ field }) => <TextField {...field} required label="発音" onBlur={handleSubmit(handlerOnBlur)} />}
                        name='lomazi'
                        defaultValue=""
                        control={control}
                    />
                </Grid>
                {/* 2行目 */}
                <Grid item xs={9}>
                    <Controller
                        name='translate'
                        defaultValue=""
                        render={({ field }) => <TextField {...field} required sx={{ width: 700, mt: 2 }} label="翻訳" onBlur={handleSubmit(handlerOnBlur)} />}
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

