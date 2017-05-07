import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import {Clock} from '../../components/Clock';

describe('Clock tests', () =>{
    it('It should create clock', () =>{
        expect(Clock).toExist();
    });

    describe('formatSecondsFN', () => {

        let clock = TestUtils.renderIntoDocument(<Clock/>);
        it('should format seconds correctly', () =>{
            let minutes = 615;
            let result = clock.formatSeconds(minutes);
            let expectedRes = '10:15';

            expect(result).toBe(expectedRes);
        });

        it('should format seconds correctly', () =>{
            let minutes = 61;
            let result = clock.formatSeconds(minutes);
            let expectedRes = '01:01';

            expect(result).toBe(expectedRes);
        });
        
    });
});