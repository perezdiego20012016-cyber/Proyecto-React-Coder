import { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useCart } from "../context/CartContext";
import { createOrder } from "../firebase/db";

function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: form,
      items: cart,
      total: getTotalPrice(),
      date: new Date()
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (error) {
      console.error("Error creando orden:", error);
    }
  };

  // 🔥 SI YA COMPRÓ
  if (orderId) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 5 }}>
        ✅ Compra realizada con éxito <br />
        ID de orden: {orderId}
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper sx={{ padding: 4, width: 400 }}>
        <Typography variant="h5" align="center" sx={{ mb: 3 }}>
          Finalizar compra
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            name="name"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />

          <TextField
            label="Teléfono"
            name="phone"
            fullWidth
            margin="normal"
            required
            onChange={handleChange}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            type="submit"
          >
            Comprar
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Checkout;