// Import client startup through a single index entry point
import './routes.js';

Template.Header.rendered = function() {
    import './vendor/modernizr-2.6.2.min'
    import './vendor/jquery.zoomslider.min'
};
