import $ from 'jquery';
import transitions from 'transitions';

const defaultController = {
    init: function (app, resolver) {
        const view = app.view;

        resolver.resolve();
    },
    enter: function (app, resolver) {
        const view = app.view;

        resolver.resolve();
    },
    leave: function (app, resolver) {
        const view = app.view;

        resolver.resolve();
    }
};

export default defaultController;