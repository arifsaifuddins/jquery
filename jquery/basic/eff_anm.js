$( document ).ready( function () {

  // effect (fade)

  $( '.fadeIn' ).click( function () {
    $( '.box' ).fadeIn( 'fast' ) // fast , slow , 1000
      .html( 'hello world' );
  } );

  $( '.fadeOut' ).click( function () {
    $( '.box' ).fadeOut( 'slow' ); // fast , slow , 1000
  } );

  $( '.fadeToggle' ).click( function () {
    $( '.box' ).fadeToggle( 2000 ); // fast , slow , 1000
  } );

  // effect (slide)

  $( '.slideUp' ).click( () => {
    $( '.box' ).slideUp( 1000 );
  } );

  $( '.slideDown' ).click( () => {
    $( '.box' ).slideDown( 1500 )
      .html( 'hello world' );
  } );

  $( '.slideToggle' ).click( () => {
    $( '.box' ).slideToggle( 1500 )
      .html( 'hello world' );
  } );

  $( '.stop' ).click( () => {
    $( '.box' ).stop();
  } );

  // animate

  $( '.moveRight' ).click( () => {
    $( '.ellipe' ).animate( {
      left: 100,
      width: '200px',
      height: '200px',
    } );
  } );

  $( '.moveLeft' ).click( () => {
    $( '.ellipe' ).animate( {
      left: 0,
      width: '100px',
      height: '100px',
    } );
  } );

  $( '.moveAround' ).click( () => {

    let ellipe = $( '.ellipe' );

    ellipe.animate( {
      left: 300
    } );
    ellipe.animate( {
      top: 300
    } );
    ellipe.animate( {
      left: 0,
      top: 300
    } );
    ellipe.animate( {
      left: 0,
      top: 0
    } );
  } );

} );