import * as React from 'react'
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';

const ForgetList: React.FC<{}> = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        console.log(111)
    }


    return (

        // <div style={{ marginLeft: '500px' }}>
        //     ForgetList
        // </div>
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '100%' }}>
            <Grid container spacing={1} >
                {/* 1行目 */}
                <Grid item xs={4}>
                    <TextField
                        name='word'
                        required
                        label="単語"
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        name='lomazi'
                        required
                        label="発音"
                    />
                </Grid>
                {/* 2行目 */}
                <Grid item xs={9}>
                    <TextField
                        name='translate'
                        required
                        label="翻訳"
                        sx={{ width: 600, mt: 2 }}
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

export default ForgetList

