import * as React from 'react'
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';
import DIivBox from './DIivBox'


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
        //splice(()
        console.log('splice()会改变原数组 多种用法①插入②删除③替换')
        //搜索位置方法 includes()
        console.log('返回boolean', arrayNames.includes({ firstname: '0', lastname: '0', currend: '0' }))
        //搜索元素 find findIndex
        console.log('返回第一次匹配到的元素', arrayNames.find((element) => element.firstname === 'third'))
        //搜索元素 返回所有元素
        console.log(arrayNames.filter((element) => element.lastname === 'maggli'))

        //every()与所有函数返回true则返回true
        console.log(arrayNames.every((element) => element.lastname.length > 5))
        console.log(arrayNames)
        //some() 如果对有一项函数返回true，则返回true
        console.log(arrayNames.some((element) => element.lastname.length > 2))

        //归并方法 （reduce、reduceRight） wait updating



        setTesString('w')
        setAge(22)
        // e.preventDefault();
    }
    const [count, setCount] = React.useState<number>(0)
    // let tesString = React.useMemo(() => ('ewew'), [count])
    const [tesString, setTesString] = React.useState<any>('jlkj')
    const [age, setAge] = React.useState<any>(5)
    const dax = React.useMemo(() => ({ tesString, age }), [age, tesString])
    const handeler = React.useCallback(() => {
        console.log('count:', count)
    }, [age])

    React.useEffect(() => {
        setAge(22);
        console.log('end')
    })


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
                <Grid item>
                    <Button onClick={() => setCount(count + 1)} variant="outlined">
                        test
                    </Button>
                </Grid>


                {/* <Grid item xs={4}></Grid> */}
            </Grid>
            <DIivBox arrayItems={arrayNames} args={dax} fn={handeler} />
        </Box>

    )
}

export default ForgetList

