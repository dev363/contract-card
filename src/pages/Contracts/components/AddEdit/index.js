import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
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
  TextField,
  Box,
} from "@mui/material";
import { toast } from "react-toastify";

import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";

import Template from "components/Template";
import {
  isNumber,
  isEmailAddress,
  isNotEmpty,
  checkErrors,
} from "helpers/validations";
import { addContract, editContract } from "store/Actions";
import { useHistory, useParams } from "react-router-dom";
const INTIAL_STATE = {
  name: "",
  email: "",
  phone: "",
};
const AddEdit = ({ contracts, ...props }) => {
  const history = useHistory();
  const params = useParams();
  const [state, setState] = useState({ ...INTIAL_STATE });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (params.editId) {
      const contract = contracts?.list?.find((con) => con.id === params.editId);
      setState((pre) => ({
        ...pre,
        ...contract,
      }));
    } else {
      setState({
        ...INTIAL_STATE,
      });
    }
  }, [params]);
  useEffect(() => {
    const isError = checkErrors(errors);
    setDisable(isError);
  }, [errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const ERRORS = { ...errors };

    switch (name) {
      case "name": {
        const isAlready = contracts?.list?.findIndex((c) => c.name === value);
        if (!isNotEmpty(value)) {
          ERRORS[name] = "Required";
        } else if (isAlready !== -1) {
          ERRORS[name] = "Already Exist";
        } else {
          ERRORS[name] = "";
        }
        break;
      }
      case "email": {
        if (!isNotEmpty(value)) {
          ERRORS[name] = "Required";
        } else if (!isEmailAddress(value)) {
          ERRORS[name] = "Invalid Email address";
        } else {
          ERRORS[name] = "";
        }
        break;
      }

      case "phone": {
        if (!isNumber(value)) {
          ERRORS[name] = "Only numbers accepted";
        } else if (value.length !== 10) {
          ERRORS[name] = "Phone number must be 10 digits";
        } else {
          ERRORS[name] = "";
        }
        break;
      }
    }

    setState((pre) => ({
      ...pre,
      [name]: value,
    }));

    setErrors((pre) => ({
      ...pre,
      ...ERRORS,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isError = checkErrors(errors);
    if (isError) {
      toast.error("Please crear all errors");
      return;
    }

    if (params.editId) {
      props.editContract({ ...state }, ({ success, message }) => {
        if (success) {
          toast.success(message);
          history.push("/");
        }
      });
    } else {
      props.addContract(
        { ...state, favorite: false, id: uuidv4() },
        ({ success, message }) => {
          if (success) {
            toast.success(message);
            history.push("/");
          }
        }
      );
    }
  };
  return (
    <Template>
      <Box
        component="div"
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        <form method="post" onSubmit={handleSubmit}>
          <Box>
            <TextField
              error={errors["name"].length > 0}
              label="Name"
              fullWidth
              name="name"
              value={state.name}
              onChange={handleChange}
              helperText={errors["name"]}
              margin="normal"
            />
          </Box>

          <Box>
            <TextField
              error={errors["email"].length > 0}
              label="Email"
              fullWidth
              name="email"
              value={state.email}
              onChange={handleChange}
              helperText={errors["email"]}
              margin="normal"
            />
            <TextField
              error={errors["phone"].length > 0}
              label="Phone"
              fullWidth
              name="phone"
              value={state.phone}
              onChange={handleChange}
              helperText={errors["phone"]}
              margin="normal"
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              type="submit"
              size="large"
              disabled={disable || !state.name}
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Template>
  );
};

const mapStateToProps = ({ contracts }) => ({
  contracts,
});

const mapDispatchToProps = {
  addContract,
  editContract,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEdit);
