//namespace for app
app = {};

//DOM references
app.$navButton = $(`.navExpandWrap`);
app.$navBar = $(`nav ul`);
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
    app.swapToProjects();
    app.swapToPublications();
}

// document ready
$(function() {
    app.init();
})