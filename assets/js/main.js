$().ready(function () {
  $('div.content-table code')
    .tooltip({
      trigger: 'manual',
      title: 'Click to Copy',
    })
    .hover(function () {
      updateTooltipTitle(this, 'Click to Copy').tooltip('toggle');
    })
    .click(function () {
      //make copyable element
      const el = document.createElement('input');
      el.value = this.textContent;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.opacity = 0;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      updateTooltipTitle(this, 'Copied').tooltip('show');
    });
});

function updateTooltipTitle(elt, title) {
  return $(elt).attr('title', title).attr('data-original-title', title).tooltip('update');
}
