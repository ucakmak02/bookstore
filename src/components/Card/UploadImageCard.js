import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea } from "@material-ui/core";
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto'
  },
});

export default function UploadImageCard() {
  const classes = useStyles();
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
  /* For Post */
  /*   const handleUpload = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image.raw);
  
      await fetch("YOUR_URL", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formData
      });
    }; */

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <label htmlFor="upload-button">
          <input
            type="file"
            accept="image/*"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          {image.preview ? (
            <img src={image.preview} alt="dummy" width="300" height="400" />
          ) :
            (
              <>
                <CloudUploadTwoToneIcon style={{ fontSize: 140 }} />
              </>
            )}
        </label>
      </CardActionArea>
    </Card>
  );
}
