(function( $ ) {

    "use strict";
    function menu_toggoler () {
        $('#cu_cat').click(function(){
            $('#cu_cat').addClass("active");
            $('#cu_sto').removeClass("active");
            $('#cat_pan').slideToggle();
            $('#sto_pan').slideUp();
        });
        $('#cu_sto').click(function(){
            $('#cu_sto').addClass("active");
            $('#cu_cat').removeClass("active");
            $('#sto_pan').slideToggle();
            $('#cat_pan').slideUp();
        });
    }
    function sm_menu_toggoler () {
        $('#sm_cu_cat').click(function(){
            $('#sm_cu_cat').addClass("active");
            $('#sm_cu_sto').removeClass("active");
            $('#sm_cat_pan').slideToggle();
            $('#sm_sto_pan').slideUp();
        });
        $('#sm_cu_sto').click(function(){
            $('#sm_cu_sto').addClass("active");
            $('#sm_cu_cat').removeClass("active");
            $('#sm_sto_pan').slideToggle();
            $('#sm_cat_pan').slideUp();
        });
    }
    function sm_user_dropdown (){
        $('.user_icon').click(function(){
            $('.user_icon').addClass("active");
        });
        $('.user_icon').on('click',function(){
            $('.user_menu').slideToggle()
            $('.dropdown-overlay').show()
        });
        $('.dropdown-overlay').on('click',function(){
            $('.user_menu').hide();
            $(this).hide();
        });
    }

    function reg_modal (){

        $("#wpu-reg-btn").click(function () {
            $(".wpu-modal").addClass("is-visible");
            $(".wpu-register-form").addClass("is-selected");
            $(".wpu-login-form").removeClass("is-selected");
            $(".wpu-form-reset-password").removeClass("is-selected");
        });

    }

    function lg_cat_menu_details () {
        const slider = document.querySelector('.lg-link-wrap');
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
            mouseDown = false;
        };

        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });

        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    }

    function sm_cat_menu_details () {
        const slider = document.querySelector('.sm-link-wrap');
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
            mouseDown = false;
        };

        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });

        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    }

    function sm_search_modal(){
        document.getElementById('btn_serch_modal').addEventListener('click', function() {
            document.getElementById('overlay').classList.add('is-visible');
            document.getElementById('modal').classList.add('is-visible');
        });

        document.getElementById('close-btn').addEventListener('click', function() {
            document.getElementById('overlay').classList.remove('is-visible');
            document.getElementById('modal').classList.remove('is-visible');
        });
        document.getElementById('overlay').addEventListener('click', function() {
            document.getElementById('overlay').classList.remove('is-visible');
            document.getElementById('modal').classList.remove('is-visible');
        });
    }

    function sm_search_style(){
        $("#btn_serch_modal").click(function () {
            $(".right-head-item").addClass("parent_static");
            $(".right-head-item").removeClass("parent_relative");
        });
        $("#btn_user_dropdown").click(function () {
            $(".right-head-item").addClass("parent_relative");
            $(".right-head-item").removeClass("parent_static");
        });
    }

    function store_link_wrap_carosel () {
        const slider = document.querySelector('.sm-store-link-wrap');
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
            mouseDown = false;
        };

        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });

        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    }

    function recent_coupon_carosel () {
        const slider = document.querySelector('.demo_1_section_content');
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
            mouseDown = false;
        };

        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });

        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    }

    function popular_brand_carosel () {
        const slider = document.querySelector('.popular-brand-item-wrap');
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
            mouseDown = false;
        };

        slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
        });

        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    }


$(document).ready(function(){
    //menu_toggoler();
    //sm_menu_toggoler();
    //sm_user_dropdown();
    reg_modal();
    //lg_cat_menu_details();
    //sm_cat_menu_details();
    //sm_search_modal();
    //sm_search_style();
    //store_link_wrap_carosel();
    //recent_coupon_carosel();
    //popular_brand_carosel();
    // all_store_tab();
});

})(jQuery);