import React, { Component, Fragment, useState } from 'react'
import { Button, TextField, Dialog, Fab, DialogActions, DialogContent, DialogContentText,
    DialogTitle } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const Create = () => {
    return ( 
        <Fragment>
                 <Fab color="default" onClick={this.handleToggle} size="small" aria-label="add">
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
                 <form>
                     <TextField label="Title" value={title}
                        onChange={this.handleChange('title')} margin="normal">
                     </TextField>
                     <br />
                     <TextField label="Description" value={description}
                         onChange={this.handleChange('description')} 
                         margin="normal">
                     </TextField>
                 </form>
                 <DialogActions>
                 <Button color="primary" variant="contained">
                     Create
                 </Button>
                 </DialogActions>
             </Dialog>
             </Fragment>    
     );
}
 
export default Create;





// export default class extends Component {
//     state = {
//         open: false,
//         exercise: {
//             title: '',
//             description: '',
//             muscles: ''
//         }
//     }

//     handleToggle = () => {
//         this.setState({
//             open: !this.state.open
//         })
//     }

//     handleChange = name => ({ target: { value } }) => {
//         this.setState({
//             exercise: {
//                 ...this.state.exercise, 
//                 [name]: value
//             }
//         })
//     }
//     render() {
//         const { open, exercise: { title, description, muscles } } = this.state
//         return <Fragment>
//                   <Fab color="default" onClick={this.handleToggle} size="small" aria-label="add">
//                      <Add />
//                   </Fab>
//                     <Dialog open={open}  
//                         onClose={this.handleToggle}>
//                 <DialogTitle id="form-dialog-title">
//                     Create a New Exercise</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Please fill out the form below
//                     </DialogContentText>
//                 </DialogContent>
//                 <form>
//                     <TextField label="Title" value={title}
//                         onChange={this.handleChange('title')} margin="normal">
//                     </TextField>
//                     <br />
//                     <TextField label="Description" value={description}
//                         onChange={this.handleChange('description')} 
//                         margin="normal">
//                     </TextField>
//                 </form>
//                 <DialogActions>
//                 <Button color="primary" variant="contained">
//                     Create
//                 </Button>
//                 </DialogActions>
//             </Dialog>
//             </Fragment>          
//     }
// }
    

