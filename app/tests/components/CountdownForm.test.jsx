import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
// import $ from 'jquery';
import {CountdownForm} from 'app/components//CountdownForm';

describe('CountdownForm Tests', () => {
    
    it('Should create cdform', () => {
        expect(CountdownForm).toExist();
        
        describe('Testing cdform functions', () => {

            it('Should NOT call setTime on submit if invalid entry',() => {
                let spy = expect.createSpy();
                let clock = TestUtils.renderIntoDocument(<CountdownForm setTime={spy}/>);
                clock.refs.seconds.value = 'adsada';
                TestUtils.Simulate.submit(ReactDOM.findDOMNode(clock).getElementsByTagName('form')[0]);
                expect(spy).toNotHaveBeenCalled();
            });

            it('Should call setTime on submit',() => {
                let spy = expect.createSpy();
                let clock = TestUtils.renderIntoDocument(<CountdownForm setTime={spy}/>);
                clock.refs.seconds.value = '12312';
                TestUtils.Simulate.submit(ReactDOM.findDOMNode(clock).getElementsByTagName('form')[0]);
                expect(spy).toHaveBeenCalledWith(12312);
            });

        });
       
    });

});