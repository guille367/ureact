import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import {Countdown} from 'app/components/Countdown';
import {Controls} from 'app/components/Controls';

 describe('Countdown timer', function() {
    
    it('Should create countdown component', () =>{
        expect(Countdown).toExist();
    });

    it('Should start countdown', function(done){
        // Fix timeout
        this.enableTimeouts(false);

        let cd = TestUtils.renderIntoDocument(<Countdown/>);
        cd.handleCountdownSet(1);
        expect(cd.state.time).toBe(1);
        expect(cd.state.status).toBe('started');

        setTimeout(() => {
            expect(cd.state.status).toBe('stopped');
            done();
        }, 1001);
    });

    it('Should pause countdown', function(done){
        // Fix timeout
        this.enableTimeouts(false);

        let cd = TestUtils.renderIntoDocument(<Countdown />);
        cd.handleCountdownSet(2);
        expect(cd.state.status).toBe('started');
        expect(Controls).toExist();

        setTimeout(() => {
            expect(cd.state.status).toBe('stopped');
            expect(Controls).toNotExist();
            done();
        },3000);

    });

    it('Should reset the countdown', () => {

    })

});
