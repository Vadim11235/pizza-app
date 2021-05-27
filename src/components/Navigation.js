import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { LINKS } from '../utils/constants';
import { useAuth } from "./AuthContext";
import logoutIcon from '../images/logout.svg';
import '../css/Navigation.css';



export default function Navigation() {
    const { authed, logOut } = useAuth();
    const history = useHistory();

    const Logout = () => {
        const handlerLogout = () => {
            logOut();
            history.push("/sign-in");
        };
        return (
            <li>
                <button className="Navigation__logout" onClick={handlerLogout}>
                    <img src={logoutIcon} alt="logout icon" />
                </button>
            </li>
        );
    };

    const [ page, setPage ] = useState("Order");
    const location = useLocation();
    useEffect(() => {
        let curPage = 'Sign In';
        for (const link of LINKS) {
            if(link.path === location.pathname) {
                curPage = link.title;
                break;
            }
        }
        setPage(curPage);
    }, [location]);

    document.title = `STAGING - ${page}`;

    const links = LINKS.filter(el => {
        let isAuthed = true;
        if('isAuthed' in el) {
            isAuthed = authed === el.isAuthed;
        }
        let isHidden = true;
        if('isHidden' in el) {
            isHidden = !el.isHidden;
        }
        return isHidden && isAuthed;
    });
    links.sort((a, b) => a.orderNav - b.orderNav);
    return (
        <header className="Navigation__header">
            <nav className="Navigation__nav">
                <ul className="Navigation__list">
                    {links.map(el => {
                        const data = {
                            className: "Navigation__link",
                            to: el.path
                        };
                        if(el.path === location.pathname) {
                            data.className += ' Navigation__link_active';
                        }
                        return (
                            <li key={el.path}>
                                <Link {...data}>{el.title}</Link>
                            </li>
                        );
                    })}
                    {authed ? <Logout key="logout" /> : null}
                </ul>
            </nav>
            <h1 className="Navigation__title">{page}</h1>
        </header>
    );
}