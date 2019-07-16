import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import { GridList } from 'material-ui/GridList';
import  AppBar  from 'material-ui/AppBar'
import ButtonLogin from 'material-ui/FlatButton'
import Button from 'material-ui/RaisedButton'




/********* styles begin here *********/
const styles = {
    container: {
        textAlign: 'center',
        maxWidth: '1200px',
        width: '100%',
        
    },
    
    textField: {
        fontFamily: `Rancho, cursive`,
        fontSize: '1.6rem',
        marginBottom: '10px',
        marginTop: '10px',
        display: 'block'
        // borderTop: '1px solid grey',
    },

    header: {
        flexGrow: '1',
        fontFamily: `Yeseva One, cursive`
    },

    button: {
        color: 'white',
        fontSize: '1.5rem',
        fontFamily: `Rancho, cursive`,
        marginTop: '10px'

    }

}

const  BasicInfo = (props) => {
    
    return (
        <MuiThemeProvider>
            <AppBar title='Enter User Info'
                    color='secondary'
                    style={styles.header}>
                        <ButtonLogin style={styles.button}>Log In</ButtonLogin>
                </AppBar>
            <GridList cols={3} >
            <form style={styles.container}>
            <TextField
             style={styles.textField}
             id='firstName'
             name='firstName'
            //  placeholder='Enter first name'
            floatingLabelText='First Name'
             variant='outlined'
             value={props.formState.firstName}
             onChange={props.handleChange('firstName')}
            />
            <TextField
             style={styles.textField}
             id='lastName'
             name='lastName'
            //  placeholder='Enter last name'
             variant='outlined'
             floatingLabelText='Last Name'
             value={props.formState.lastName} 
             />

             <TextField
             style={styles.textField}
             id='Email'
             name='email'
            //  placeholder='Enter your email'
             variant='outlined'
             floatingLabelText='Email'
             value={props.formState.email} 
             />
            </form>
            </GridList>
        </MuiThemeProvider>
    )
}

export default BasicInfo