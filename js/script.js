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
 */
$("textarea.body").keyup(function () {
  var value = $(this).val();
  $("span.body").text(value);
}).keyup();

