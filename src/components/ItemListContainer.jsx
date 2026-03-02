import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@mui/material";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // 🔹 Reemplaza esta URL con tu API real si tenés otra
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Filtrar por categoría si existe
        const filtered = categoryId
          ? data.filter((item) => item.category === categoryId)
          : data;

        setItems(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  if (items.length === 0) {
    return <h2>No hay productos en esta categoría</h2>;
  }

  return (
    <Grid container spacing={3} justifyContent="center">
      {items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              height: 300,
              display: "flex",
              flexDirection: "column",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6">
                {item.title || item.name} {/* Depende de la API */}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Categoría: {item.category}
              </Typography>

              <Typography variant="body1" sx={{ mt: 1 }}>
                ${item.price}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant="contained"
                fullWidth
                component={Link}
                to={`/item/${item.id}`}
              >
                Ver detalle
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemListContainer;