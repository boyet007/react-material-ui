import React, { Component, Fragment } from 'react'
import { Button, Dialog, Fab, DialogActions, DialogContent, DialogContentText,
    DialogTitle } from '@material-ui/core'
import { Add } from '@material-ui/icons'


export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const { open } = this.state
        return <Fragment>
                  <Fab color="white" onClick={this.handleToggle} size="small" aria-label="add">
                     <Add />
                  </Fab>
                    <Dialog open={open}  
                        onClose={this.handleToggle}>
                <DialogTitle id="form-dialog-title">
                    Create a New Exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button color="primary" variant="contained">
                    Create
                </Button>
                </DialogActions>
            </Dialog>
            </Fragment>          
    }
}
    

