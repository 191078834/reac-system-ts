import * as React from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { Controller, useForm } from 'react-hook-form';
import { Button, Grid, TextField } from '@mui/material';
import { IFormInput } from '../EveryDayWord/EveryDayWord'
import { useLocation, useNavigate } from "react-router-dom";
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const Kakunin = () => {

    const { control, handleSubmit } = useForm<IFormInput>();
    const uselocation = useLocation();
    const navigate = useNavigate();
    const [display, setDisplay] = React.useState<string | null>(null);
    const [open, setOpen] = React.useState<boolean>(false)

    const onSubmit = (data: IFormInput): void => {
        let currentTime: string = format(new Date(), 'yyyy/MM/dd', { locale: ja })
        fetch("http://localhost:8090/everydayword/wordcheck", {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/json,text/plain,*/*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: data, currentTime: currentTime })
        }).then(res => res?.json()).then(data => {
            if (data.status === "ok") {
                setDisplay(data.message);
                setOpen(true);


            }
        })
    }

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: '100%', ml: 10 }}>

            <Grid container spacing={1} >
                {/* 1行目 */}
                <Grid item xs={12}>
                    <Collapse in={open} >
                        <Alert severity="success" sx={{ width: "80%" }}>{display}</Alert>
                    </Collapse>
                </Grid>
                {/* 2行目 */}
                <Grid item xs={12}>
                    <Controller
                        render={({ field }) => <TextField {...field} label="単語" disabled value={uselocation.state.word} />}
                        name="word"
                        defaultValue={uselocation.state.word}
                        control={control}
                    />
                </Grid>
                {/* 3行目 */}
                <Grid item xs={12}>
                    <Controller
                        render={({ field }) => <TextField {...field} required label="発音" disabled />}
                        name='lomazi'
                        defaultValue={uselocation.state.lomazi}
                        control={control}
                    />
                </Grid>
                {/* 4行目 */}
                <Grid item xs={12}>
                    <Controller
                        name='translate'
                        defaultValue={uselocation.state.translate}
                        render={({ field }) => <TextField {...field} required sx={{ width: 400, mt: 2 }} label="翻訳" disabled />}
                        control={control}
                    />
                </Grid>

                {/* 5行目 */}
                <Grid item xs={5}>
                </Grid>
                <Grid item xs={1} hidden={open}>
                    <Button
                        type="button"
                        onClick={() => navigate(-1)}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, height: 55 }}
                    >
                        戻り
                    </Button>
                </Grid>
                <Grid item xs={1} hidden={open}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ ml: 1, mt: 1, height: 55 }}
                    >
                        確認
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )

}


export default Kakunin