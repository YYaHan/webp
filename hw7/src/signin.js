import React from 'react';

function Signin() {
    return (
        <form>
            <div className="formInner">
                <h2>Login</h2>
                <div className="formGroup">
                    <label htmlFor="name">帳號:</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="password">密碼:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <input type="submit" value="submit"></input>
            </div>
        </form>    
    );
}

export default Signin;