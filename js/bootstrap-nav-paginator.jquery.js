/*!
 * Bootstrap Nav Paginator 1.0.2
 * Author: Robin Prugne
 */

/**
 * @summary     Bootstrap Nav Paginator
 * @description Pagination module for Bootstrap's nav component
 * @version     1.0.2
 * @file        bootstrap-nav-paginator.jquery.js
 * @author      Robin Prugne
 *
 * This source file is free software, available under the following license:
 *      MIT license
 */

let navs = [], pages_index = [], n_items_per_pages = [], selectors = [];

$(document).ready(function() {
    $('.nav-paginator').each(function(i,e){
        initialize(e,i);
        add_buttons(i);
        update_view(i);
        events(i);
    });
});

function initialize(e,i){
    navs[i] = e;

    if($(navs[i]).attr('data-paginator-item-count') !== undefined){
        if($(navs[i]).attr('data-paginator-item-count') > 0){
            n_items_per_pages[i] = $(navs[i]).attr('data-paginator-item-count');
            pages_index[i] = get_page_from_item(i, e.get(0).tagName.toLowerCase() === "ul" ? e.find('.active').parent() : e.find('.active'));
        }else{
            throw "Bootstrap Nav Paginator Error: attribute 'item count' must be a positive number.";
        }
    }else{
        throw "Bootstrap Nav Paginator Error: attribute 'item count' is missing.";
    }
}

function add_buttons(i){
    $(navs[i]).prepend(
        `
            <li class="nav-item">
                <a class="btn nav-paginator-prev" href="#">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-left" class="svg-inline--fa fa-angle-double-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 18px;">
                        <path fill="currentColor" d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"></path>
                    </svg>
                </a>
            </li>
        `
    );

    $(navs[i]).append(
        `
            <li class="nav-item">
                <a class="btn nav-paginator-next" href="#">
                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-right" class="svg-inline--fa fa-angle-double-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 18px;">
                        <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                    </svg>
                </a>
            </li>
        `
    );

    selectors[i] = [];
    selectors[i]['prev'] = $(navs[i]).children().first().children().first();
    selectors[i]['next'] = $(navs[i]).children().last().children().first();

    if($(navs[i]).attr('data-paginator-buttons-class') !== undefined){
        if($(navs[i]).attr('data-paginator-buttons-class').length > 0){
            $(navs[i]).attr('data-paginator-buttons-class').split(' ').forEach(function(c){
                $(selectors[i]['prev']).addClass(c);
                $(selectors[i]['next']).addClass(c);
            });
        }
    }
}

function update_view(i){
    let array_b = $(navs[i]).children().not(':first').not(':last');

    array_b.each(function(n,e){
        n < n_items_per_pages[i]*pages_index[i] && n >= n_items_per_pages[i]*(pages_index[i]-1) ? $(e).show() : $(e).hide();
    });

    pages_index[i] === 1 ? $(selectors[i]['prev']).addClass("disabled") : $(selectors[i]['prev']).removeClass("disabled");
    array_b.length <= n_items_per_pages[i] * pages_index[i] ? $(selectors[i]['next']).addClass("disabled") : $(selectors[i]['next']).removeClass("disabled");
}

function events(i){
    $(selectors[i]['next']).on("click", function(){
        pages_index[i]++;
        update_view(i);
    });

    $(selectors[i]['prev']).on("click", function(){
        pages_index[i]--;
        update_view(i);
    });
}

function get_page_from_item(i, item){
    let all_items = navs[i].children();
    let item_index = all_items.index(item);
    return parseInt(item_index/n_items_per_pages[i])+1;
}

//prototype function
$.fn.BsNavPaginator = function(item_count, buttons_class = "") {
    let i = navs.length;

    this.attr('data-paginator-item-count',item_count);
    this.attr('data-paginator-buttons-class',buttons_class);

    initialize(this,i);
    add_buttons(i);
    update_view(i);
    events(i);
}