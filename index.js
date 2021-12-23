class App extends React.Component {
    render() {
        return(
            <div>
                <Hello year="1989" />
            </div>
        );
    }
}

/* What component React DOM should render, where to render the component */
ReactDOM.render(<App />, document.getElementById("root"));