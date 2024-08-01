const WithLogging = (WrappedComponent) => {
    class WithLogging extends React.Component {
        constructor(props) {
            super(props);
            this.wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name;
        }
        componentDidMount() {
            console.log(`Component ${this.wrappedComponentName || 'Component'} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${this.wrappedComponentName || 'Component'} is going to unmount`);
        }

        render() {
            return (<WrappedComponent {...this.props} />);
        }
    }
    WithLogging.displayName = `WithLogging(${this.wrappedComponentName || 'Component'})`
}