import { Link, useParams, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useForm } from "react-hook-form";
import '../css/Form.css';

const Registration = () => {
    const { logIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handler = data => {
        console.log(data);
        logIn();
    };

    const emailSettings = register("email", { required: true, maxLength: 20 });
    const passwordSettings = register("password",
        { required: {
            value: true,
            message: 'Password field is required!'
         }, maxLength: {
            value: 5,
            message: 'Max  len 5!'
        }
    });

    return (
        <form className="Form" onSubmit={handleSubmit(handler)}>
            <div className="Form__input">
                <label htmlFor="input-email">E-mail</label>
                <input type="email" id="input-email" placeholder="E-mail" {...emailSettings} />
                {errors?.email && <p className="Form__error">Email field is required!</p>}
            </div>
            <div className="Form__input">
                <label htmlFor="input-password">Пароль</label>
                <input type="text" id="input-password" placeholder="Пароль" {...passwordSettings} />
                {errors?.password && <p className="Form__error">{errors.password.message}</p>}
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