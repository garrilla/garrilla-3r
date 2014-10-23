dimensions = function(){
    if (Meteor.startup) {
    }
    Session.setDefault('width', screen.width);

    dimensions = {
        isUnsupported: {min: 0, max: 320},
        isMobilePortrait: {min: 320, max: 480},
        isMobileLandscape: {min: 480, max: 767},
        isTabletPortrait: {min: 767, max: 979},
        isTabletLandscape: {min: 979, max: 1023},
        isLargeLandscape: {min: 1023, max: 1281},
        isBigScreen: {min: 1281, max: Infinity}
    };

    _.each(
        dimensions, function (item, key) {
            Blaze._globalHelpers[key.toString()] = new Function(
                "return Session.get('width') >= " + "dimensions['" + key + "'].min"
                + " && Session.get('width') < " + "dimensions['" + key + "'].max"
            )
        }
    );

    window.addEventListener('resize', function () {
        //do something reactive here
        Session.set('width', screen.width)
    });

    Template.registerHelper('isLandscape',function(){
        return screen.width > screen.height;
    });

    Template.registerHelper('isHandheld',function(){
        return _.contains(['iPhone','iPod','iPad','Android','BlackBerry'],
                    navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)[0]
                );
    });



    return dimensions;
}()


