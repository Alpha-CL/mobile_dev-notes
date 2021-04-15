///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//-------------------------------------------------------------------------------------------------------------------//


const css = (el, attr) => {

    let transformAttr = [
        'rotate', 'rotateX', 'rotateY', 'rotateZ',
        'skewX', 'skewY',
        'scale', 'scaleX', 'scaleY',
        'translateX', 'translateY', 'translateZ',
    ];

    const type = o => {

        let str = Object.prototype.toString.call(o);

        return str.match(/\[object (.*)\]/)[1].toLowerCase();
    };

    // console.log(type(['opacity']));

    const getOrSet = type(attr) === 'object' ? false : true;

    if (getOrSet) {

        // @ts-ignore
        if (transformAttr.includes(attr)) {

            // @ts-ignore
            return transform();

        } else {

            return parseFloat(getComputedStyle(el)[attr]);
        }

    } else {

        const arrtKeys = Object.keys(attr);

        for (let v of arrtKeys) {

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

                } else {

                    return 0;
                }
            }

            return el.transform[attr];
        }

        for (let v of attrKeys) {

            el.transform[v] = attr[v];
        }

        let str = '';

        for (let v of attrKeys) {

            switch (v) {

                case 'rotate':
                case 'roatateX':
                case 'rotateX':
                case 'skewX':
                case 'skewX':
                    str += v + `(${el.transform[v]}deg) `
                    break;
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                    str += v + `(${el.transform[v]}) `
                    break;
                case 'translate':
                case 'translateX':
                case 'translateY':
                    str += v + `(${el.transform[v]}px) `
                    break;
            }
        }

        el.style.transform = str;
    }
};



//-------------------------------------------------------------------------------------------------------------------//




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
