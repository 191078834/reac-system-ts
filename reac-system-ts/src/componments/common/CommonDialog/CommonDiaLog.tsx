import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CommonButton from '../CommonButton/CommonButton'
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Iprop {
  action: 'wordRowDelete'|'wordRoeUpdate'
  deleteCell?: React.MouseEventHandler,
  updateCell?: React.MouseEventHandler,
  actionButtonName: string
}

const CommonDialog: React.FC<Iprop> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgree = () => {
    if (props.action === 'wordRowDelete') {
      props.deleteCell;
    }
    if (props.action === 'wordRoeUpdate') {
      props.updateCell;
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CommonButton variant="contained" size="medium" type="submit" onClick={handleClickOpen}>
        {props.actionButtonName}
      </CommonButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'ダイアログ'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {'このボタンを有効にするか'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAgree}>確認</Button>
          <Button onClick={handleClose}>キャンセル</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CommonDialog