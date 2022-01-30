import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
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
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";

import Template from "components/Template";
import DeleteConfirm from "./DeleteConfirm";

import {
  removeContract,
  addFavirateContract,
  removeFavirateContract,
} from "store/Actions";

const List = ({ contracts, ...props }) => {
  const [open, setOpen] = useState(false);

  const [list, setList]= useState([])

  useEffect(()=>{
    const favorites= contracts?.list?.filter((l)=> l.favorite === true)
    setList(favorites)
  },[contracts])

  const deleteContract = (e) => {
    e.preventDefault();
    props.removeContract(open);
    setOpen(false);
  };

  const favoriteContract = (e, data) => {
    e.preventDefault();
    if (data.favorite) {
      props.removeFavirateContract(data.id);
    } else {
      props.addFavirateContract(data.id);
    }
  };

  console.log(list,45555)
  return (
    <Template>

      <Grid spacing={5} container>
      <Grid item xs={12} md={12}>
        <h3>Favorite Contract List</h3>
      </Grid>
        {list?.length < 1 ? (
          <Grid item xs={6} md={3}>
            <Alert severity="error">No Favorite Contract</Alert>
          </Grid>
        ) : (
          <Fragment>
            {/*** Remove Contract Start */}
            <DeleteConfirm
              open={open}
              setOpen={setOpen}
              deleteContract={deleteContract}
            />
            {/*** Remove Contract End */}

            {list?.map((contract, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography sx={{ fontSize: 18 }} color="text.secondary">
                      <strong>{contract.name}</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      <strong>Phone</strong> {contract.phone}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      <strong>Email</strong> {contract.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon
                        color={contract.favorite ? "secondary" : "default"}
                        onClick={(e) => favoriteContract(e, contract)}
                      />
                    </IconButton>
                    <IconButton aria-label="share">
                      <Link to={`/edit/${contract.id}`}>
                        <EditIcon />
                      </Link>
                    </IconButton>
                    <IconButton aria-label="share">
                      <DeleteIcon onClick={(e) => setOpen(contract.id)} />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Fragment>
        )}
      </Grid>
    </Template>
  );
};

const mapStateToProps = ({ contracts }) => ({
  contracts,
});

const mapDispatchToProps = {
  removeContract,
  addFavirateContract,
  removeFavirateContract,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
