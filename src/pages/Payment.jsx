import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { CheckCircle2, CreditCard, Banknote, Smartphone, Wallet } from 'lucide-react';

const Payment = () => {
  const { cart, getTotalAmount, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const total = getTotalAmount();

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      navigate('/menu');
      return;
    }

    setOrderPlaced(true);
    toast.success('Order placed successfully!');
    
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 animate-scale-in">
          <CardContent className="pt-6 text-center">
            <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
            <p className="text-muted-foreground mb-4">
              Thank you for your order. Your delicious food is being prepared!
            </p>
            <p className="text-sm text-muted-foreground">
              Redirecting to home page...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">Payment</h1>

        <div className="grid gap-6">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
              </div>
              <div>
                <Label htmlFor="address">Delivery Address</Label>
                <Input id="address" placeholder="123 Main St, City, State, ZIP" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                {/* Credit Card */}
                <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                  <RadioGroupItem value="credit" id="credit" />
                  <Label htmlFor="credit" className="flex-1 cursor-pointer flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Credit Card</div>
                      <div className="text-sm text-muted-foreground">
                        Visa, Mastercard, American Express
                      </div>
                    </div>
                  </Label>
                </div>

                {/* Debit Card */}
                <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                  <RadioGroupItem value="debit" id="debit" />
                  <Label htmlFor="debit" className="flex-1 cursor-pointer flex items-center gap-3">
                    <Banknote className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Debit Card</div>
                      <div className="text-sm text-muted-foreground">
                        All major debit cards accepted
                      </div>
                    </div>
                  </Label>
                </div>

                {/* UPI */}
                <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="flex-1 cursor-pointer flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">UPI</div>
                      <div className="text-sm text-muted-foreground">
                        Google Pay, PhonePe, Paytm, and more
                      </div>
                    </div>
                  </Label>
                </div>

                {/* Cash on Delivery */}
                <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="flex-1 cursor-pointer flex items-center gap-3">
                    <Wallet className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Cash on Delivery</div>
                      <div className="text-sm text-muted-foreground">
                        Pay when you receive your order
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              {/* Card Details Form */}
              {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                <div className="mt-6 space-y-4 p-4 bg-secondary/30 rounded-lg animate-fade-in">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" type="password" maxLength={3} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>
                </div>
              )}

              {/* UPI ID Form */}
              {paymentMethod === 'upi' && (
                <div className="mt-6 space-y-4 p-4 bg-secondary/30 rounded-lg animate-fade-in">
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" placeholder="yourname@upi" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Button
            size="lg"
            onClick={handlePlaceOrder}
            className="w-full animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Place Order - ${total.toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
