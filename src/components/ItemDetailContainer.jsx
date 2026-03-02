import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box, CardActions } from "@mui/material";

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => { if (count < stock) setCount(count + 1); };
  const handleDecrement = () => { if (count > 1) setCount(count - 1); };

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
  const API_URL = "https://69a5da9c885dcb6bd6a97ba6.mockapi.io/tiendadedulces/v1/Productos";

  useEffect(() => {
    setLoading(true);

    fetch(`${API_URL}/${itemId}`)
      .then((res) => res.json())
      .then((data) => { setItem(data); setLoading(false); })
      .catch((err) => { console.error("Error cargando producto:", err); setItem(null); setLoading(false); });
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    alert(`Agregaste ${quantity} unidad(es) de ${item?.Name} al carrito`);
  };

  if (loading) return <h2>Cargando producto...</h2>;
  if (!item) return <h2>Producto no encontrado</h2>;

  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h5">{item.Name}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Categoría: {item.Category}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ${item.Price.toFixed(2)}
        </Typography>

        <ItemCount onAdd={handleAddToCart} />
      </CardContent>

      <CardActions>
        <Button variant="contained" component={Link} to="/" fullWidth>
          Volver al listado
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemDetailContainer;