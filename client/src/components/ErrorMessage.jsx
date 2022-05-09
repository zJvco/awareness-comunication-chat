import '../styles/ErrorMessage.css';

function ErrorMessage(props) {
    return (
        <div className="error-message-container">
            <span>{props.message}</span>
        </div>
    )
}

export default ErrorMessage;