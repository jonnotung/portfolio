//namespace for app
app = {};

//DOM references
app.$navButton = $(`.navExpandWrap`);
app.$navBar = $(`nav ul`);
app.$navLinks = $(`nav a`);
app.$portfolioNavProj = $(`.portfolioNavProj `);
app.$portfolioNavPub = $(`.portfolioNavPub `);

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
            ).fadeIn();
            app.$navBar.toggleClass(`hiddenNav`);
        } else {
            app.$navButton.html(
                `<label class="visuallyHidden">Close navbar</label>
                <button class="navExpand" tabindex=0>
                    <i class="fas fa-times"></i>
                </button>`
            ).fadeIn();
            app.$navBar.toggleClass(`hiddenNav`);
        }
        app.navExpanded = !app.navExpanded;
    }); 
} 

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

//initialization wrapper function
app.init = function() {
    app.expandNav();
    app.linkCloseNav();
    app.swapToProjects();
    app.swapToPublications();

    //set fade duration for project modals
    $(`.portfolioTile`).click(function(event) {
        $(this).modal({
            fadeDuration: 150
        });
        return false;
    });
}

// document ready
$(function() {
    app.init();
})