(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QOK7:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var o=e("CcnG"),r=e("t/Na"),i=function(){function t(t){this.http=t}return t.prototype.getHundredUsers=function(){return this.http.get("https://randomuser.me/api/?results=101&inc=name,gender,email,picture,dob&noinfo&seed=ssdashboard")},t.prototype.getList=function(){return this.http.get("https://randomapi.com/api/do1zgi4d?key=LA2T-HR42-B5CQ-E4O6&results=10&fmt=raw")},t.ngInjectableDef=o.V({factory:function(){return new t(o.Z(r.c))},token:t,providedIn:"root"}),t}()},UYTb:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var o=e("CcnG"),r="usuario-logado",i=function(){function t(){}return t.prototype.salvarLocal=function(t,n){window.localStorage.setItem(r,JSON.stringify({email:t,password:n}))},t.prototype.getUser=function(){return window.localStorage.getItem(r)},t.ngInjectableDef=o.V({factory:function(){return new t},token:t,providedIn:"root"}),t}()}}]);