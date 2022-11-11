import * as React from 'react'
import { iData } from "./ForgetList"
interface Iprops {
    children?: React.ReactNode,
    arrayItems: Array<iData>
    args: any
    fn: Function

}
const DIivBox: React.FC<Iprops> = (props) => {
    props.fn()

    return (
        <>
            {props.arrayItems.map((item: iData, index: number) => (
                <div key={Number(index)}>{item.lastname}</div>
            ))}
        </>

    )

}


export default React.memo(DIivBox)