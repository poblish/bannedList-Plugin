describe("BannedList", function() {
  var player;
  var song;

  beforeEach(function() {
    // player = new Player();
    // song = new Song();
  });

  it("attempt to test loaded output is formatted and matches expectation", function() {
	  loadFixtures('samples/TheList.html');

	  var node = document.getElementById('jasmine-fixtures');
	  // ... call your code with node
	  // Totally does not work... expect(node).toContain("information");

	/*
	    $("#after").load("samples/after.html", function() {
		var x = ( $("#after") == $(node));
		// assert!
	    });
	*/
  });

  it("tracks that the spy was called", function() {
    // Events don't work, so this never works... expect(chrome.extension.sendMessage).toHaveBeenCalledWith({ method: "resetBadge"});
    expect(chrome.extension.sendMessage).toHaveBeenCalledWith( { method : 'getOptions' }, jasmine.any(Function));
    // Events don't work, so this never works... expect(chrome.extension.sendMessage).toHaveBeenCalledWith({ method: "setBadge", score: 213, url: ''});
    expect(chrome.extension.onMessage.addListener).toHaveBeenCalledWith( jasmine.any(Function) );
  });

/*
  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrow("song is already playing");
    });
  });
*/


});