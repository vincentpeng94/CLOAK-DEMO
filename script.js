// 简单 URL key 验证
const params = new URLSearchParams(window.location.search);
const key = params.get('key');

if (key === 'abc123') {
  document.getElementById('hidden-section').style.display = 'block';
  document.getElementById('hint').style.display = 'none';
}
