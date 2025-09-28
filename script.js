function greet() {
  const name = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value;
  const msgDiv = document.getElementById('greetMsg');
  if (name.length < 8) {
    msgDiv.textContent = 'Name must be at least 8 characters.';
    msgDiv.style.color = '#fdcb6e';
    return;
  }
  if (password.length < 8) {
    msgDiv.textContent = 'Password must be at least 8 characters.';
    msgDiv.style.color = '#fdcb6e';
    return;
  }
  msgDiv.textContent = `Hello, ${name}! Welcome.`;
  msgDiv.style.color = '#00b894';
  document.getElementById('name').value = '';
  document.getElementById('password').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('button[onclick="greet()"]');
  const container = document.querySelector('.container');
  // btn.addEventListener('mouseenter', function() {
  //   btn.classList.add('moving');
  //   const cRect = container.getBoundingClientRect();
  //   const bRect = btn.getBoundingClientRect();
  //   const maxLeft = cRect.width - bRect.width - 10;
  //   const maxTop = cRect.height - bRect.height - 10;
  //   const left = Math.random() * maxLeft;
  //   const top = Math.random() * maxTop;
  //   btn.style.left = left + 'px';
  //   btn.style.top = top + 'px';
  // });

  // btn.addEventListener('mouseleave', function() {
  //   btn.classList.remove('moving');
  //   btn.style.left = '';
  //   btn.style.top = '';
  // });
});
