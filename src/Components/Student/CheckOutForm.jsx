import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckOurForm.css'
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useAxiosSecure } from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const CheckoutForm = ({cls}) => {
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate()
  
    useEffect(() => {
        // generate client secret and save instate
        if(cls?.price){
            axiosSecure.post('/create-payment-intent',{
                price: cls?.price
            })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [cls, axiosSecure])

    const handleSubmit = async (event) => {

      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }

      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "Unknown",
              email: user?.email || "Anonymous"
            },
          },
        },
      );
      if (confirmError) {
        console.log('[error]', confirmError);
        setCardError(confirmError.message);
      } else {
        console.log('[paymentIntent]', paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            // save payment info in db
            const paymentInfo = {
                ...cls, status:"Paid", transactionId: paymentIntent.id, date: new Date()
            }
            console.log(paymentInfo)
            axiosSecure.post('/payments', paymentInfo)
      .then(res => {
        console.log(res.data);
          toast.success("Payment Successfully!");
          navigate("/dashboard/enrollClasses")
      })
        }
      }
    };

  
    return (
      <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        
        <button className="btn btn-error" type="submit" disabled={!stripe}>
          Pay ${cls.price}
        </button>
      </form>
      {
        cardError && <p className="text-red-500">{cardError}</p>
      }
      </>
    );
  };

  
  export default CheckoutForm;