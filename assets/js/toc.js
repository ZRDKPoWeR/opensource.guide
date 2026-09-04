$(function() {
    $(document).click(function() {
      // Hiding ToC
      $('.toc-trigger').removeClass('toc-open').attr('aria-expanded', 'false');
      $('.toc-list').removeClass('is-shown');
    });

    // Toggle Nav on Click
    $('.toc-trigger').click(function(e) {
        // Prevent bubbling event for proper hiding
        e.stopPropagation();
        // Calling a function in case you want to expand upon this.
        var $trigger = $(this).toggleClass('toc-open');
        $trigger.attr('aria-expanded', $trigger.hasClass('toc-open') ? 'true' : 'false');
        $('.toc-list').toggleClass('is-shown');
    });
});
