function showSection(id) {
    const sections = document.querySelectorAll('.content section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}
function addImageToSection(sectionId, imageUrl, altText) {
    const section = document.getElementById(sectionId);
    if (section) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = altText;
        img.style.width = '30%'; 
        img.style.height = 'auto';
        img.style.marginTop = '20px';
        img.style.cursor = 'pointer';
        section.appendChild(img);
        img.addEventListener('click', function() {
            zoomImage(img.src);
        });
    } else {
        console.error(`No section with ID: ${sectionId} found.`);
    }
}
function zoomImage(imageUrl) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = 999;
    document.body.appendChild(overlay);

    const zoomedImg = document.createElement('img');
    zoomedImg.src = imageUrl;
    zoomedImg.style.position = 'fixed';
    zoomedImg.style.top = '50%';
    zoomedImg.style.left = '50%';
    zoomedImg.style.transform = 'translate(-50%, -50%)';
    zoomedImg.style.maxWidth = '100%';  
    zoomedImg.style.maxHeight = '100%'; 
    zoomedImg.style.border = '5px solid #fff';
    zoomedImg.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    zoomedImg.style.zIndex = 1000;
    document.body.appendChild(zoomedImg);

    overlay.addEventListener('click', function() {
        document.body.removeChild(zoomedImg);
        document.body.removeChild(overlay);
    });
}

addImageToSection('hobbies', 'https://th.bing.com/th/id/OIP.B6WTaRFjjEtRxEBPvorYTgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7', 'Đá banh');

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const mailtoLink = `mailto:nampham071004@gmail.com?subject=Tin nhắn từ ${name}&body=Tên: ${name}%0AEmail: ${email}%0ATin nhắn: ${message}`;
    window.location.href = mailtoLink;
});
// Gắn liên kết vào chữ "Boxing"
document.addEventListener('DOMContentLoaded', function() {
    const boxingElement = document.getElementById('boxing');
    const boxingText = boxingElement.innerHTML;
    boxingElement.innerHTML = boxingText.replace('Boxing', '<a href="https://www.facebook.com/boxingquan2" target="_blank">Boxing</a>');
});
// Áp dụng hiệu ứng cho toàn bộ trang khi tải lần đầu
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('body *');

    elements.forEach((element, index) => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)'; // Hiệu ứng dịch chuyển lên
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`; // Hiệu ứng nối tiếp
    });

    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)'; // Trở về vị trí ban đầu
        });
    }, 100); // Bắt đầu hiệu ứng sau khi các phần tử được thiết lập
});

// Hiển thị phần nội dung với hiệu ứng chuyển đổi khi nhấp vào menu
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content section');

    sections.forEach(section => {
        // Ẩn tất cả các section khác với hiệu ứng mờ dần và dịch chuyển xuống
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)'; // Dịch chuyển xuống để ẩn đi
        setTimeout(() => {
            section.style.display = 'none';
            section.classList.remove('active');
        }, 500);
    });

    // Hiển thị section mới với hiệu ứng mờ dần và dịch chuyển lên
    setTimeout(() => {
        const activeSection = document.getElementById(sectionId);
        activeSection.style.display = 'block';
        activeSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        activeSection.style.opacity = 1;
        activeSection.style.transform = 'translateY(0)'; // Trở về vị trí ban đầu
        activeSection.classList.add('active');
    }, 500);
}

// Áp dụng hiệu ứng cho tất cả các mục navigation và hình ảnh
document.querySelectorAll('nav a, header img, header h1').forEach((element, index) => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(-20px)'; // Hiệu ứng dịch chuyển xuống khi xuất hiện
    element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)'; // Trở về vị trí ban đầu
    }, 100);
});



