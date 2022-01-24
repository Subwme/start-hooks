import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogoutButton = ({ onLogout }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogout}>
            Logout
        </button>
    );
};

LogoutButton.propTypes = {
    onLogout: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogout !== nextState.onLogout) {
        return false;
    }
    return true;
}

const MemoizedLogoutButton = React.memo(LogoutButton, areEqual);
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogout = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogoutButton onClick={handleLogout} />;
        </>
    );
};

export default MemoWithUseCallbackExample;
