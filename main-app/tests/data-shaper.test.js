(function () {
    'use strict';

    describe('data-shaper tests', function(){
        var dataShaper  = null;
        beforeEach(function () {
            module('Tombola.Games.Bingo90.API');
            inject(['RequestShaper', function(_dataShaper_){
                dataShaper = _dataShaper_;
            }]);
        });

        it('makeLoginRequest should return the request object for a $http login request', function(){
            dataShaper.makeLoginRequest(123, 456).should.deep.equal({
                method: 'POST',
                url: 'http://eutaveg-01.tombola.emea:30069/users/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {"username":123, "password":456}
            })
        });
    });
})();