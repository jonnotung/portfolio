//namespace for app
app = {};

//DOM references
app.$navButton = $(`.navExpandWrap`);
app.$navBar = $(`nav ul`);
app.$navItems = $(`nav li`);
app.$navLinks = $(`nav a`);
app.$portfolioNavProj = $(`.portfolioNavProj `);
app.$portfolioNavPub = $(`.portfolioNavPub `);
//sections for nav bar high lighting
app.$sections = $(`.linkSection`);

//'global' variables
//keeps track if nav is expanded or not
app.navExpanded = false;
//keeps track of whether projects or publications is chosen - true=projects false=pubs
app.portSwap = true;

//function to expand and close nav
//also swaps icon in button
app.expandNav = function() {
    app.$navButton.on(`click`, function() {
        if (app.navExpanded) {
            app.$navButton.html(
                `<label class="visuallyHidden">Expand navbar</label>
                <button class="navExpand" tabindex=0>
                    <i class="fas fa-bars"></i>
                </button>`
            );
            app.$navBar.toggleClass(`hiddenNav`);
        } else {
            app.$navButton.html(
                `<label class="visuallyHidden">Close navbar</label>
                <button class="navExpand" tabindex=0>
                    <i class="fas fa-times"></i>
                </button>`
            );
            app.$navBar.toggleClass(`hiddenNav`);
        }
        app.navExpanded = !app.navExpanded;
    }); 
} 

//function to close nav whenever a nav link is clicked
app.linkCloseNav = function() {
    app.$navLinks.on(`click`, function() {
        app.$navButton.html(
            `<label class="visuallyHidden">Expand navbar</label>
            <button class="navExpand" tabindex=0>
                <i class="fas fa-bars"></i>
            </button>`
        ).fadeIn();
        app.$navBar.toggleClass(`hiddenNav`);
    });
}


//function to swap to projects in portfolio
app.swapToProjects = function() {
    app.$portfolioNavProj.on(`click`, function() {
        app.$portfolioNavProj.addClass(`selected`);
        app.$portfolioNavPub.removeClass(`selected`);
        app.portSwap = true;
    })
}

//functiono to swap to publications in portfolio
app.swapToPublications = function() {
    app.$portfolioNavPub.on(`click`, function () {
        app.$portfolioNavPub.addClass(`selected`);
        app.$portfolioNavProj.removeClass(`selected`);
        app.portSwap = false;
    })
}

//function to high light nav link corresponding to section the user is in
app.scrollHighlightNav = function() {
    $(document).on(`scroll`, event => {
        let fromTop = $(document).scrollTop();
        
        //iterate over sections the nav links to
        Object.entries(app.$navLinks).forEach( link => {
            let section = $(`${link[1].hash}`);
            if(section.length > 0) {
                //check if user is in a section
                if(section[0].offsetTop <= fromTop && section[0].offsetTop + section[0].offsetHeight > fromTop) {
                    //if we are in the section give the corresponding nav link the current class
                   $(app.$navLinks[link[0]]).addClass(`current`);
                } else {
                    //otherwise remove the current class from nav link
                    $(app.$navLinks[link[0]]).removeClass(`current`);
                }
            }
        })
    })
}

//initialization wrapper function
app.init = function() {
    app.expandNav();
    app.linkCloseNav();
    app.swapToProjects();
    app.swapToPublications();
    app.scrollHighlightNav();
    //set fade duration for project modals
    $(`.portfolioTile`).click(function(event) {
        $(this).modal({
            fadeDuration: 200
        });
        return false;
    });
}

// document ready
$(function() {
    app.init();
})