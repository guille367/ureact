import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import {Countdown} from 'app/components/Countdown';

 describe('Countdown timer', function() {
    
    it('Should create countdown component', () =>{
        expect(Countdown).toExist();
    });

    it('Should start countdown', function(done){
        // Fix timeout
        this.enableTimeouts(false);

        let cd = TestUtils.renderIntoDocument(<Countdown/>);
        cd.handleCountdownSet(3);
        expect(cd.state.time).toBe(3);
        expect(cd.state.status).toBe('started');

        setTimeout(() => {
            expect(cd.state.status).toBe('stopped');
            done();
        }, 3001);
    });

});
