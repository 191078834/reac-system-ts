import * as React from 'react';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export interface mainNavBarItem {
    id: number,
    icon: any,
    label: String,
    route: String
}
export const mainNavBarItems: Array<mainNavBarItem> = [
    {
        id: 0,
        icon: <SpellcheckIcon />,
        label: '単語リスト',
        route: 'wordlist'


    },
    {
        id: 1,
        icon: <ArrowForwardIosIcon />,
        label: '毎日単語',
        route: 'everydaylist'


    },
    {
        id: 2,
        icon: <ArrowForwardIosIcon />,
        label: '忘れた単語',
        route: 'forgetlist'

    }
]



