var VideoController = require('./videos'); 
var expect = require('expect');


describe('VideoController', function() {

    let underTest;

    beforeEach(function() {
        underTest = new VideoController;
    })

    context('when to add something', function() {
        it('should add a video to list', function() {
            var video = {'name':'Video 1', 'id':'1234'};
            underTest.add(video);
            const result = underTest.getAll();
            expect(result).toEqual([video]);
        });
    })
    context('when empty', function() {
        it('should return empty array', function() {
            const result = underTest.getAll();
            expect(result).toEqual([]);
        });
    });
    context('when to remove something', function() {
        it('should remove a video from list', function() {
            var video = {'name':'Video 1', 'id':'1234'};
            underTest.add(video);
            underTest.remove(0);
            const result = underTest.getAll();
            expect(result).toEqual([]);
        });
    })
    
});
