(function () {
    'use strict';

    describe('GameServerProxy tests', function(){
        var gameServerProxy, $httpBackend;

        beforeEach(function(){
            module('Tombola.Games.Bingo90.API');

            inject(function($injector){
                gameServerProxy = $injector.get('GameServerProxy');
                $httpBackend = $injector.get('$httpBackend');
            });
        });

        it('should call the success callback', function(){
            $httpBackend.expectPOST('some url')
                .respond(function(){
                    return [200, {"message":'Success'}];
                });
            gameServerProxy.ApiCall({method: 'POST', url: 'some url'})
                .then(function(data){
                    data.message.should.equal('Success');
                });
            $httpBackend.flush();
        });

        it('should call the success callback', function(){
            $httpBackend.expectPOST('some url')
                .respond(function(){
                    return [401, {"message":'Failed Request'}];
                });
            gameServerProxy.ApiCall({method: 'POST', url: 'some url'})
                .then(function(data){}, function(response){
                    response.data.message.should.equal('Failed Request');
                });
            $httpBackend.flush();
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();