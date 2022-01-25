$( document ).ready( function () {

  // // shorthand
  // $( '.btn1' ).click( function () {
  //   alert( 'button has been clicked' );
  // } );

  // // method .on
  // $( '.btn1' ).on('click', function () {
  //   alert( 'button has been clicked' );
  // } );

  // events (click)
  $( '.btn1' ).on( 'click', () => {
    $( '.paraf' ).hide();
  } );

  $( '.btn2' ).on( 'click', () => {
    $( '.paraf' ).show();
  } );

  $( '.btn3' ).on( 'click', () => {
    $( '.paraf' ).toggle();
  } );

  $( '.btn' ).dblclick( function ( e ) {
    alert( e.currentTarget.innerHTML );
    console.log( e );
  } );

  // events(hover/mouse)
  // $( '.mouse' ).hover( function () {
  //   $( '.paraf' ).css( 'color', 'green' );
  // } ); // shorthand

  // $( '.mouse' ).on( 'mousemove', function () {
  //   $( '.paraf' ).css( 'color', 'grey' );
  // } );

  $( '.mouse' ).on( 'mouseenter', function () {
    $( '.paraf' ).css( 'color', 'green' );
  } );

  $( '.mouse' ).on( 'mouseleave', function () {
    $( '.paraf' ).css( 'color', 'black' );
  } );

  $( '.mouse3' ).on( 'mouseup', function () {
    $( '.paraf' ).toggle();
  } );

  $( '.mouse3' ).on( 'mousedown', function () {
    $( '.paraf' ).toggle();
  } );

  // $( document ).on( 'mousemove', function ( e ) {
  //   $( '.coords' ).html( 'Coords = Y : ' + e.clientY + ', X : ' + e.clientX );
  // } );

  // focus, blur
  $( 'input' ).focus( function () {
    $( this ).css( 'background-color', 'salmon' );
  } );

  $( 'input' ).blur( function () {
    $( this ).css( 'background-color', 'red' );
  } );

  $( 'input#name' ).keyup( function ( e ) {
    $( '.coords' ).html( e.target.value );
  } );

  $( 'form' ).submit( function ( e ) {
    e.preventDefault();
    alert( 'submited' );
  } );

} );