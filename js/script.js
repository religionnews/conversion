/* Author:

*/


/**
 * jQuery to update field as displayed in <pre>
 *
 * This could be more DRY-ish, but there are so few fields, and so many small
 * differences among the fields, that individually controlling them seems
 * easier right now
 */

/* ident */
$("input.ident").keyup(function () {
  var value = $(this).val();
  $("span.ident").text(value);
}).keyup();

/* selector */
$("input.selector").keyup(function () {
  var value = $(this).val();
  $("span.selector").text(value);
}).keyup();

/* priority */
$("input.priority").keyup(function () {
  var value = $(this).val();
  $("span.priority").text(value);
}).keyup();

/* category */
$("input.category").keyup(function () {
  var value = $(this).val();
  $("span.category").text(value);
}).keyup();

/* format */
$("input.format").keyup(function () {
  var value = $(this).val();
  $("span.format").text(value);
}).keyup();

/* slug */
$("input.slug").keyup(function () {
  var value = $(this).val();
  $("span.slug").text(value);
}).keyup();

/* kicker */
$("input.kicker").click(function () {
  var value = $('input:radio[name=kicker]:checked').val();
  $("span.kicker").text(value);
}).keyup();

/* headline */
$("input.headline").keyup(function () {
  var value = $(this).val();
  $("span.headline").text(value);
}).keyup();

/* wordcount */
$("input.wordcount").keyup(function () {
  var value = $(this).val();
  $("span.wordcount").text(value);
}).keyup();

/* photosof */
$("input.photosof").keyup(function () {
  var photosof = $("input.photosof").val();
  if ( photosof ) {
    $("span.photosof").text( "\n^Eds: Photos of " + photosof + " are available via religionnews.com<");
  } else {
    $("span.photosof").empty();
  }
}).keyup();

/* categories */
$("input.categories").keyup(function () {
  var value = $(this).val();
  $("span.categories").text(value);
}).keyup();

/**
 * byline
 *
 * automatically uppercase
 *
 * @url http://jquerybyexample.blogspot.com/2010/09/jquery-code-convert-string-value-to.html
 */
$("input.byline").keyup(function () {
  var value = $(this).val().toUpperCase();
  $("span.byline").text(value);
}).keyup();

/**
 * year
 *
 * automatically insert current year
 *
 * @url http://forum.jquery.com/topic/get-current-year
 */
$("span.year").text( (new Date).getFullYear() );

/**
 * body
 *
 * every line except the first line needs four spaces of indentation. to do
 * this, replace each line break with a line break plus four spaces
 *
 * if the second instance of a quote is the last character of a line, and if
 * there is no space or new line following that character, the '' replace
 * fails.
 *
 * @url http://dan.hersam.com/tools/smart-quotes.html
 * @url http://stackoverflow.com/questions/2116558/fastest-method-to-replace-all-instances-of-a-character-in-a-string-javascript
 * @url http://stackoverflow.com/questions/2202811/converting-straight-quotes-to-curly-quotes
 */
$("textarea.body").keyup(function () {
  var value = $(this).val();
  /* replace double-spacing */
  value = value.replace( /\n\n/g, "\n" );
  /* append four spaces to second line and beyond */
  value = value.replace( /\n/g, "\n    " );
  /* replace a bunch of smart quotes and other fancy stuff */
  value = value.replace( /\u2018|\u2019|\u201A|\uFFFD/g, "'" );
  value = value.replace( /\u201c|\u201d|\u201e/g, '"' );
  value = value.replace( /\u02C6/g, '^' );
  value = value.replace( /\u2039/g, '<' );
  value = value.replace( /\u203A/g, '>' );
  value = value.replace( /\u2013/g, '-' );
  value = value.replace( /\u2014/g, '--' );
  value = value.replace( /\u2026/g, '...' );
  value = value.replace( /\u00A9/g, '(c)' );
  value = value.replace( /\u00AE/g, '(r)' );
  value = value.replace( /\u2122/g, 'TM' );
  value = value.replace( /\u00BC/g, '1/4' );
  value = value.replace( /\u00BD/g, '1/2' );
  value = value.replace( /\u00BE/g, '3/4' );
  value = value.replace(/[\u02DC|\u00A0]/g, " ");  
  /* replace @ with (at) */
  value = value.replace( /@/g, "(at)" );
  /* replace - with _ */
  value = value.replace( /-/g, "_" );
  /* replace the first instance of a double quote with `` */
  value = value.replace( /"(?=\w|$)/g, "``" );
  /* replace the other instance of a double quote (the only one remaining) with '' */
  value = value.replace( /"/g, "''" );
  /* replace the first instance of a single quote (determined by whether a space precedes it) with ` */
  value = value.replace( / '(?=\w|$)/g, " `" );
  /* place the result in span.body */
  $("span.body").text(value);
}).keyup();

