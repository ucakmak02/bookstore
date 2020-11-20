import React from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

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
    }
  }));

export default function DetailText({data}) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: data?.name,
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
                    disabled
                    className={classes.text}
                    name='explanation'
                    id="outlined-multiline-flexible"
                    label="Explanation"
                    multiline
                    onChange={handleChange}
                    rows={6}
                    value={values.explanation}
                    variant="outlined"
                />
            </Box>
        </Box>
    )
}
