import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const API_URL = "https://69a5da9c885dcb6bd6a97ba6.mockapi.io/tiendadedulces/v1/Productos";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryMap = {
    acidos: "Acidos",
    chocolates: "Chocolates",
    paletas: "Paletas",
  };

  useEffect(() => {
    setLoading(true);

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error cargando productos");
        return res.json();
      })
      .then((data) => {
        const arrayData = Array.isArray(data) ? data : [];

        const filtered = categoryId
          ? arrayData.filter((item) =>
              item.Category === (categoryMap[categoryId] || categoryId)
            )
          : arrayData;

        setItems(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setItems([]);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <h2>Cargando productos...</h2>;
  if (items.length === 0) return <h2>No hay productos en esta categoría</h2>;

  return (
    <Grid container spacing={3} justifyContent="center">
      {items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              height: 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
            }}
          >
            <CardMedia
              component="img"
              image={
                item.Image && item.Image.startsWith("/images/")
                  ? item.Image
                  : "/images/placeholder.png"
              }
              alt={item.Name}
              sx={{
                width: 250,      
                height: 180,       
                objectFit: "cover",
                marginTop: 2       
              }}
            />

            <CardContent sx={{ flexGrow: 1, width: "100%" }}>
              <Typography gutterBottom variant="h6" align="center">
                {item.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Categoría: {item.Category}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }} align="center">
                ${item.Price.toFixed(2)}
              </Typography>
            </CardContent>

            <CardActions sx={{ width: "100%" }}>
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