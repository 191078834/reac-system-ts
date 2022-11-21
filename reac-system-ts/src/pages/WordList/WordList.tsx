import * as React from 'react'
import { IpropRef } from '../../componments/common/ResponsiveDatePickers/ResponsiveDatePickers'
import ResponsiveDatePickers from '../../componments/common/ResponsiveDatePickers/ResponsiveDatePickers'


const WordList: React.FC<{}> = () => {
    const inputRef = React.useRef<IpropRef>(null)
    const [getChildValue, setGetChildValue] = React.useState<string>()
    const handler = (e: React.MouseEvent<HTMLElement>) => {
        setGetChildValue(inputRef.current?.getValue)
        console.log(e)

    }

    return (
        <div >
            <ResponsiveDatePickers ref={inputRef}  />

            <button onClick={handler}>submit</button>
            <input value={getChildValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGetChildValue(e.target.value)} />
        </div>
    )
}

export default WordList
