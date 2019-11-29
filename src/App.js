import React, { useContext } from 'react';
import { EventContext, Styled } from 'create-react-web-component';

import styles from './App.css';
import WrappedJssComponenent from './WrappedJssComponenent';
import { propTypes } from './componentProperties';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const App = (props) => {

  const dispatch = useContext(EventContext);

  const valuetext = (value) => {
    return `${value}°C`;
  }

  const handleClick = () => {
    const event = new Event('helloFromReact');
    console.log('dispatch event react...');
    dispatch(event);
  };

  const { name } = props;
    return (
      <WrappedJssComponenent>
        <Styled styles={styles}>
          <div className='react-app' id="jss-insertion-point">
              React App v. 16.10.2
              <h3 className='tag'> {name} </h3>
              <Button variant="contained" color="primary" onClick={handleClick}>
                  Hello World
              </Button>
              <Grid container justify="space-around">
              <FormControlLabel
                control={
                  <Checkbox
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Primary"
              />
              <FormControlLabel
                control={
                  <Checkbox value="checkedA" />
                }
                label="Secondary"
              />
              </Grid>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" >
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
              </RadioGroup>
              <FormControl>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <br />
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
            <Switch
              value="checkedB"
              color="primary"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <br />
            <TextField id="standard-basic" label="Standard" />
            <br />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          </div>
        </Styled>
      </WrappedJssComponenent>
    )
}
App.propTypes = propTypes;

export default App;
