import '../styles/Form.css';

function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <h1>Cadastro</h1>
                <p>Já tem uma conta? Faça o <a href="/login">Login</a></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="username">Usuário</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="input-field">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="input-field">
                    <label htmlFor="confirm-password">Confirmar Senha</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                </div>
                <div className="submit-field">
                    <input type="submit" value="Cadastrar-se" />
                </div>
            </form>
        </div>
    );
}

export default Register;