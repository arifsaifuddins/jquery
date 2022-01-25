$( document ).ready( function () {

  // css

  $( '.paraf1' ).css( {
    color: 'red',
    background: '#aea',
    fontSize: '20px'
  } );

  // class

  // $( '.myclass' ).addClass( 'color' ).html( 'class' );
  // $( '.myclass' ).removeClass( 'color' ).html( 'class' );

  $( 'button[type="submit"]' ).click( function () {
    $( '.paraf2' ).toggleClass( 'color' );
  } );

  // text

  $( '.myclass' ).text( '<h1>Hello World</h1>' );
  $( '.mydiv' ).html( '<h1>Hello World</h1>' );

  $( 'ul' ).append( '<p>add paraf</p>' );
  $( 'ul' ).prepend( '<p>add paraf</p>' );

  $( '.paraf1' ).appendTo( '.paraf2' );

  $( 'ul' ).before( '<h2>add heading</h2>' );
  $( 'ul' ).after( '<h2>hello world</h2>' );

  // $( 'ul' ).empty();
  // $( 'ul' ).detach();

  // attribute

  $( '#input' ).attr( 'oninput', 'return background()' );
  $( '#input' ).attr( 'class', 'input' );
  setTimeout( () => {
    $( '#input' ).removeAttr( 'class', 'input' );
  }, 15000 );

  $( '#input' ).keyup( function ( e ) {
    let code = e.which;
    if ( code == 13 ) {
      e.preventDefault();
      $( 'ul' ).append( '<li>' + e.target.value + '</li>' );
    }
  } );

  let myArr = [ 'arief', 'ady', 'ahmad', 'joni' ];

  $.each( myArr, function ( i, val ) {
    $( '.users' ).append( '<li>' + ( i + 1 ) + val + '</li>' );
  } );

  let newArr = $( 'ul#list li' ).toArray();
  console.log( newArr );

} );