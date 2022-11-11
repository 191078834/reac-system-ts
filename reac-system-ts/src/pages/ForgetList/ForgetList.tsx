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
    { firstname: 'first', lastname: 'first', currend: timeTostring },
    { firstname: 'second', lastname: 'rmali', currend: timeTostring },
    { firstname: 'third', lastname: 'ma58li', currend: timeTostring },
    { firstname: 'forteen', lastname: 'maggli', currend: timeTostring }
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
        console.log("以下会改变原数组")
        console.log("push() : 返回添加后的数组长度 ", arrayNames.push({ firstname: 'new', lastname: 'new', currend: timeTostring }))
        console.log("pop()删除最后一个元素，返回删除项", arrayNames.pop())
        console.log("shift()删除第一个元素，返回删除项", arrayNames.shift())
        console.log("unshift()接收任意数量参数，将它们添加到数组开头, 返回最新数组长度", arrayNames.unshift({ firstname: 'firstttt', lastname: 'new3', currend: timeTostring }))
        // console.log("reverse() 将数组元素反向排序", arrayNames.reverse())
        // sort 比较函数
        arrayNames.sort((a, b) => a.firstname.length < b.firstname.length ? -1 : a.firstname.length > b.firstname.length ? 1 : 0)
        console.log("sort() 将数组元素排序", arrayNames)

        console.log('下面方法不改变原数组在现有数组全部元素基础上创建一个新数组')
        let newArray = arrayNames.concat({ firstname: 'sasin', lastname: 'sasin', currend: timeTostring })
        console.log('concat()它的参数添加到副本末尾，最后返回这个新构建的数组', newArray)
        let newArray2 = arrayNames.slice(1, 3)
        console.log('slice()参数：①返回元素开始索引，②结束索引,复制特定一段的数组arg1<newArray<=arg2', newArray2)
        // 等待更新
        console.log('splice()会改变原数组')
        console.log()
        console.log()













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

