(this["webpackJsonpphoto-app"]=this["webpackJsonpphoto-app"]||[]).push([[0],{43:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=(a(48),a(23)),i=a(14),s=a(15),u=a(10),m=a(16),g=a(17),h=a(80),p=a(33),d=a.n(p);function y(e,t){return d.a.get("https://picsum.photos/v2/list?page=".concat(e,"&limit=").concat(t)).then((function(e){return e.data})).catch((function(e){console.log(e)}))}var b=a(34),f=a(79),E=a(75),v=a(76),T=a(77),w=a(81);var I=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.toggleImageType,a=e.imageType,n=e.setInputValues,r=e.downloadUrl,c=e.shareUrl;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,l.a.createElement(v.a,null,l.a.createElement(h.a,{onClick:t,variant:"outline-secondary",className:"float-right"},a?"GrayScale":"Coloured")),l.a.createElement(v.a,null,l.a.createElement(T.a,{className:"mb-3"},l.a.createElement(T.a.Prepend,null,l.a.createElement(T.a.Text,null,"Blur")),l.a.createElement(w.a,{placeholder:"Blur Level 1-10",type:"number",min:"0",max:"10",onChange:n,name:"blur"}))),l.a.createElement(v.a,null,l.a.createElement(T.a,{className:"mb-3"},l.a.createElement(T.a.Prepend,null,l.a.createElement(T.a.Text,null,"Width")),l.a.createElement(w.a,{placeholder:"Width",type:"number",min:"1",onChange:n,name:"width"}))),l.a.createElement(v.a,null,l.a.createElement(T.a,{className:"mb-3"},l.a.createElement(T.a.Prepend,null,l.a.createElement(T.a.Text,null,"Height")),l.a.createElement(w.a,{placeholder:"Height",type:"number",min:"1",onChange:n,name:"height"}))),l.a.createElement(v.a,null,l.a.createElement(h.a,{onClick:function(){return function(e){var t=document.createElement("a");t.href=e,t.download="true",document.body.appendChild(t),t.click(),document.body.removeChild(t),t=null}(r)},variant:"outline-primary",className:"float-right"},"Download Image"))),l.a.createElement(E.a,null,l.a.createElement(v.a,null,l.a.createElement(T.a,{className:"mb-3"},l.a.createElement(T.a.Prepend,null,l.a.createElement(T.a.Text,null,"Shareable Link")),l.a.createElement(w.a,{placeholder:"Shareable Link",type:"text",disabled:!0,value:c}),l.a.createElement(T.a.Append,null,l.a.createElement(h.a,{variant:"outline-success"},"Share"))))))}}]),a}(n.Component),k=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={imageType:!1,blur:0,height:500,width:400},e.toggleImageType=e.toggleImageType.bind(Object(u.a)(e)),e.setInputValues=e.setInputValues.bind(Object(u.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({imageType:this.props.imageType})}},{key:"toggleImageType",value:function(){this.setState((function(e){return{imageType:!e.imageType}}))}},{key:"setInputValues",value:function(e){this.setState(Object(b.a)({},e.target.name,Number(e.target.value)))}},{key:"render",value:function(){var e=this.props,t=e.isVisible,a=e.setModalVisible,n=e.selectedImage,r=this.state,c=r.imageType,o=r.blur,i=r.height,s=r.width,u="https://picsum.photos/id/".concat(n.id,"/").concat(s,"/").concat(i,"?").concat(c?"":"grayscale").concat(o>0?"&blur=".concat(o):"","\n    "),m="https://i.picsum.photos/id/".concat(n.id,"/").concat(s,"/").concat(i,".jpg?").concat(c?"":"grayscale").concat(o>0?"&blur=".concat(o):"");return l.a.createElement(f.a,{size:"xl",show:t,onHide:function(){return a(!1)},"aria-labelledby":"example-modal-sizes-title-lg"},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,{id:"example-modal-sizes-title-lg"},n.author)),l.a.createElement(f.a.Body,null,l.a.createElement(I,{imageType:c,toggleImageType:this.toggleImageType,setInputValues:this.setInputValues,downloadUrl:m,shareUrl:u}),l.a.createElement("img",{src:u,alt:n.id,className:"photo-gallery"})))}}]),a}(n.Component),O=(a(71),a(41));var S=function(e){var t=e.photoListData,a=e.imageType,n=e.fetchMoreData,r=e.toggleModal;return l.a.createElement(O.a,{dataLength:t.length,next:n,hasMore:!0,loader:l.a.createElement("h4",{className:"text-center"},"Loading...")},l.a.createElement(E.a,null,t.map((function(e,t){return l.a.createElement(v.a,{xs:"6",sm:"6",md:"2",className:"d-flex flex-column align-items-center",onClick:function(){return r(e)},key:t},l.a.createElement("img",{src:"https://picsum.photos/id/".concat(e.id,"/250/400?").concat(a?"":"grayscale"),height:"300",width:"250",alt:e.id,className:"photo-gallery p-2"}),l.a.createElement("h5",null,e.author))}))))};function j(e,t){localStorage.setItem(e,t)}function M(e){return localStorage.getItem(e)}var V=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).listenToScroll=function(){j("pageOffSet",window.pageYOffset)},e.state={photoListData:[],isVisible:!1,imageType:!0,selectedImage:{},currentPage:2},e.toggleImageType=e.toggleImageType.bind(Object(u.a)(e)),e.setModalVisible=e.setModalVisible.bind(Object(u.a)(e)),e.toggleModal=e.toggleModal.bind(Object(u.a)(e)),e.fetchMoreData=e.fetchMoreData.bind(Object(u.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.listenToScroll);var t=M("currentPage"),a=M("pageOffSet");Number(t)>=2?y(1,30+10*Number(t)).then((function(t){e.setState({photoListData:t}),window.scrollTo(0,Number(a))})):y(1,30).then((function(t){return e.setState({photoListData:t})}));"true"===M("imageType")?this.setState({imageType:!1}):this.setState({imageType:!0})}},{key:"toggleImageType",value:function(){this.setState((function(e){return{imageType:!e.imageType}})),j("imageType",this.state.imageType)}},{key:"setModalVisible",value:function(e){this.setState({isVisible:e})}},{key:"toggleModal",value:function(e){this.setState({isVisible:!0,selectedImage:e})}},{key:"fetchMoreData",value:function(){var e=this;y(this.state.currentPage,10).then((function(t){return e.setState((function(e){return{photoListData:[].concat(Object(o.a)(e.photoListData),Object(o.a)(t)),currentPage:e.currentPage+1}}),(function(){j("currentPage",e.state.currentPage)}))}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){var e=this.state,t=e.photoListData,a=e.imageType,n=e.isVisible,r=e.selectedImage;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement(h.a,{onClick:this.toggleImageType,variant:"primary",className:"float-right m-2"},a?"GrayScale":"Coloured"),l.a.createElement("div",{className:"clearfix"}),l.a.createElement(S,{photoListData:t,imageType:a,fetchMoreData:this.fetchMoreData,toggleModal:this.toggleModal})),n&&l.a.createElement(k,{isVisible:n,setModalVisible:this.setModalVisible,selectedImage:r,imageType:a}))}}]),a}(n.Component),x=(a(72),a(78));var D=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{fluid:!0},l.a.createElement("header",null,l.a.createElement("h1",{className:"text-center"},"Photos Gallery")),l.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.900f0715.chunk.js.map