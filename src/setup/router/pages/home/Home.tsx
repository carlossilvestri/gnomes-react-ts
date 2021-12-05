import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid animate__animated animate__fadeIn animate__faster">
                <div className="container ">
                    <h1 className="display-4 ">Welcome to Gnome town, ¨Brastlewark¨</h1>
                    <p className="lead ">This webpage can help you search gnomes around Brastlewark. Click <NavLink to="/gnomes">here</NavLink> to see gnomes around Brastlewark!</p>
                </div>
            </div>
        </>
    )
}
