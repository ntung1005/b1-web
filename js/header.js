window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active')
}

// ---------------------- ---------------------- ---------------------- ---------------------- ----------------------

// Cache selectors

// 300

var lastId,
    topMenu = $("#myHeader"),
    topMenuHeight = topMenu.outerHeight() + 60,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 900);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
});


// Login 
let isLogin = false;

let account = ``;

if(isLogin){
    account =`
    <div class="dropdown show">
        <a class="btn-header dropdown-toggle" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            style="border:none;cursor: pointer;">
            <div style="align-items: center;display: flex;">
                <img src="https://static.nhadatmoi.net/default/user.png" alt=""
                    style="width: 40px;height: 40px;border-radius: 50%;margin-right: 12px;">
                <p style="margin: 0;">ntung7965@...</p>
            </div>
        </a>
    </div>
`;
}else{
    account = `
    <a href="./pages/login.html" class="btn-header">Đăng nhập</a>
    `;
}

let classAcountArea = document.getElementsByClassName("account-area");

for(let i=0;i<classAcountArea.length;i++){
    classAcountArea[i].innerHTML = account;
}
