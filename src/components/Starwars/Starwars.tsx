import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getData } from "../../store/actions/getData";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import {
  IconButton,
  Table,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import Row from "./Detail";

const getUrl = (name: string = "person", page: number = 1) => {
  switch (name) {
    case "person":
      return `https://swapi.dev/api/people/?page=${page}`;
    case "movies":
      return `https://swapi.dev/api/films/?page=${page}`;
    case "planets":
      return `https://swapi.dev/api/planets/?page=${page}`;
    default:
      break;
  }
};

const Starwars = () => {
  const [page, setPage] = useState<number>(1);
  const { name }: any = useParams();
  const { data, isLoading, error, count } = useTypedSelector(
    (state) => state.user
  );

  const url = getUrl(name, page);
  const dispatch = useDispatch();

  useEffect(() => {
    setPage(1);
  }, [name]);

  useEffect(() => {
    dispatch(getData(url));
  }, [url]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      {page}/ {Math.ceil(count / 10)}
      {page !== 1 && (
        <IconButton
          aria-label="delete"
          size="medium"
          onClick={() => setPage(page - 1)}
        >
          <NavigateBefore fontSize="inherit" color="primary" />
        </IconButton>
      )}
      {page < count / 10 && (
        <IconButton
          aria-label="delete"
          size="medium"
          onClick={() => setPage(page + 1)}
        >
          <NavigateNext fontSize="inherit" color="primary" />
        </IconButton>
      )}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {data.map((user, index) => (
              <Row key={index} row={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Starwars;
