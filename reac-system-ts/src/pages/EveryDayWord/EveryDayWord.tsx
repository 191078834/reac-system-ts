import * as React from 'react'
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';

const EveryDayWord: React.FC<{}> = () => {
    let wordRef = React.useRef<HTMLInputElement>(null);
    let translateRef = React.useRef<HTMLInputElement>(null);
    const [hatuo, setHatuo] = React.useState<String>("");
    // const [ajaxUrl, setAjaxUrl] = React.useState<String>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        console.log(wordRef.current?.value, hatuo, translateRef.current?.value)
        // alert(wordRef.current?.value);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHatuo(e.target.value);
    }
    const handleOnblur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.preventDefault()
        fetch("http://localhost:8090/everydayword/wordcheck", {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/json,text/plain,*/*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ word: wordRef.current?.value })
        })
        
    }



    return (

        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '100%' }}>
            <Grid container spacing={1} >
                {/* 1行目 */}
                <Grid item xs={4}>
                    <TextField
                        name='word'
                        required
                        label="単語"
                        inputRef={wordRef}
                        onBlur={handleOnblur}
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        name='lomazi'
                        required
                        onChange={handleChange}
                        label="発音"
                        value={hatuo}
                    />
                </Grid>
                {/* 2行目 */}
                <Grid item xs={9}>
                    <TextField
                        name='translate'
                        required
                        label="翻訳"
                        sx={{ width: 600, mt: 2 }}
                        inputRef={translateRef}
                    />
                </Grid>
                <Grid item xs={3}>
                </Grid>
                {/* 3行目 */}
                <Grid item xs={6}>
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

export default EveryDayWord

