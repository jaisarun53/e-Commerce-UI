import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";

const ProductCard = (props) => {
  console.log(props);
  return (
    <Card
      sx={{
        Width: "400px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <CardMedia
        sx={{ height: "400px", width: "400px" }}
        image="https://www.busyboo.com/wp-content/uploads/samsung-smart-tv-2.jpg"
        title={props.brand}
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>

          <Chip label={props.brand} color="secondary" variant="outlined" />
        </Stack>
        <Typography sx={{ display: "flex", flexDirection: "row" }}>
          Price:${props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
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
