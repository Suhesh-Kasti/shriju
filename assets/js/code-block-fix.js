// JavaScript to fix code block spacing issues
document.addEventListener('DOMContentLoaded', function() {
  // Find all code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  
  // Process each code block
  codeBlocks.forEach(function(codeBlock) {
    // Remove any <br> tags that might be causing extra spacing
    const brTags = codeBlock.querySelectorAll('br');
    brTags.forEach(function(br) {
      br.remove();
    });
    
    // Get the HTML content
    let html = codeBlock.innerHTML;
    
    // Replace multiple newlines with single newlines
    html = html.replace(/\n\s*\n\s*\n/g, '\n');
    html = html.replace(/\n\s*\n/g, '\n');
    
    // Update the HTML
    codeBlock.innerHTML = html;
    
    // Set the line-height directly on the code element
    codeBlock.style.lineHeight = '1.4';
    
    // Find all line elements and ensure they have consistent spacing
    const lineElements = codeBlock.querySelectorAll('.line, span, div');
    lineElements.forEach(function(element) {
      element.style.margin = '0';
      element.style.padding = '0';
      element.style.lineHeight = '1.4';
      element.style.minHeight = '0';
    });
  });
});
