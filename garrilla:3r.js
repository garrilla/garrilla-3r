
    if(Meteor.startup){

        dimensions = {
            unsupported : { min : 0 , max : 320 } ,
            mobilePortrait : { min :320 , max : 480 } ,
            mobileLandscape : { min :480 , max : 767 } ,
            tabletPortrait : { min :767 , max : 979 } ,
            tabletLandscape : { min :979 , max : 1023 } ,
            largeLandscape : { min :1023 , max : 1281 } ,
            bigScreen : { min : 1281 }
        };

        browserTarget = function () {
            var template;
            _.filter(dimensions,function(num,key){
                //console.log(key)
                if (num.min < width && num.max > width)
                    return template = key })
            return template;
        };

        orientationChange = function(){
            Session.set("template", browserTarget());
        };

        window.addEventListener("resize",orientationChange);

        Session.setDefault("template", "blank");
    }


    Template.3r.helpers({
        target: function () {
            return [Session.get("template"), screen.mozOrientation || screen.orientation.type || screen.msOrientation , screen];
        }
    });

    Template.3r.rendered = function () {
        Session.set("template", browserTarget());
    };

    Template.unsupported.helpers({
       floor: function(){return dimensions.unsupported.max};
    });

    /** TODO is it possible to register global Helpers dynamically based on the dimensions object ? */
    Template.registerHelper("isUnsupported",
        function() {
            return screen.width >= dimensions.unsupported.min
            &&  screen.width < dimensions.unsupported.max ;
        });
    Template.registerHelper("isMobilePortrait",
        function() {
            return  screen.width >= dimensions.mobilePortrait.min
                &&  screen.width < dimensions.mobilePortrait.max ;
        });
    Template.registerHelper("isMobileLandscape",
        function() {
            return  screen.width >= dimensions.mobileLandscape.min
                &&  screen.width < dimensions.mobileLandscape.max ;
        });
    Template.registerHelper("isTabletPortrait",
        function() {
            return  screen.width >= dimensions.tabletPortrait.min
                &&  screen.width < dimensions.tabletPortrait.max ;
        });
    Template.registerHelper("isTabletLandscape",
        function() {
            return  screen.width >= dimensions.tabletLandscape.min
                &&  screen.width < dimensions.tabletLandscape.max ;
        });
    Template.registerHelper("isLargeLandscape",
        function() {
            return  screen.width >= dimensions.largeLandscape.min
                &&  screen.width < dimensions.largeLandscape.max ;
        });
    Template.registerHelper("isBigScreen",
        function() {
            return screen.width >= dimensions.bigScreen.min ;
        });

