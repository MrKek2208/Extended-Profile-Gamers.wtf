// ==UserScript==
// @name         Gamers.wtf Extended Profile
// @namespace    http://mrkek.ovh
// @version      0.1
// @description  try to take over the world!
// @author       MrKek | Alex
// @match        https://gamers.wtf/board/user/*
// @require      https://cdn.jsdelivr.net/autolinker/0.27.0/Autolinker.min.js
// @icon         https://gamers.wtf/assets/img/logo/logo_128.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var profileStatus = $(".dl-horizontal > dd > font").text();
    var profileLevel = $(".dl-horizontal:contains('Level') > dd ").text();
    var profileDescription = $("#about > .pmb-block > .pmbb-body > .pmbb-view").text();
    console.log(profileDescription);
    var linkedText = Autolinker.link(profileDescription);
    $("#about > .pmb-block > .pmbb-body > .pmbb-view").empty();
    $('#about > .pmb-block > .pmbb-body > .pmbb-view').html(linkedText.replace(/\n/g, '<br />'));
    //$(".pmbb-view").append(linkedText);
    var color = null;
    if(profileStatus === "Online Now") {
        color = "#27ae60";
    } else {
        color = "#c0392b";
    }
    $(".pmo-pic").append('<div class="pmo-stat" style="background-color: ' + color + ' !important;"><h3 class="m-0 c-white">' + profileStatus + '</h3>Level: ' + profileLevel + '</div>');
})();