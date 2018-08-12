import $ from 'jquery';
import page from 'page';

var app = {
    init: function () {

        // Init page
        this.page = page;
        this.page.init.call(this);

    }
};

app.init();