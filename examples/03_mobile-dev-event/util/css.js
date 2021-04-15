///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------------------------------------------------------------------------------//
var css = function (el, attr) {
    var transformAttr = [
        'rotate', 'rotateX', 'rotateY', 'rotateZ',
        'skewX', 'skewY',
        'scale', 'scaleX', 'scaleY',
        'translateX', 'translateY', 'translateZ',
    ];
    var type = function (o) {
        var str = Object.prototype.toString.call(o);
        return str.match(/\[object (.*)\]/)[1].toLowerCase();
    };
    // console.log(type(['opacity']));
    var getOrSet = type(attr) === 'object' ? false : true;
    if (getOrSet) {
        // @ts-ignore
        if (transformAttr.includes(attr)) {
            // @ts-ignore
            return transform();
        }
        else {
            return parseFloat(getComputedStyle(el)[attr]);
        }
    }
    else {
        var arrtKeys = Object.keys(attr);
        for (var _i = 0, arrtKeys_1 = arrtKeys; _i < arrtKeys_1.length; _i++) {
            var v = arrtKeys_1[_i];
            el.style[v] = v === 'opacity' ? attr[v] : attr[v] + 'px';
        }
        transform(arrtKeys);
    }
    function transform(attrKeys) {
        if (!el.transform) {
            el.transform = {};
        }
        if (getOrSet) {
            // @ts-ignore
            if (!Object.keys(el.transform).includes(attr)) {
                if (attr === 'scale') {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            return el.transform[attr];
        }
        for (var _i = 0, attrKeys_1 = attrKeys; _i < attrKeys_1.length; _i++) {
            var v = attrKeys_1[_i];
            el.transform[v] = attr[v];
        }
        var str = '';
        for (var _a = 0, attrKeys_2 = attrKeys; _a < attrKeys_2.length; _a++) {
            var v = attrKeys_2[_a];
            switch (v) {
                case 'rotate':
                case 'roatateX':
                case 'rotateX':
                case 'skewX':
                case 'skewX':
                    str += v + ("(" + el.transform[v] + "deg) ");
                    break;
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                    str += v + ("(" + el.transform[v] + ") ");
                    break;
                case 'translate':
                case 'translateX':
                case 'translateY':
                    str += v + ("(" + el.transform[v] + "px) ");
                    break;
            }
        }
        el.style.transform = str;
    }
};
//-------------------------------------------------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=css.js.map