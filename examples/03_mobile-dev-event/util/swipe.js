// @import('./css');
//
// const swiper = ({wrap, dir = 'y', start, end}) => {
//
//     const scroll = wrap.children[0];
//
//     let startPoint = {},
//         startEle = {},
//         distance = {},
//         targetEle = {},
//         isDir = {
//             x: false,
//             y: false,
//         },
//         isFirstMove = true,
//         currPoint = {},
//         lastPoint = {};
//
//     wrap.addEventListener('touchstart', e => {
//
//         start && start.call(wrap, e);
//
//         startPoint = {
//             x: e.changedTouches[0].pageX,
//             y: e.changedTouches[0].pageY,
//         };
//
//         lastPoint = {...startPoint};
//
//         startEle = {
//             x: css(scroll, 'translateX'),
//             y: css(scroll, 'translateY'),
//         };
//     });
//
//     wrap.addEventListener('touchmove', e => {
//
//         currPoint = {
//             x: e.changedTouches[0].pageX,
//             y: e.changedTouches[0].pageY,
//         }
//
//         if (lastPoint.x === currPoint.x && lastPoint.y === currPoint.y) {
//
//             return;
//         }
//
//         distance = {
//             x: e.changedTouches[0].pageX - startPoint.x,
//             y: e.changedTouches[0].pageY - startPoint.y,
//         };
//
//         targetEle = {
//             x: startEle.x + distance.x,
//             y: startEle.y + distance.y,
//         };
//
//         if (isFirstMove) {
//
//             if (Math.abs(distance.x) > Math.abs(distance.y)) {
//
//                 isDir.x = true;
//                 isDir.y = isFirstMove = false;
//
//             } else {
//
//                 isDir.y = true;
//                 isDir.x = isFirstMove = false;
//             }
//         }
//
//         if (isDir[dir]) {
//
//             css(scroll, {[`translate${dir.toUpperCase()}`]: targetEle[dir]});
//             e.preventDefault();
//         }
//
//         lastPoint = {...currPoint};
//     });
//
//     wrap.addEventListener('touchend', e => {
//
//         end && end.call(wrap, e);
//
//         isFirstMove = true;
//
//         isDir = {
//             x: false,
//             y: false,
//         };
//     });
// };
//# sourceMappingURL=swipe.js.map