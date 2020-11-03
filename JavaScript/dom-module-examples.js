var createDomElement = (() => {
    function createBasicElement(elementType, idLabel, classLabel)  {
        var element = document.createElement(`${elementType}`)
        element.id = idLabel
        element.classList.add(`${classLabel}`)

        return element
    }

    function createFormField() {
        var formField = document.createElement('div')

        return formField 
    }

    return { createBasicElement, createFormField };
})();

var changeDomElement = (() => {
    function changeTextContent(elementId, newTextContent) {
        var targetElement = document.querySelector(`#${elementId}`)
        targetElement.textContent = `${newTextContent}`
    }

    return { changeTextContent };
})();

var testDiv = createDomElement.createBasicElement('div', 'div-id', 'div-class')
target.appendChild(testDiv)

changeDomElement.changeTextContent('div-id', 'this is new text content')