import React from "react";
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box"
function Login() {
    return (
        <Container maxWidth="xs">
            <h1>Login</h1>
            <form>
                <Box mb={2}>
                <TextField id="email" name="email" label="email" />
                <TextField id="password" name="password" label="password" type="password"/>
                <Button varient="contained" type="submit">Login</Button>
                </Box>
            </form>
        </Container>
    )
}

export default Login;