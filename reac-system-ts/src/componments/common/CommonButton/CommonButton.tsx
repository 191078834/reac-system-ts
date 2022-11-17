import * as React from 'react';
import Button from '@mui/material/Button';


interface Iprop {
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler,
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    disabled?: boolean,
    size?: 'small' | 'medium' | 'large',
    variant?: 'text' | 'outlined' | 'contained',
    type: 'submit' | 'reset' | 'button',
    sx?: object
}


const CommonButton: React.FC<Iprop> = (props): JSX.Element => {
    return (
        <Button
            color={props.color}
            disabled={props.disabled}
            size={props.size}
            variant={props.variant}
            sx={props.sx}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}

export default CommonButton
