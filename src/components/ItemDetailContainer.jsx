import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

// Componente contador simple
function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
      <Button variant="outlined" onClick={handleDecrement}>-</Button>
      <Typography>{count}</Typography>
      <Button variant="outlined" onClick={handleIncrement}>+</Button>
      <Button variant="contained" onClick={() => onAdd(count)}>Agregar</Button>
    </Box>
  );
}

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // 🔹 Reemplaza la URL con tu API real si tenés otra
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando producto:", err);
        setItem(null);
        setLoading(false);
      });
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    alert(`Agregaste ${quantity} unidad(es) de ${item?.title || item?.name} al carrito`);
    // Aquí luego podrías conectar con un contexto de carrito
  };

  if (loading) return <h2>Cargando detalle...</h2>;
  if (!item) return <h2>Producto no encontrado</h2>;

  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h5">{item.title || item.name}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Categoría: {item.category}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ${item.price}
        </Typography>

        {/* Contador dentro del detalle */}
        <ItemCount onAdd={handleAddToCart} />
      </CardContent>
    </Card>
  );
}

export default ItemDetailContainer;