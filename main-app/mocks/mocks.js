var mocks;
(function () {
    'use strict';
    mocks = {
        $state: {
            $current: 'purchase',
            go: function(state){}
        },
        GameServerProxy: {
            APICall:function(){}
        }
    };
})();