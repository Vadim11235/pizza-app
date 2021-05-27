import { Link, useParams, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";
import '../css/Form.css';

const Registration = () => {
    const { logIn } = useAuth();

    const handlerSubmit = e => {
        e.preventDefault();
        logIn();
    };

    return (
        <form className="Form" onSubmit={e => handlerSubmit(e)}>
            <div className="Form__input">
                <label htmlFor="input-email">E-mail</label>
                <input type="email" id="input-email" placeholder="E-mail" />
            </div>
            <div className="Form__input">
                <label htmlFor="input-password">Пароль</label>
                <input type="text" id="input-password" placeholder="Пароль" />
            </div>
            <Link className="Form__link" to="/sign-in">sign in</Link>
            <button className="Form__button">Зарегистрироваться</button>
        </form>
    );
};
const Login = () => {
    const { logIn } = useAuth();
    const { privatePage } = useParams();
    const history = useHistory();
    
    const handlerSubmit = e => {
        e.preventDefault();
        logIn();
        history.push("/" + (privatePage || ''));
    };

    return (
        <form className="Form" onSubmit={e => handlerSubmit(e)}>
            <div className="Form__input">
                <label htmlFor="input-email">E-mail</label>
                <input type="email" id="input-email" placeholder="E-mail" />
            </div>
            <div className="Form__input">
                <label htmlFor="input-password">Пароль</label>
                <input type="text" id="input-password" placeholder="Пароль" />
            </div>
            <Link className="Form__link" to="/sign-up">sign up</Link>
            <button className="Form__button">Войти</button>
        </form>
    );
};

export {Registration, Login};