import { Fragment } from "react/jsx-runtime";

function Root() {
    return (
        <Fragment>
        <div className="root">
            <form action="EasyCounter">
                <button type="submit">Easy Counter</button>
            </form>
            <form action="EasyThermometer">
                <button type="submit">Easy Thermometer</button>
            </form>
            <form action="BasicRegistrationForm">
                <button type="submit">Basic Registration Form</button>
            </form>
            <form action="ReduxStore">
                <button type="submit">Store <b>Cart</b> (made with Redux)</button>
            </form>
        </div>
        <footer className="foot">
            <h5>Кильматов Айдар Раянович — GingerGenie</h5>
            <a href="https://github.com/GingerGenie/Some-React-projects" 
            target="blank">Github</a>
        </footer>
        </Fragment>
    )
}

export default Root;