function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{KYcS:function(t,e,a){"use strict";a.r(e),a.d(e,"AuthenticationModule",(function(){return w}));var o,i,n,r=a("tyNb"),c=a("3Pt+"),l=a("fXoL"),b=a("Wp6s"),d=a("kmnG"),u=a("qFsG"),f=a("bTqV"),s=a("NFeN"),m=[{path:"",redirectTo:"signup",pathMatch:"full"},{path:"signup",component:(o=function(){function t(){_classCallCheck(this,t),this.hide=!0,this.signupForm=new c.d({email:new c.b("",{validators:[c.m.required,c.m.email],asyncValidators:[]})})}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=l.Hb({type:o,selectors:[["signup"]],decls:37,vars:8,consts:[[1,"container-fluid","px-0","h-100","theme-background","d-flex","flex-wrap","align-content-center"],[1,"col-lg-4","col-md-6"],[1,"bg-theme"],["autocomplete","disabled",1,"col-11","mx-auto","px-0"],[1,"control-full-width"],["matInput","","autocomplete","disabled",2,"color","#0ac2b8"],["matInput","","placeholder","pat@example.com","formControlName","email",2,"color","#0ac2b8"],["matInput","",2,"color","#0ac2b8",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"theme-text"],["matInput","",3,"type"],["mat-raised-button","",1,"my-3","control-full-width","signup-btn","fill-theme","font-weight-bold"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"mat-card",2),l.Sb(3,"div",3),l.Sb(4,"mat-form-field",4),l.Sb(5,"mat-label"),l.Bc(6,"Name"),l.Rb(),l.Ob(7,"input",5),l.Rb(),l.Sb(8,"mat-form-field",4),l.Sb(9,"mat-label"),l.Bc(10,"Contact"),l.Rb(),l.Ob(11,"input",5),l.Rb(),l.Sb(12,"mat-form-field",4),l.Sb(13,"mat-label"),l.Bc(14,"Email"),l.Rb(),l.Ob(15,"input",6),l.Rb(),l.Sb(16,"mat-form-field",4),l.Sb(17,"mat-label"),l.Bc(18,"Password"),l.Rb(),l.Ob(19,"input",7),l.Sb(20,"button",8),l.ac("click",(function(){return e.hide=!e.hide})),l.Sb(21,"mat-icon",9),l.Bc(22),l.Rb(),l.Rb(),l.Rb(),l.Sb(23,"mat-form-field",4),l.Sb(24,"mat-label"),l.Bc(25,"Confirm password"),l.Rb(),l.Ob(26,"input",10),l.Sb(27,"button",8),l.ac("click",(function(){return e.hide=!e.hide})),l.Sb(28,"mat-icon",9),l.Bc(29),l.Rb(),l.Rb(),l.Rb(),l.Sb(30,"mat-form-field",4),l.Sb(31,"mat-label"),l.Bc(32,"College (optoinal)"),l.Rb(),l.Ob(33,"input",5),l.Rb(),l.Sb(34,"div"),l.Sb(35,"button",11),l.Bc(36,"Signup"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.Bb(19),l.jc("type",e.hide?"password":"text"),l.Bb(1),l.Cb("aria-label","Hide password")("aria-pressed",e.hide),l.Bb(2),l.Cc(e.hide?"visibility_off":"visibility"),l.Bb(4),l.jc("type",e.hide?"password":"text"),l.Bb(1),l.Cb("aria-label","Hide password")("aria-pressed",e.hide),l.Bb(2),l.Cc(e.hide?"visibility_off":"visibility"))},directives:[b.a,d.b,d.e,u.a,c.a,c.h,c.c,f.a,d.f,s.a],styles:[".theme-background{background-image:url(books_background.0ade9a57aa7626105ad1.jpg);background-position:50%;background-repeat:no-repeat;background-size:cover}.signup-btn{background-color:rgba(230,173,0,.63);color:#003b38}.bg-theme{background-color:rgba(0,59,56,.86)}.theme-text{color:#ffc107}.control-full-width{width:100%}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#ffc107}.mat-form-field-label{color:#ffc107!important}.mat-form-field-underline{background-color:#ffc107!important}"],encapsulation:2}),o)}],p=((i=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:i}),i.\u0275inj=l.Kb({factory:function(t){return new(t||i)},imports:[[r.f.forChild(m)],r.f]}),i),h=a("PI13"),g=a("PCNd"),w=((n=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:n}),n.\u0275inj=l.Kb({factory:function(t){return new(t||n)},imports:[[g.a,h.a,p]]}),n)}}]);