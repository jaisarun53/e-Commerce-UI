import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";

const ProductCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "30%",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <CardMedia
        sx={{ height: 300 }}
        image="https://www.busyboo.com/wp-content/uploads/samsung-smart-tv-2.jpg"
        title="samsung tv"
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            Smart TV
          </Typography>

          <Chip label="Samsung" color="secondary" variant="outlined" />
        </Stack>
        <Typography sx={{ display: "flex", flexDirection: "row" }}>
          Price:$199
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          rerum officiis debitis quia quos. Itaque aliquid, repudiandae cum
          voluptatem provident tenetur quas molestias necessitatibus laboriosam,
          et expedita facilis? Iusto, neque.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" variant="contained" fullWidth>
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
