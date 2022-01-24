import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    if (isAuth) {
        return (
            <button className="btn btn-primary" onClick={onLogout()}>
                Выйти из системы
            </button>
        );
    }
    return (
        <button className="btn btn-primary" onClick={onLogin()}>
            Войти
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
