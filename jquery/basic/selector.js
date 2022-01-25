$( document ).ready( function () {

  // selector css // class & id & tag
  // $( 'h1' ).hide();
  // $( 'h1.heading' ).hide();
  // $( '#heading' ).hide();

  // .css('property', 'value')
  $( "p" ).css( 'color', 'red' );

  //selector css // pseudo
  $( 'ul#list li:first' ).css( 'color', 'salmon' );
  $( 'ul#list li:last' ).css( 'color', 'aqua' );

  $( 'ul#list li:even' ).css( 'background-color', 'blue' );
  $( 'ul#list li:odd' ).css( 'background-color', 'green' );
  $( 'ul#list li:nth-child(2n' ).css( 'color', 'grey' );

  // selector css // type of tag
  $( ':text' ).css( 'width', '200px' );
  $( ':submit' ).css( 'background', 'none' );
  $( ':reset' ).css( 'background', 'yellow' );

  // selector css // attribute
  $( '[href]' ).css( 'font-size', '30px' );
  $( '[href="http://google.com"]' ).css( 'color', 'green' );

} );