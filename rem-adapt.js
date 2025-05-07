// 更新页面中的 rem 像素值展示
function updateRemValue() {
    const htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const remDisplay = document.getElementById('rem-value');
    remDisplay.textContent = htmlFontSize.toFixed(2) + 'px';
  }
  
  window.addEventListener('DOMContentLoaded', updateRemValue);
  window.addEventListener('resize', updateRemValue);
  
  