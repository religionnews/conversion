/* Author:

*/


/**
 * jQuery to update field as displayed in <pre>
 *
 * This probably could be more DRY-ish, but there are so few fields, and so
 * many small differences among the fields, that individually controlling them
 * seems easier right now
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

/* label */
$("input.label").click(function () {
  var value = $('input:radio[name=label]:checked').val();
  $("span.label").text(value);
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
  if ( photosof != "" ) {
    $("span.photosof").text( "^Eds: Photos of " + photosof + " are available via religionnews.com<");
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
 * replaces all instances of double-spacing (but not triple-spacing)
 *
 * every line except the first line needs four spaces of indentation. to do
 * this, replace each line break with a line break plus four spaces
 *
 * @url http://stackoverflow.com/questions/2116558/fastest-method-to-replace-all-instances-of-a-character-in-a-string-javascript
 */
$("textarea.body").keyup(function () {
  var value = $(this).val();
  /* replace double-spacing */
  value = value.replace( /\n\n/g, "\n" );
  /* append four spaces to second line and beyond */
  value = value.replace( /\n/g, "\n    " );
  $("span.body").text(value);
}).keyup();

