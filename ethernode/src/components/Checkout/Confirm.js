import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { CheckoutContext } from "../../context/checkout";

const Confirm = props => {
  const { state } = useContext(CheckoutContext);
  const { classes } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {state.cart.map((item, index) => (
          <ListItem className={classes.listItem} key={index}>
            <ListItemText primary={item.itemName} secondary={item.itemDesc} />
            <Typography variant="body2">{item.itemCost}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${state.orderTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {state.shippingAddress1} {state.shippingAddress2}
          </Typography>
          <Typography gutterBottom>
            {state.shippingCity}, {state.shippingState} {state.shippingZip}
          </Typography>
          <Typography gutterBottom>{state.shippingCountry}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid item xs={12}>
            <Typography gutterBottom>
              {state.userFirst} {state.userLast}
            </Typography>
            <Typography gutterBottom>{state.cardNumber}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

Confirm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Confirm);
