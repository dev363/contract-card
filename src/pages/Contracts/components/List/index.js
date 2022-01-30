import React from "react";
import {
  Grid,
  Paper,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container,
  IconButton,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";

import Template from "components/Template";

const List = () => {
  return (
    <Template>
      <Grid spacing={5} container >
        <Grid item xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Contract name
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                <strong>Phone</strong> 999999
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                <strong>Email</strong> 999999@hhh.com
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="share">
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Template>
  );
};

export default List;
