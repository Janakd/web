(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)
                    return a(o, !0);
                if (i)
                    return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND",
                f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
        s(r[o]);
    return s
})({
    "./public/js/modules/site.js": [function(require, module, exports) {
        $(function() {
            
            var within = 0;
            var wasWithin = null ;
            
            var tops = [
            $('[data-section="Home"]').position().top, 
            $('[data-section="Now"]').position().top, 
            $('[data-section="Projects"]').position().top, 
            $('[data-section="Contact"]').position().top 
            ];
            
            var $menuItems = $('.nav-item');
            
            function followMenu() {
                var top = $(window).scrollTop();
                for (var i = 0; i < tops.length; i++) {
                    if (top < tops[i] && top > 0) {
                        within = i - 1;
                        break;
                    } else if (top > tops[i] && i == tops.length - 1) {
                        within = tops.length - 1;
                    }
                }
                if (within !== wasWithin) {
                    $menuItems.removeClass('active').eq(within).addClass('active');
                    wasWithin = within;
                }
            }
            
            function setTops() {
                tops = [
            	$('[data-section="Home"]').position().top, 
            	$('[data-section="Now"]').position().top, 
            	$('[data-section="Projects"]').position().top, 
            	$('[data-section="Contact"]').position().top 
                ];
            }
            
            $menuItems.on('click', function(e) {
                var $section = $('[data-section="' + $(this).attr('data-control') + '"]');
                $('body,html').animate({
                    scrollTop: $section.find('[data-here]').position().top - window.innerHeight * 0.15
                }, '500', 'swing', function() {});
            });
            
            
            $(window).scroll(followMenu);
            $(window).resize(setTops);
            
            followMenu();
        
        });
    }
    , {}]
}, {}, ["./public/js/modules/site.js"]);
