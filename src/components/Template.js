import React, { Fragment } from "react";
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

import Header from "./Header";

export default (props) => {
  return (
    <Fragment>
      <Header></Header>
      <Container fixed style={{marginTop:10}}>{props.children}</Container>
    </Fragment>
  );
};
