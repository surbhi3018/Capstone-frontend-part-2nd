import React, { Component, useEffect, useState } from "react";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { red } from "@material-ui/core/colors";
import Box from '@material-ui/core/Box';
import Home from './home/Home';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  category: {
    marginLeft: 300,
  },
  leftDetails:{
    marginLeft: 200,
    marginTop: 80,
    paddingRight: 80,
  },
  cardSpace:{
    paddingRight: 150
  }
});

export default function Details() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState("left");
  const [spacing, setSpacing] = React.useState(2);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    
   
    <div className="container">
      
      <div className={classes.category} >
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            ALL
          </ToggleButton>
          <ToggleButton value="left" aria-label="left aligned">
            APPAREL
          </ToggleButton>
          <ToggleButton value="left" aria-label="left aligned">
            ELECTRONICS
          </ToggleButton>
          <ToggleButton value="left" aria-label="left aligned">
            FOOTWEAR
          </ToggleButton>
          <ToggleButton value="left" aria-label="left aligned">
            PERSONAL CARE
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      
      <div className={classes.leftDetails} >
        <Grid container spacing={3}>
          <div className={classes.cardSpace}>
            <img
            height="350px"
              src="https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg"
              alt="title"
            />
          </div>
          <div className="middleDetails">
            <div>
              <Typography variant="headline" component="h2">
                iPhone 12{" "}
              </Typography>
            </div>
            <br />
            <div>
              <Typography>
                <span className="bold">Category:</span> date
              </Typography>
            </div>
            <br/>
            <div>
              <Typography>
                <span className="bold"> Rating:</span> critics_rating{" "}
              </Typography>
            </div>
            <br/>
            <div className="marginTop16">
              <Typography color="secondary">
                <span className="bold">10000</span> 
              </Typography>
            </div>
            <br/>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="enterquantity"
                label="Enter Quantity"
                name="enterquantitye"
                autoComplete="enterquantity"
              />
            </Grid>
            <br/>
            <Button variant="contained" color="primary">
              PLACE ORDER
            </Button>
          </div>
        </Grid>
      </div>
      
    </div>
    
  );
}
