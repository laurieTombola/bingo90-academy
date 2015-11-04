(function () {
    'use strict';

    describe('user details tests', function(){
        var userDetails  = {};
        beforeEach(function () {
            module('Tombola.Games.Bingo90.Values');
            inject(['UserDetails', function(_userDetails_){
                userDetails = _userDetails_;
            }]);
        });

        it('should equal an empty object', function(){
            userDetails.should.deep.equal({});
        });
    });

})();