import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    "&:hover": {
      cursor: "pointer",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  option: {
    fontSize: 13,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  active: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
}));
const sections = [
  { title: "Business", url: "business" },
  { title: "Entertainment", url: "entertainment" },
  { title: "General", url: "general" },
  { title: "Health", url: "health" },
  { title: "Science", url: "science" },
  { title: "Sports", url: "sports" },
  { title: "Technology", url: "technology" },
];
export default function Header(props) {
  const classes = useStyles();
  const { category, setCountry, setCategory } = props;
  function aftersearch(e, v) {
    e.preventDefault();
    if (v !== null) {
      setCountry(v.code);
    }
  }
  function clickCat(e) {
    e.preventDefault();
    setCategory(e.target.text);
  }

  function setActive(title) {
    if (category === title) {
      return classes.active;
    } else {
      return "";
    }
  }
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Autocomplete
          id="country-select"
          style={{ width: 200, height: 50 }}
          options={countries}
          classes={{
            option: classes.option,
          }}
          defaultValue={countries[0]}
          onChange={(e, v) => aftersearch(e, v)}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(option) => (
            <React.Fragment>
              <span>{countryToFlag(option.code)}</span>
              {option.label} ({option.code})
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password",
              }}
            />
          )}
        />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          The News Now
        </Typography>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            onClick={(e) => clickCat(e)}
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            className={clsx(classes.toolbarLink, setActive(section.title))}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

const countries = [
  { code: "US", label: "United States", suggested: true },
  { code: "AE", label: "United Arab Emirates" },
  { code: "AR", label: "Argentina" },
  { code: "AT", label: "Austria" },
  { code: "AU", label: "Australia", suggested: true },
  { code: "BE", label: "Belgium" },
  { code: "BG", label: "Bulgaria" },
  { code: "BR", label: "Brazil" },
  { code: "CA", label: "Canada", suggested: true },
  { code: "CH", label: "Switzerland" },
  { code: "CN", label: "China" },
  { code: "CO", label: "Colombia" },
  { code: "CU", label: "Cuba" },
  { code: "CZ", label: "Czech Republic" },
  { code: "DE", label: "Germany", suggested: true },
  { code: "EG", label: "Egypt" },
  { code: "FR", label: "France", suggested: true },
  { code: "GB", label: "United Kingdom", suggested: true },
  { code: "GR", label: "Greece" },
  { code: "HK", label: "Hong Kong" },
  { code: "HU", label: "Hungary" },
  { code: "ID", label: "Indonesia" },
  { code: "IE", label: "Ireland" },
  { code: "IL", label: "Israel" },
  { code: "IN", label: "India" },
  { code: "IT", label: "Italy" },
  { code: "JP", label: "Japan", suggested: true },
  { code: "KR", label: "Korea, Republic of" },
  { code: "LT", label: "Lithuania" },
  { code: "LV", label: "Latvia" },
  { code: "MA", label: "Morocco" },
  { code: "MX", label: "Mexico" },
  { code: "MY", label: "Malaysia", suggested: true },
  { code: "NG", label: "Nigeria" },
  { code: "NL", label: "Netherlands" },
  { code: "NO", label: "Norway" },
  { code: "NZ", label: "New Zealand" },
  { code: "PH", label: "Philippines" },
  { code: "PL", label: "Poland" },
  { code: "PT", label: "Portugal" },
  { code: "RO", label: "Romania" },
  { code: "RS", label: "Serbia" },
  { code: "RU", label: "Russian Federation" },
  { code: "SA", label: "Saudi Arabia" },
  { code: "SE", label: "Sweden" },
  { code: "SG", label: "Singapore", suggested: true },
  { code: "SI", label: "Slovenia" },
  { code: "SK", label: "Slovakia" },
  { code: "TH", label: "Thailand" },
  { code: "TR", label: "Turkey" },
  { code: "TW", label: "Taiwan" },
  { code: "UA", label: "Ukraine" },
  { code: "VE", label: "Venezuela" },
  { code: "ZA", label: "South Africa" },
];

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}
