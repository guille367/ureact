import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
// import $ from 'jquery';
import {Controls} from '../../components/Controls';

describe('Controls tests', () => {
    it('Should exists', () => {
        expect(Controls).toExist();

        describe('Controls functionality', () =>{
            it('Should render "start" control when the status is "Stopped"', () => {
                let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
                let ctrl = ReactDOM.findDOMNode(controls).getElementsByClassName('secondary')[0];
                expect(ctrl).toExist();
            });

            it('Should render "stop" control when the status is "Started"', () => {
                let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="stopped"/>);
                let ctrl = ReactDOM.findDOMNode(controls).getElementsByClassName('primary')[0];
                expect(ctrl).toExist();
            });
        });
    });
    
    
});