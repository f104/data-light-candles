import $ from 'jquery';
import {TweenLite, TweenMax, TimelineLite, TimelineMax, Power0, Power1, Power2, Expo, Elastic} from "gsap/TweenMax";

const screen = function (key) {
    const sizes = {
        "xs": 375,
        "sm": 768,
        "md": 1024,
        "lg": 1270,
        "xl": 1600
    };

    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const size = sizes[key] ? sizes[key] : 0;

    return size <= w;
};

const lang = function (key) {
    return document.documentElement.lang === key;
};

const transitions = {
    main: {
        enter: (tween) => {

        }
    }
};

export default transitions;