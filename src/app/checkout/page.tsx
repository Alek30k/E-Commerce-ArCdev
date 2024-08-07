"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartUpdateContext } from "@/context/CartUpdateContext";
import { useCartStore } from "@/Hooks/useCartStore";
import { useWixClient } from "@/Hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Loader } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Loader } from "lucide-react";
// // import { PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [zip, setZip] = useState();
  const [address, setAddress] = useState();
  // const [cart, setCart] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [deliveryAmount, setDeliveryAmount] = useState(5);
  const [taxAmount, setTaxAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const params = useSearchParams();

  const wixClient = useWixClient();
  const { cart, isLoading, removeItem, calculateSubtotal } = useCartStore();

  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);

  // console.log(cart.lineItems);

  useEffect(() => {
    if (cart.lineItems) {
      calculateTotalAmount(cart.lineItems);
    }
  }, [cart.lineItems || updateCart]);

  const calculateTotalAmount = (cart_: any) => {
    let total = 0;
    cart_.forEach((item: any) => {
      total = total + parseInt(item.price.amount);
    });
    // setSubTotal(total.toFixed(2));

    setTaxAmount(total * 0.09);
    setTotal(total + total * 0.09 + deliveryAmount);
  };

  const addToOrder = () => {
    setLoading(true);

    const data = {
      email: user?.primaryEmailAddress.emailAddress,
      orderAmount: total,
      restaurantName: params.get("restaurant"),
      userName: user?.fullName,
      phone: phone,
      address: address,
      zipCode: zip,
    };

    GlobalApi.CreateNewOrder(data).then((resp) => {
      // console.log(resp?.createOrder?.id);
      const resultId = resp?.createOrder?.id;

      if (resultId) {
        cart.forEach(
          (item) => {
            GlobalApi.UpdateOrderToAddOrderItems(
              item.productName,
              item.price,
              resultId,
              user?.primaryEmailAddress.emailAddress
            ).then(
              (result) => {
                setLoading(false);
                toast("Order Created Successfully!");
                setUpdateCart(!updateCart);
                router.replace("/confirmation");
                // SendEmail();
                SendEmail(cart, total);
              },
              (err) => {
                console.log(err);
                setLoading(false);
              }
            );
          },
          (err) => {
            console.log(err);
            setLoading(false);
          }
        );
      }
    });
  };

  return (
    <div className="">
      <h2 className="font-bold text-2xl my-5 ">Checkaut</h2>
      <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8 ">
        <div className="md:col-span-2 md:mx-20 mb-5">
          <h2 className="font-bold text-3xl">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-3 mt-3 ">
            <Input
              placeholder="Name"
              //   onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-10 gap-3 mt-3 grid-cols-1">
            <Input
              placeholder="Phone"
              //   onChange={(e) => setPhone(e.target.value)}
            />
            {/* <Input placeholder="Zip" onChange={(e) => setZip(e.target.value)} /> */}
          </div>
          <div className=" mt-3">
            <Input
              placeholder="Address"
              //   onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="mx-10 border">
          <h2 className="p-3 bg-gray-200 font-bold text-center">
            Total Cart ({cart.lineItems?.length})
          </h2>
          <div className="p-4 flex flex-col gap-4">
            <h2 className="font-bold flex justify-between">
              Subtotal : <span>${calculateSubtotal(cart)}</span>
            </h2>
            <hr />
            <h2 className="flex justify-between">
              Delivery <span>${deliveryAmount}</span>
            </h2>
            <h2 className="flex justify-between">
              Tax (9%) <span>${taxAmount.toFixed(2)}</span>
            </h2>
            <hr />
            <h2 className="font-bold flex justify-between">
              Total: <span>${total.toFixed(2)}</span>
            </h2>
            {/* <Button onClick={()=>onApprove({paymentId:123})}>Payment <ArrowBigRight/></Button> */}
            {/* <Button onClick={() => addToOrder()}>
              {loading ? <Loader className="animate-spin" /> : "Make Payment"}
            </Button> */}
            <Button onClick={() => addToOrder()}>
              {loading ? <Loader className="animate-spin" /> : "Make Payment"}
            </Button>

            {/* {total > 5 && (
              <PayPalButtons
                disabled={!(username && email && address && zip) || loading}
                style={{ layout: "horizontal" }}
                onApprove={addToOrder}
                createOrder={(data, action) => {
                  return action.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: total.toFixed(2),
                          currency_code: "USD",
                        },
                      },
                    ],
                  });
                }}
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
