const rootPageModule = (() => {

    function _testFactory() {
        const test = document.createElement('h1')
        test.textContent = "It's working!"

        return test
    }
    
    function displayAppInterface(root) {
        var test = _testFactory()

        root.appendChild(test)
    }

    return {
        displayAppInterface
    }

})();

export { rootPageModule }