(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{721:function(a,t,e){},734:function(a,t,e){"use strict";var r=e(721);e.n(r).a},752:function(a,t,e){"use strict";e.r(t);var r={data:function(){return{items:[1,2,3,4,5],flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"flex-start",alignContent:"flex-start",itemWidth:"20%",itemNums:5}},methods:{changeFlexDirection:function(a){this.flexDirection=a.target.value},changeFlexWrap:function(a){this.flexWrap=a.target.value},changeJustifyContent:function(a){this.justifyContent=a.target.value},changeAlignItems:function(a){this.alignItems=a.target.value},changeAlignContent:function(a){this.alignContent=a.target.value},changeWidth:function(a){this.itemWidth=a+"%"},onChange:function(a){this.items=[];for(var t=0;t<a;t++)this.items.push(t+1)}}},n=(e(734),e(15)),i=Object(n.a)(r,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"tips"},[a._v("flex-direction 决定主轴的方向")]),a._v(" "),e("a-radio-group",{attrs:{name:"radioGroup",defaultValue:"row"},on:{change:a.changeFlexDirection}},[e("a-radio",{attrs:{value:"row"}},[a._v("row")]),a._v(" "),e("a-radio",{attrs:{value:"column"}},[a._v("column")]),a._v(" "),e("a-radio",{attrs:{value:"row-reverse"}},[a._v("row-reverse")]),a._v(" "),e("a-radio",{attrs:{value:"column-reverse"}},[a._v("column-reverse")])],1),a._v(" "),e("div",{staticClass:"tips"},[a._v("flex-wrap 决定如果一条轴线排不下，如何换行")]),a._v(" "),e("a-radio-group",{attrs:{name:"radioGroup",defaultValue:"nowrap"},on:{change:a.changeFlexWrap}},[e("a-radio",{attrs:{value:"nowrap"}},[a._v("nowrap")]),a._v(" "),e("a-radio",{attrs:{value:"wrap"}},[a._v("wrap")]),a._v(" "),e("a-radio",{attrs:{value:"wrap-reverse"}},[a._v("wrap-reverse")])],1),a._v(" "),e("div",{staticClass:"tips"},[a._v("justify-content 定义了项目在主轴上的对齐方式")]),a._v(" "),e("a-radio-group",{attrs:{name:"radioGroup",defaultValue:"flex-start"},on:{change:a.changeJustifyContent}},[e("a-radio",{attrs:{value:"flex-start"}},[a._v("flex-start")]),a._v(" "),e("a-radio",{attrs:{value:"flex-end"}},[a._v("flex-end")]),a._v(" "),e("a-radio",{attrs:{value:"center"}},[a._v("center")]),a._v(" "),e("a-radio",{attrs:{value:"space-between"}},[a._v("space-between")]),a._v(" "),e("a-radio",{attrs:{value:"space-around"}},[a._v("space-around")])],1),a._v(" "),e("div",{staticClass:"tips"},[a._v("align-items 属性定义项目在交叉轴上如何对齐")]),a._v(" "),e("a-radio-group",{attrs:{name:"radioGroup",defaultValue:"flex-start"},on:{change:a.changeAlignItems}},[e("a-radio",{attrs:{value:"flex-start"}},[a._v("flex-start")]),a._v(" "),e("a-radio",{attrs:{value:"flex-end"}},[a._v("flex-end")]),a._v(" "),e("a-radio",{attrs:{value:"center"}},[a._v("center")]),a._v(" "),e("a-radio",{attrs:{value:"baseline"}},[a._v("baseline")]),a._v(" "),e("a-radio",{attrs:{value:"stretch"}},[a._v("stretch")])],1),a._v(" "),e("div",{staticClass:"tips"},[a._v("align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用")]),a._v(" "),e("a-radio-group",{attrs:{name:"radioGroup",defaultValue:"flex-start"},on:{change:a.changeAlignContent}},[e("a-radio",{attrs:{value:"flex-start"}},[a._v("flex-start")]),a._v(" "),e("a-radio",{attrs:{value:"flex-end"}},[a._v("flex-end")]),a._v(" "),e("a-radio",{attrs:{value:"center"}},[a._v("center")]),a._v(" "),e("a-radio",{attrs:{value:"space-between"}},[a._v("space-between")]),a._v(" "),e("a-radio",{attrs:{value:"space-around"}},[a._v("space-around")]),a._v(" "),e("a-radio",{attrs:{value:"stretch"}},[a._v("stretch")])],1),a._v(" "),e("a-row",[e("a-col",{attrs:{span:12}},[e("a-input-number",{attrs:{min:1,max:10},on:{change:a.onChange},model:{value:a.itemNums,callback:function(t){a.itemNums=t},expression:"itemNums"}}),a._v("\n      项目数量："+a._s(a.itemNums)+"\n    ")],1),a._v(" "),e("a-col",{attrs:{span:12}},[e("a-slider",{attrs:{defaultValue:20,min:10},on:{change:a.changeWidth}})],1)],1),a._v(" "),e("main",{style:{flexDirection:a.flexDirection,flexWrap:a.flexWrap,justifyContent:a.justifyContent,alignItems:a.alignItems,alignContent:a.alignContent}},a._l(a.items,function(t){return e("div",{staticClass:"item",style:{width:a.itemWidth,opacity:1-t/10}},[a._v(a._s(t))])}),0)],1)},[],!1,null,"5d65ccf0",null);t.default=i.exports}}]);