$( document ).ready( function () {

  // // .load(url, (response, status, xhr) => { })
  // $( '.loadData' ).load( './ajax/ajax.html', function ( response, status, xhr ) {

  //   console.log( response );
  //   if ( status == 'success' ) {
  //     alert( 'it went found' );
  //   } else if ( status == 'error' ) {
  //     alert( 'Error = ' + xhr.statusText );
  //   }
  // } );

  // $.get(url, data => { })
  $.get( './ajax/ajax.html', data => {
    $( '.getData' ).html( data );
  } );

  // $.getJSON(url, data => { data.each()})
  $.getJSON( './ajax/ajax.json', data => {
    $.each( data, ( i, dt ) => {
      $( '.jsonData' ).append( /*html*/ `
        <ul>
          <li>${ i, dt.first }</li>
          <li>${ i, dt.last }</li>
          <li>${ i, dt.email }</li>
        </ul>
        <br>`);
    } );
  } );

  // API ajax
  $.ajax( {
    method: 'GET',
    datatype: 'json',
    url: 'http://jsonplaceholder.typicode.com/posts'
  } ).done( data => {
    console.log( data );
    $.map( data, dt => {
      $( '.getAPIData' ).append( /*html*/ `
      <ul>
        <li>${ dt.id }</li>
        <li><h2>${ dt.title }</h2></li>
        <li><h4>${ dt.body }</h4></li>
      </ul>
      <br>`);
    } );
  } );

  // api(get)
  $.get( 'http://jsonplaceholder.typicode.com/posts', data => {
    console.log( data );
  } );

  //api(post)
  $( '.postAPIData' ).submit( e => {
    e.preventDefault();

    let title = $( '#title' ).val();
    let body = $( '#body' ).val();
    let url = 'http://jsonplaceholder.typicode.com/posts';

    $.post( url, {
      title: title,
      body: body,
    } ).done( data => {
      alert( 'post saved' );
      console.log( data );
    } );
  } );
} );

