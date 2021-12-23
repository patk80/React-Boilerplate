/* 
CLASS COMPONENTS:
-Accept Props and render content
-The "traditional" React component
-Must have a render method
-Must return something 
*/
class Hello extends React.Component {
    render() {
        return (
            /* Can only return ONE element. Can put a bunch of things in one <div> */
            <div>
                <h1>Hello World</h1>
                <p>Embedded JavaScript: (35 * 5) = {35 * 5}</p>
                <img src="img/think-this-album-cover.jpg" />
            </div>
        );
    }
}

/*  
FUNCTION COMPONENTS
-Accept Props and render content
-Historically used for simpler components
-Historically couldn't use important features like State/Lifecycle Methods
-HOWEVER, with the introduction to Hooks, we can now write full-features function components
*/
function Hello2() {
    return (
        /* Can only return ONE element. Can put a bunch of things in one <div> */
        <div>
            <h1>Hello World</h1>
            <h2>Hello World</h2>
            <h3>Hello World</h3>
        </div>
    );
}

/* What component React DOM should render, where to render the component */
ReactDOM.render(<Hello />, document.getElementById("root"));