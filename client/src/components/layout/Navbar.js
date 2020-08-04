import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <Fragment>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            <i class="fas fa-server"></i>{" "}
            <span className="hide-sm">Developers</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-user "></i>{" "}
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li onClick={logout} className="nav-item">
          <a className="nav-link" href="#!">
            <i className="fas fa-sign-out-alt "></i>{" "}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            Developers
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <Link className="navbar-brand" to="/">
        DevConnector
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        {!loading && (
          <Fragment>{isAuthenticated ? guestLinks : authLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
