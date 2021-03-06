import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout, uid }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/companyList">
                    <h1>CluBis</h1>
                </Link>
                <div>
                    <Link className="button button--link" to={`/editUser/${uid}`}>Minha Conta</Link>
                    <button className="button button--link" onClick={startLogout}>Sair</button>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
    uid: state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);