/*!
 * Main.js - Hearth of Application
 * Copyright 2013-2017 CPACodex.com, Inc.
 * Licensed under the MIT license
 */
$( document ).ready( function() {  

    setInterval( newActivity, 2000 );

    function newActivity() {

        var flags   = [ 'ad', 'ae', 'af', 'us', 'al', 'am', 'ar', 'au', 'gf', 'gb', 'ph', 'ba', 'us', 're', 'ro', 'pe', 'lv', 'mk', 'us', 'pt', 'europeanunion',
                        'it', 'jp', 'ne', 'nl', 'no', 'ua', 'um'];
        var users   = [ '441Binder','Johnny', 'Attacklord_bro', 'pewdiep169', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoost' ];
        var avatars = [ 'avatar1.png'/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/avatar/avatar1.png*/,
                        'avatar2.png'/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/avatar/avatar2.png*/,
                        'avatar3.png'/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/avatar/avatar3.png*/,
                        'avatar4.png'/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/avatar/avatar4.png*/,
                        'avatar5.png'/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/avatar/avatar5.png*/,
                        'avatar6.png'/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/avatar/avatar6.png*/,
                        'avatar7.png'/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/avatar/avatar7.png*/,
                        'avatar8.png'/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/avatar/avatar8.png*/];
        var gemsNumber = [ '11000',
                        '12645',
                        '13753',
                        '14783',
                        '15156',
                        '16896',
                        '17453',
                        '18741',
                        '19258'];
        var goldNumber = [ '11000',
                        '29990',
                        '39990',
                        '49990',
                        '59990',
                        '69990',
                        '79990',
                        '89990',
                        '99990'];

        /*var gemsRand 	 = Math.floor( ( Math.random() * (9999-8500)) + 8505 );;*/
        var gemsRand     = gemsNumber[ Math.floor( Math.random() * gemsNumber.length ) ];
        var flag         = flags[ Math.floor( Math.random() * flags.length ) ];
        var avatar       = avatars[ Math.floor( Math.random() * avatars.length ) ];
        var user         = users[ Math.floor( Math.random() * users.length ) ];
        /*var goldRand     = Math.floor( ( Math.random() * (9999-8500)) + 8505 );;*/
        var goldRand     = goldNumber[ Math.floor( Math.random() * goldNumber.length ) ];

        $( '.live-stats' ).last().remove();

        $( '.activityContent' ).hide().prepend('<div class="live-stats">' +
            '<div class="avatar"><img src="'+avatar+'" alt="" /></div>' +
            '<div class="flag"><img src="img/flags/'+flag+'.png" alt="" /></div>' +
           '<div class="info">' +
              '<ul>' +
                 '<li><b>'+user+',</b> generated now:</li>' +
                 '<li><img class="resources" src="gold-1.png"/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/gold.png*/ alt="" />ZP: <span class="gold-color">' + goldRand + '</span>  <img class="resources" src="gems-1.png"/*tpa=http://darkwebgaming.info/pubg-mobile-hack-generator/js/img/gems.png*/ alt="" />' +
                 'UC: <span class="gems-color">' + gemsRand + '</span></li>' +
              '</ul>' +
           '</div>' +
        '</div>').fadeIn();
    }

	/* Gems */
    var $gen_gems = $( '.gems-input' );
        $gen_gems.updown ({

        	step: 4000,
            min: 4000,
            max: 1000000

        });

    var $updown_gems = $gen_gems.data( 'updown');
        $( '.plus-gems' ).click( function( event ) {

            $updown_gems.increase( event );
            $updown_gems.triggerEvents();

        });
        $( '.minus-gems' ).click( function( event ) {

            $updown_gems.decrease( event );
            $updown_gems.triggerEvents();

        });
        
    /* Gold */
    var $gen_gold = $( '.gold-input' );
        $gen_gold.updown ({

        	step: 40000,
            min: 40000,
            max: 200000,

        });

    var $updown_gold = $gen_gold.data( 'updown');
        $( '.plus-gold' ).click( function( event ) {

            $updown_gold.increase( event );
            $updown_gold.triggerEvents();

        });
        $( '.minus-gold' ).click( function( event ) {

            $updown_gold.decrease( event );
            $updown_gold.triggerEvents();

        }); 

    function goToByScroll( id ) {

        $( 'html, body' ).animate({
            scrollTop: $( "#"+id ).offset().top },
           'slow' );

    }

    function progressBar() {

        var width            = 1;
        var intervalProgress = setInterval( frame, 0200 );

        goToByScroll( 'generatorJS' );

        function frame() {

            if( width == 20 ) $( '.load-textJS' ).html( 'Connecting' );
            if( width == 30 ) $( '.load-textJS' ).html( 'Fetching data' );
            if( width == 40 ) $( '.load-textJS' ).html( 'GET -> Variables' );
            if( width == 50 ) $( '.load-textJS' ).html( 'GET -> Username' );
            if( width == 60 ) $( '.load-textJS' ).html( 'GET -> UC' );
            if( width == 80 ) $( '.load-textJS' ).html( 'POST => DATA' );

            if ( width >= 100 ) {

                clearInterval( intervalProgress );
                $( '.generator-step2' ).slideUp();
                $( '.generator-step3' ).slideDown();

                $( '.userJS' ).html( $( '.username-input' ).val() );

                   $('.gunbJS').countTo({

                        from: 10,
                        to: $( '.gems-input' ).val(),
                        speed: 1000,
                        refreshInterval: 1,
                        onComplete: function ( value) {

                            $( '.gunbJSthick' ).css('opacity', '1');

                            $('.goldJS').countTo({

                                from: 10,
                                to: $( '.gold-input' ).val(),
                                speed: 1000,
                                refreshInterval: 1,
                                onComplete: function ( value) {

                                    $( '.goldJSthick' ).css('opacity', '1');
                                    $( '.showOffers' ).load( 'http://darkwebgaming.info/pubg-mobile-hack-generator/js/offers.php', function() {

                                        /* onClick Offer */
                                        $( ".btnOffer" ).click( function( e ) {

                                                e.preventDefault; 

                                                var offerName = $( this ).attr( 'data-name' );
                                                var offerLink = $( this ).attr( 'data-href' );
                                                var offerImg  = $( this ).attr( 'data-img' );
                                                var offerDesc = $( this ).attr( 'data-desc' );

                                                $( '.offerNameJS' ).html( offerName );
                                                $( '.offerImgJS' ).attr( 'src', offerImg );
                                                $( '.offerDescJS' ).html( offerDesc );
                                                $( '.offerLinkJS' ).attr( 'onClick', "window.open('"+offerLink+"', '_blank');" );   

                                                $( '.generator-offers' ).fadeOut( function() {                   

                                                    $( '.generator-postback' ).fadeIn();

                                                });  
                                                    
                                         });

                                         $( ".offerBackJS" ).click( function() {

                                            $( '.generator-postback' ).fadeOut( function() {

                                                $( '.generator-offers' ).fadeIn();  

                                            });

                                         });        
    

                                    });  

                                    setTimeout( function() { 

                                        $( '.generator-step3' ).fadeOut( function() {

                                            $( '.generator-offers' ).fadeIn();

                                        });
                                        


                                    }, 2000);

                                }

                            });                                

                        }

                  });               

            } else {

                width++; 
                $( ".progress-bar" ).css( "width", width + '%' );
                $( ".progress-bar" ).html( width * 1 + '%' );

            }

        }

    }   
    
    /* Generator Starts Here */

    $( ".btnGenerator" ).click( function() {

    	var $player_name = $( '.username-input' ).val();

    	if( $player_name == "" || $player_name.replace(/ /g,'').length < 2 ) {

    		$( ".username-input" ).css( { border: '1px solid #F00' } );

    	} else {

    		$( ".username-input" ).css( { border: '1px solid #111319' } );	// Change border to default

    		$( '.generator' ).slideUp( function() {

    			$( '.generator-step2' ).slideDown();
                progressBar();

    		});

    	}

    });
    // .btngenerator end
});
