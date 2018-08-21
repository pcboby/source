(function (window) {
    window.$$ = function (selector) {
        return document.querySelectorAll(selector);
    }
    window.$dialog = function (options) {
        var dialogs = $$('.dialog');
        var defaultOptions = {
            // unit:'px',
            dropElmts: {
                head: '.dialog-drop-head',
                tl: '.dialog-drop-tl',
                tc: '.dialog-drop-tc',
                tr: '.dialog-drop-tr',
                cl: '.dialog-drop-cl',
                cc: '.dialog-drop-cc',
                cr: '.dialog-drop-cr',
                bl: '.dialog-drop-bl',
                bc: '.dialog-drop-bc',
                br: '.dialog-drop-br',
            },
            styles: {
                width: '320px',
                height: '240px',
                minWidth: '200px',
                minHeight: '100px',
                zIndex: 9999
            }
        };
        // 
        _forEachA(dialogs, function (dialog, idx) {

            var opts = _extend(defaultOptions, options);
            _style(dialog, opts.styles);
            _drop(dialog,opts);
            defaultOptions.styles.zIndex++;

        });
        // 设置对像中的drop事件
        function _drop(dialog, opts) {

            dialog.onmousedown = function (e) {
                e = e || window.event;
                _style(dialog, {
                    zIndex: defaultOptions.styles.zIndex++
                })
            };

            dialog.querySelector(opts.dropElmts.head).onmousedown = function (e) {
                e = e || window.event;

                var x = e.clientX;
                var y = e.clientY;
                var oL = dialog.offsetLeft;
                var oT = dialog.offsetTop;
                var oW = dialog.offsetWidth;
                var oH = dialog.offsetHeight;
                var pW = document.documentElement.clientWidth;
                var pH = document.documentElement.clientHeight;

                document.onmousemove = function (e) {
                    e = e || window.event;
                    var L = e.clientX - (x - oL);
                    var T = e.clientY - (y - oT);
                    if (L < 0) {
                        L = 0;
                    }
                    if (T < 0) {
                        T = 0;
                    }
                    if (L > pW - oW) {
                        L = pW - oW;
                    }
                    if (T > pH - oH) {
                        T = pH - oH;
                    }
                    _style(dialog, {
                        left: L + 'px',
                        top: T + 'px'
                    })
                };
                document.onmouseup = _mouseup;
                return false;
            };
            // 
            dialog.querySelector(opts.dropElmts.tl).onmousedown = function (e) {
                e = e || window.event;
                var y = e.clientY;
                var oT = dialog.offsetTop;
                var oH = dialog.offsetHeight;
                var x = e.clientX;
                var oL = dialog.offsetLeft;
                var oW = dialog.offsetWidth;
                document.onmousemove = function (e) {
                    e = e || window.event;
                    var T = e.clientY - y + oT;
                    var H = oH - e.clientY + oT;
                    var L = e.clientX - x + oL;
                    var W = oW - e.clientX + oL;
                    _style(dialog, {
                        top: T + 'px',
                        height: H + 'px',
                        left: L + 'px',
                        width: W + 'px',
                    })
                }
                document.onmouseup = _mouseup;
                return false
            }
            // 
            dialog.querySelector(opts.dropElmts.tc).onmousedown = function (e) {
                e = e || window.event;
                var y = e.clientY;
                var oT = dialog.offsetTop;
                var oH = dialog.offsetHeight;
                document.onmousemove = function (e) {
                    e = e || window.event;
                    var T = e.clientY - y + oT;
                    var H = oH - e.clientY + oT;
                    _style(dialog, {
                        top: T + 'px',
                        height: H + 'px'
                    })
                }
                document.onmouseup = _mouseup;
                return false
            }
            // 
            dialog.querySelector(opts.dropElmts.tr).onmousedown = function (e) {
                e = e || window.event;
                var y = e.clientY;
                var oT = dialog.offsetTop;
                var oH = dialog.offsetHeight;
                var oL = dialog.offsetLeft;
                var pW = document.documentElement.clientWidth;
                document.onmousemove = function (e) {
                    e = e || window.event;
                    var T = e.clientY - y + oT;
                    var H = oH - e.clientY + oT;
                    var W = e.clientX - oL;
                    if (W > pW - oL) {
                        W = pW - oL;
                    }
                    _style(dialog, {
                        top: T + 'px',
                        height: H + 'px',
                        width: W + 'px'
                    })
                }
                document.onmouseup = _mouseup;
                return false
            }
            // 
            dialog.querySelector(opts.dropElmts.cl).onmousedown = function (e) {
                e = e || window.event;
                var x = e.clientX;
                var oL = dialog.offsetLeft;
                var oW = dialog.offsetWidth;
                document.onmousemove = function (e) {
                    e = e || window.event;
                    var L = e.clientX - x + oL;
                    var W = oW - e.clientX + oL;
                    _style(dialog, {
                        left: L + 'px',
                        width: W + 'px',
                    })
                }
                document.onmouseup = _mouseup;
                return false
            }
            // 
            dialog.querySelector(opts.dropElmts.cr).onmousedown = function (e) {
                e = e || window.event;

                var oL = dialog.offsetLeft;
                var pW = document.documentElement.clientWidth;

                document.onmousemove = function (e) {
                    e = e || window.event;
                    var W = e.clientX - oL;
                    if (W > pW - oL) {
                        W = pW - oL;
                    }
                    _style(dialog, {
                        width: W + 'px'
                    });
                }
                document.onmouseup = _mouseup;
                return false;
            };
            // 
            dialog.querySelector(opts.dropElmts.bl).onmousedown = function (e) {
                e = e || window.event;
                var x = e.clientX;
                var oL = dialog.offsetLeft;
                var oW = dialog.offsetWidth;

                var oT = dialog.offsetTop;
                var pH = document.documentElement.clientHeight;
                document.onmousemove = function (e) {
                    e = e || window.event;
                    var L = e.clientX - x + oL;
                    var W = oW - e.clientX + oL;
                    var H = e.clientY - oT;
                    if (H > pH - oT) {
                        H = pH - oT;
                    }
                    _style(dialog, {
                        left: L + 'px',
                        width: W + 'px',
                        height: H + 'px'
                    })
                }
                document.onmouseup = _mouseup;
                return false
            }
            // 
            dialog.querySelector(opts.dropElmts.bc).onmousedown = function (e) {
                e = e || window.event;

                var oT = dialog.offsetTop;
                var pH = document.documentElement.clientHeight;

                document.onmousemove = function (e) {
                    e = e || window.event;
                    var H = e.clientY - oT;
                    if (H > pH - oT) {
                        H = pH - oT;
                    }
                    _style(dialog, {
                        height: H + 'px'
                    });
                }
                document.onmouseup = _mouseup;
                return false;
            };
            // 
            dialog.querySelector(opts.dropElmts.br).onmousedown = function (e) {
                e = e || window.event;

                var oT = dialog.offsetTop;
                var oL = dialog.offsetLeft;
                var pW = document.documentElement.clientWidth;
                var pH = document.documentElement.clientHeight;

                document.onmousemove = function (e) {
                    e = e || window.event;
                    var W = e.clientX - oL;
                    var H = e.clientY - oT;
                    if (W > pW - oL) {
                        W = pW - oL;
                    }
                    if (H > pH - oT) {
                        H = pH - oT;
                    }
                    _style(dialog, {
                        height: H + 'px',
                        width: W + 'px'
                    });
                }
                document.onmouseup = _mouseup;
                return false;
            };
        }
        // mouseup时，消除事件
        function _mouseup() {
            document.onmousemove = null;
            document.onmouseup = null;
        }
        // 设置样式
        function _style(elmt, styles) {
            _extend(elmt.style,styles)
        }
        // 遍历obj
        function _forEach(obj, callback) {
            for (var i in obj) {
                callback(obj[i], i)
            }
        }
        // 遍历array
        function _forEachA(arr, callback) {
            for (var i = 0; i < arr.length; i++) {
                callback(arr[i], i)
            }
        }
        // obj简单继承
        function _extend(a, b) {
            _forEach(b, function (item, idx) {
                a[idx] = item;
            })
            return a
        }

        return dialogs
    }
})(window)