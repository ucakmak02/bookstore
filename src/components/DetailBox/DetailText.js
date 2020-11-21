import React from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        width:400,
    },
    text:{
        width:400,
        margin:10,
    },
    inputRoot: {
        '&$disabled': {
          color:'#666102',
          fontWeight:600,
          fontFamily:'Roboto'
        },
      },
      disabled: {}
  }));

export default function DetailText({data,boolDisable,isButtonActive}) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: data?.title,
        author: data?.author,
        explanation: data?.content,
      });
    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
    return (
        <Box className={classes.container}>
            <Box >
                <TextField
                    className={classes.text}
                    inputProps={{
                        disabled: boolDisable||false,
                    }}
                    id="filled-multiline-static"
                    name='name'
                    label="Book Name"
                    multiline
                    onChange={handleChange}
                    rows={2}
                    value={values.name}
                    variant="outlined"
                />
            </Box>
            <Box>
                <TextField
                    className={classes.text}
                    inputProps={{
                        disabled: boolDisable||false,
                    }}
                    id="outlined-multiline-flexible"
                    name='author'
                    label="Author"
                    multiline
                    onChange={handleChange}
                    rows={2}
                    value={values.author}
                    variant="outlined"
                />
            </Box>
            <Box>
                <TextField
                    inputProps={{
                        disabled: boolDisable||false,
                    }}
                    className={classes.text}
                    name='explanation'
                    id="outlined-multiline-flexible"
                    label="Explanation"
                    multiline
                    onChange={handleChange}
                    rows={6}
                    rowsMax={10}
                    value={values.explanation}
                    variant="outlined"
                />
            </Box>
            <Box>
            {isButtonActive || false ?
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<SaveIcon />}
                >
                Save Button
            </Button>:null}
          </Box>
        </Box>
    )
}
