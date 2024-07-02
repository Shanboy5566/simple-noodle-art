// 頁面加載後顯示動畫效果的圖片
document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.animated');
    images.forEach(function(image, index) {
        image.style.display = 'inline-block';
    });
});

function generateImage() {
    var input = document.getElementById('imageDescription').value;
    if (input.trim() === '') {
        return; // 如果沒有輸入文字，不執行後續操作
    }
    // 在這裡添加生成圖像的相關操作，例如向後端發送請求等
}
