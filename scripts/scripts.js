//namespace for app
app = {};

//DOM references
app.$navButton = $(`.navExpandWrap`);
app.$navBar = $(`nav ul`);

//'global' variables
app.navExpanded = false;

//function to expand and close nav
//also swaps icon in button
app.expandNav = function() {

    app.$navButton.on(`click`, function() {
        if (app.navExpanded) {
            app.$navButton.html(`<i class="fas fa-bars navExpand"></i>`).fadeIn();
            app.$navBar.toggleClass(`hiddenNav`);
        } else {
            app.$navButton.html(`<i class="fas fa-times navExpand"></i>`).fadeIn();
            app.$navBar.toggleClass(`hiddenNav`);
        }
        app.navExpanded = !app.navExpanded;
    }); 
} 

// document ready
$(function() {
    app.expandNav();
})