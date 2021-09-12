import App from "./src";

// Start the mocking conditionally
if (__DEV__) {
    require('./src/_mock/server')
}

export default App;
