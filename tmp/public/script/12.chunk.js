webpackJsonp([12],{286:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=window.exparser.registerElement({is:"wx-picker-view",template:'<div id="wrapper" class="wrapper"><slot></slot></div>',behaviors:["wx-base","wx-data-Component"],properties:{value:{type:Array,value:[],public:!0,observer:"_valueChanged"},indicatorStyle:{type:String,value:"",public:!0}},listeners:{"this.wxPickerColumnValueChanged":"_columnValueChanged"},attached:function(){this._initColumns()},_initColumns:function(){var e=this,t=this._columns=[];!function e(i){for(var n=0;n<i.childNodes.length;n++){var r=i.childNodes[n];r instanceof exparser.Element&&(r.hasBehavior("wx-picker-view-column")?t.push(r):e(r))}}(this);var i=Array.isArray(this.value)?this.value:[];t.forEach(function(t,n){t._setStyle(e.indicatorStyle),t._setHeight(e.$$.offsetHeight),t._setCurrent(i[n]||0),t._init()})},_columnValueChanged:function(){var e=this._columns.map(function(e){return e._getCurrent()});this.triggerEvent("change",{value:e})},_valueChanged:function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];(this._columns||[]).forEach(function(t,i){t._setCurrent(e[i]||0),t._update()})}})}});