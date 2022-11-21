
import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import "dayjs/locale/ja";
// import { forwardRef, ForwardRefRenderFunction, memo, useImperativeHandle } from "react";
// import { format } from 'date-fns'
// import { ja } from 'date-fns/locale'

export interface IpropRef {
    getValue: () => string | undefined
}



const ResponsiveDatePickers = React.forwardRef<IpropRef>(({}, ref) => {


    // const locale = ["ja"];
    // const [value, setValue] = React.useState(format(new Date(), 'yyyy/MM/dd', { locale: ja }));
    

    let childRef = React.useRef<null | HTMLInputElement>(null);

    React.useImperativeHandle(ref, (): IpropRef => {
        return {
            getValue: (): string | undefined => childRef.current?.value
        }
    }, [])

    return (
        <>
            <input ref={childRef}  />
        </>
    )

}
)
export default ResponsiveDatePickers


