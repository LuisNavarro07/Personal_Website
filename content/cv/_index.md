---
title: Curriculum Vitae
type: page
---

<div id="pdf-viewer" style="width: 100%; height: 800px;"></div>

<div style="text-align: center; margin-top: 20px;">
  <a href="./cv_len.pdf" download="CV_Luis_Navarro.pdf" class="btn btn-primary">Download CV</a>
</div>

<script>
  var url = './cv_len.pdf';

  // Asynchronously download PDF as an ArrayBuffer
  pdfjsLib.getDocument(url).promise.then(function(pdf) {
    // Fetch the first page
    pdf.getPage(1).then(function(page) {
      var scale = 1.5;
      var viewport = page.getViewport({ scale: scale });

      // Prepare canvas using PDF page dimensions
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      document.getElementById('pdf-viewer').appendChild(canvas);

      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  });
</script>