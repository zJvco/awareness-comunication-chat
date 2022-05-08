import '../styles/Form.css';

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <h1>Login</h1>
                <p>Ainda não tem uma conta? <a href="/cadastro">Cadastrar-se</a></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="username">Usuário</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="submit-field">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
}

export default Login;