import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { CheckoutContext } from "../../context/checkout";

function PaymentDetails() {
  const { state, handleChange } = useContext(CheckoutContext);
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" name="cardHolder" value={state.cardHolder} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Card number" name="cardNumber" value={state.cardNumber} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiration date" name="expiration" value={state.expiration}  onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            name="cvv"
            value={state.cvv}
            helperText="Last three digits on back of card"
            fullWidth
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


export default PaymentDetails;