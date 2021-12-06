import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
  CardContent,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Row(row: any) {
  const { name }: any = useParams();
  let details = [
    "name",
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "gender",
    "birth_year",
  ];
  switch (name) {
    case "movies":
      details = ["title", "director", "producer", "release_date"];
      break;
    case "planets":
      details = ["name", "terrain", "population"];
      break;
    default:
      break;
  }

  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.row["name"] ?? row.row["title"]}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <CardContent>
                {details &&
                  details.map((data, index) => (
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                      component="div"
                      key={index}
                    >
                      {data
                        .replace(/[_]/g, " ")
                        .replace(/^\S/, (s) => s.toUpperCase())}
                      : {row.row[data]}
                    </Typography>
                  ))}
              </CardContent>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
