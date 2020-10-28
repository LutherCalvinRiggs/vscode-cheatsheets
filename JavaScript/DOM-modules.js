var mainPageModule = (() => {
    // link to <div id="content">
    const content = document.getElementById("content");

    // create a <nav>
    function _buildNavBar() {
        // create a <nav>
        const navBar = document.createElement('nav');

        // create <img id='logo'>
        var _addNavLogo = (() => {
            const navLogo = document.createElement('img');
            navLogo.id = "nav-logo";
            navLogo.src = "path/to/image.jpg";
            
            return navLogo;
        })();

        var _addNavLinkList = (() => {
            // create <ul id="nav-link-list">
            const navLinkList = document.createElement('ul');
            navLinkList.id = "nav-link-list";
            
            var _addNavLink = (() => {
                // create <li id="link-id" class="nav-link">Link Name
                const navLink = document.createElement('li');
                navLink.innerText = "Link Name";
                navLink.id = "link-id";
                navLink.classList.add("nav-link");

                return navLink;
            })();
            
            // append <li> to <ul id="nav-link-list">
            navLinkList.appendChild(_addNavLink);

            return navLinkList;
        })();

        // assemble the navBar
        navBar.appendChild(_addNavLogo);
        navBar.appendChild(_addNavLinkList);

        return navBar;
    }

    function _buildMainPage() {
        // create <main>
        const main = document.createElement('main');
        main.style.backgroundColor = "red";
        main.style.backgroundImage = "path/to/image.jpg";

        return main;
    }

    function _buildFooter() {
        const footer = document.createElement('footer');

        const _footerLinkList = (() => {
            // create <ul id="footer-link-list">
            const footerLinkList = document.createElement('ul');
            footerLinkList.id = "footer-link-list";
            
            var _createFooterLi = (() => {
                // create <li class="footer-link">Footer Link Name
                const footerLi = document.createElement('li');
                footerLi.classList.add("footer-link");
                footerLi.textContent = "Footer Link Name";

                return footerLi;
            })();
            
            var _socialMediaIconLink = (() => {
                // create <li>
                const socialMediaLi = document.createElement('li');
                // create <a class="social-media-link">
                const socialMediaLink = document.createElement('a');
                socialMediaLink.classList.add("social-media-link");
                // create <img id="icon-name" class="social-media-icon" src="path/to/icon.png">
                const socialMediaIcon = document.createElement('img');
                socialMediaIcon.id = "icon-name";
                socialMediaIcon.classList.add("social-icon");
                socialMediaIcon.src = "path/to/icon.png";

                // assemble social media link
                socialMediaLink.appendChild(socialMediaIcon);
                socialMediaLi.appendChild(socialMediaLink);

                return socialMediaLi;
            })();

            var _createExternalLink = (() => {
                // create <li class="external-footer-link">
                const externalLinkLi = document.createElement('li');
                externalLinkLi.classList.add("external-link-li");
                // create <a class="external-link">
                const externalLink = document.createElement('a');
                externalLink.classList.add("external-link");
                externalLink.textContent = "External Link";

                // place <a> inside of <li>
                externalLinkLi.appendChild(externalLink);

                return externalLinkLi;
            })();

            // assemble footer info list
            footerLinkList.appendChild(_createFooterLi);
            footerLinkList.appendChild(_socialMediaIconLink);
            footerLinkList.appendChild(_createExternalLink);

            return footerLinkList;
        })();

        // assemble footer content
        footer.appendChild(_footerLinkList);
        
        return footer;
    }

    const buildMainPage = () => {
        // functios to build your page elements
        var navBar = _buildNavBar();
        var mainPage = _buildMainPage();
        var footer = _buildFooter();

        // append elements to <div id="content">
        content.appendChild(navBar);
        content.appendChild(mainPage);
        content.appendChild(footer);
    }

    return { buildMainPage };
})();

// export mainPageModule
export { mainPageModule };








// REUSABLE pageModule

var pageContentModule = (() => {
    // create <div id="page-content">
    var pageContent = document.createElement('div');
    pageContent.id = "page-content";
    pageContent.classList.add("page-content");
        



    var _createElement = (() => {
        // create <h1 id="element-id" class="element">Element
        var element = document.createElement('element');
        element.id = 'element-id';
        element.classList.add('element');
        element.textContent = "Element"
        
        return element;
    })();
    


    
    var _createImage = (() => {
        // create <h1 id="element-id" class="element">Element
        var image = document.createElement('img');
        image.id = 'image-id';
        image.classList.add('image');
        image.src = "path/to/image.jpg";
        
        return image;
    })();



    
    var _createLink = (() => {
        // create <h1 id="element-id" class="element">Element
        var link = document.createElement('a');
        link.id = 'image-id';
        link.classList.add('image');
        link.href = "url";
        
        return link;
    })();

    // build pageContent
    function _buildPage() {
        // append all page elements to pageContent
        pageContent.appendChild(_createElement);

        return pageContent;
    };

    // public function to reveal module code
    function showPageContent(mainContent) {
        mainContent.appendChild(_buildPage);
    }

    return { showPageContent }
})();

// export reusable pageModule
export { pageContentModule };











var contactFormModule = (() => {

    var _createContactForm = (() => {
        // create <form action="" method="post" class="contact-form">
        var contactForm = document.createElement('form');
        contactForm.action = "";    // can be overridden by `formaction` of a <button>
        contactForm.method = "post"; // sends to server
        contactForm.classList.add("contact-form");

        var _createFormField = (() => {
            // create <div id='form-field-id" class="form-field">
            var formField = document.createElement('div"')
            formField.id = "form-field-id";
            formField.classList.add('form-field');
    
            var _createFormLabel = (() => {
                // create <label for="same-as-input-id">Name
                var formLabel = document.createElement('label');
                formLabel.htmlFor = "same-as-input-id";
                formLabel.textContent = "Name";
    
                return formLabel;
            })();
    
            var _createFormInput = (() => {
                // create <input type="text" id="same-as-label-for" name="name" required>
                var nameInput = document.createElement('input');
                nameInput.type = "text";
                nameInput.id = "same-as-label-for";
                nameInput.name = "name";
                nameInput.required = true;
                
                return formInput;
            })();
    
            // build formField
            formField.appendChild(_createFormLabel);
            formField.appendChild(_createFormInput);
    
            return formField;
        })();
    
        var _submitButton = (() => {
            // <submit type="submit" value="Submit">
            var submitButton = document.createElement('button');
            submitButton.type = "submit";
            submitButton.value = "submit";
            submitButton.textContent = "Submit";
            submitButton.classList.add("submit-button");
    
            return submitButton; 
        })();

        // assemble form fields to the form
        contactForm.appendChild(_createFormField);
        contactForm.appendChild(_submitButton);

        return contactForm; 
    })();

    function showPageContent(mainContent) {
        mainContent.appendChild(_createContactForm);
    }

    return { showPageContent }
})();

// export reusable pageModule
export { contactFormModule };
