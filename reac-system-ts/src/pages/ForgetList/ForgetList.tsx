import * as React from 'react'
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material';


export type iData = {
    firstname: string,
    lastname: string,
    currend: string
}
let date = new Date();
let year = String(date.getFullYear());
let month = String(date.getMonth() + 1);
let day = String(date.getDate());
let hours = String(date.getHours());
let minutes = String(date.getMinutes());
let seconds = String(date.getSeconds());
let space: string = '-'
let spase2: string = ':'
let timeTostring = year + space + month + space + day + '   ' + hours + spase2 + minutes + spase2 + seconds
let arrayNames: Array<iData> = [
    { firstname: 'sfddfds', lastname: 'mrali', currend: timeTostring },
    { firstname: 'wawafddng', lastname: 'rmali', currend: timeTostring },
    { firstname: 'wdeggang', lastname: 'ma58li', currend: timeTostring },
    { firstname: 'wandfag', lastname: 'maggli', currend: timeTostring }
]

const ForgetList: React.FC<{}> = () => {

    const [testArray, setTestArray] = React.useState(arrayNames);
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTestArray(arrayNames);

        console.log('keys()，values()，entries()  返回Iterator对象')
        console.log('Array.of : 返回的数组为传入的输值', Array.of(e.target.value))
        console.log('Array.from : 返回的获数组为下标数组 keys：下标', Array.from(testArray.keys()))
        console.log('Array.from : 返回的获数组为数组值', Array.from(testArray.values()))
        console.log('Array.from : 相当于zip方法', Array.from(testArray.entries()))

        console.log('判断是否为数组', Array.isArray(testArray))










        // e.preventDefault();
    }



    return (

        <Box component="form" sx={{ maxWidth: '100%', ml: 100 }}>
            <Grid container spacing={1} >
                {/* 1行目 */}
                <Grid item xs={12}>
                    <TextField
                        sx={{ width: 500 }}
                        name='word'
                        required
                        label="単語"
                        onChange={handleSubmit}
                    />
                </Grid>
                {testArray.map((item: iData, index: number) => (
                    <Box key={index.toString()}>{item.lastname}<Box>{item.firstname}</Box> <Box>{item.currend}</Box></Box>





                )

                )}
                {/* <Grid item xs={4}></Grid> */}
            </Grid>
        </Box>

    )
}

export default ForgetList

