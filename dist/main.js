(()=>{"use strict";const e=()=>({myHeading:(e,n)=>{const t=document.createElement("h3");return t.innerHTML=n,t.classList=e,{heading1:t}},myInput:(e,n,t)=>{const o=document.createElement("input");return o.type=e,o.placeholder=n,o.classList=t,{input1:o}},myButton:(e,n)=>{const t=document.createElement("button");return t.innerHTML=n,t.classList=e,{myButton:t}},myDiv:(e,n)=>{const t=document.createElement("div");return t.classList=e,t.innerHTML=n,{myDiv:t}},myIcon:e=>{const n=document.createElement("i");return n.classList=e,{myIcon:n}}});const n=document.querySelector(".content"),t=function(){const n=e().myDiv("nav-bar-class","").myDiv,t=e().myHeading("nav-heading-class","").heading1;if(n.appendChild(t),localStorage.getItem("name"))t.innerHTML=`Welcome ${localStorage.getItem("name")}`;else{const e=prompt("Enter your name");localStorage.setItem("name",e),console.log("phle se naam nahi hai"),t.innerHTML=`welcome ${e}`}return n}(),o=function(){const n=e().myDiv("quote-author-class","").myDiv,t=e().myDiv("quote-class","").myDiv,o=e().myDiv("author-class","").myDiv;return n.appendChild(t),n.appendChild(o),async function(){try{const e=await fetch("https://api.quotable.io/random");if(!e.ok)throw e.statusText;const n=await e.json();t.innerHTML=n.content,o.innerHTML=`-${n.author}`}catch(e){console.log(e),alert("sorry could not find out a new quote hope you are doing well")}}(),n}(),i=e().myDiv("quote-author-class-class","").myDiv;i.appendChild(o),t.appendChild(i),n.appendChild(t),console.log(o);const a=function(){const n=e().myDiv("lower-body","").myDiv,t=e().myDiv("lower-left-body","").myDiv,o=e().myDiv("lower-right-body","").myDiv;return function(n){const t=e().myDiv("heading-lower-left-icon","").myDiv,o=e().myHeading("heading-lower-left","Projects").heading1,i=e().myIcon("fas fa-plus").myIcon;t.appendChild(o),t.appendChild(i),n.appendChild(t);let a=!1;const c=e().myDiv("new-project-div","").myDiv;i.addEventListener("click",(()=>{if(!a){const n=function(){const n=e().myInput("text","Enter the name of the project","input-project-name-class").input1;return n.autofocus=!0,n}();c.appendChild(n),n.addEventListener("keyup",(e=>{var t;13==e.keyCode&&(t=n.value,console.log(t))}))}a=!0})),n.appendChild(c)}(t),n.appendChild(t),n.appendChild(o),n}();n.appendChild(a)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvbmF2YmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yYW5kb21RdW90ZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcGxldGVCb2R5LmpzIl0sIm5hbWVzIjpbIm15RWxlbWVudCIsIm15SGVhZGluZyIsImNsYXNzSHRtbCIsImlubmVySHRtbCIsImhlYWRpbmcxIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwibXlJbnB1dCIsImlucHV0VHlwZSIsImlucHV0UGxhY2Vob2xkZXIiLCJpbnB1dENsYXNzIiwiaW5wdXQxIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibXlCdXR0b24iLCJidXR0b25DbGFzcyIsImJ1dHRvbkh0bWwiLCJteURpdiIsImRpdkNsYXNzIiwiZGl2SHRtbCIsIm15SWNvbiIsImljb25DbGFzcyIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2RGl2IiwibmF2SGVhZGluZyIsImFwcGVuZENoaWxkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm5hbWUiLCJwcm9tcHQiLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIm5hdkJhciIsInF1b3RlQXV0aG9yRGl2IiwicXVvdGVEaXYiLCJxdW90ZSIsImF1dGhvciIsImFzeW5jIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwianNvbiIsImVyciIsImFsZXJ0IiwiZ2VuZXJhdGVRdW90ZSIsInJhbmRvbVF1b3RlR2VuZXJhdG9yIiwicXVvdGVBdXRob3JDbGFzc0NsYXNzIiwibG93ZXJEaXYiLCJmaW5hbERpdiIsImxlZnRGaW5hbERpdiIsInJpZ2h0RmluYWxEaXYiLCJnaXZlbkRpdmlzaW9uIiwiaGVhZGluZ1BsdXNEaXYiLCJoZWFkaW5nUHJvamVjdCIsInBsdXNJY29uIiwiaXNJbnB1dEF2YWlsYWJsZSIsIm5ld1Byb2plY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5wdXRGaWVsZCIsImF1dG9mb2N1cyIsImNyZWF0ZUlucHV0RmllbGRzIiwiZSIsInZhbCIsImtleUNvZGUiLCJ2YWx1ZSIsIm1hbmFnZVByb2plY3RzIiwiY3JlYXRlQm9keSJdLCJtYXBwaW5ncyI6Im1CQUFBLE1BQU1BLEVBQVksS0FpQ1AsQ0FBQ0MsVUFoQ1UsQ0FBQ0MsRUFBVUMsS0FDekIsTUFBTUMsRUFBV0MsU0FBU0MsY0FBYyxNQUd4QyxPQUZBRixFQUFTRyxVQUFZSixFQUNyQkMsRUFBU0ksVUFBWU4sRUFDZCxDQUFFRSxhQTRCTUssUUExQkgsQ0FBQ0MsRUFBV0MsRUFBa0JDLEtBQzFDLE1BQU1DLEVBQU9SLFNBQVNDLGNBQWMsU0FJcEMsT0FIQU8sRUFBT0MsS0FBS0osRUFDWkcsRUFBT0UsWUFBWUosRUFDbkJFLEVBQU9MLFVBQVVJLEVBQ1YsQ0FBQ0MsV0FxQmdCRyxTQW5CWCxDQUFDQyxFQUFhQyxLQUMzQixNQUFNRixFQUFXWCxTQUFTQyxjQUFjLFVBR3hDLE9BRkFVLEVBQVNULFVBQVVXLEVBQ25CRixFQUFTUixVQUFVUyxFQUNaLENBQUNELGFBZTBCRyxNQWJ4QixDQUFDQyxFQUFVQyxLQUNyQixNQUFNRixFQUFNZCxTQUFTQyxjQUFjLE9BR25DLE9BRkFhLEVBQU1YLFVBQVVZLEVBQ2hCRCxFQUFNWixVQUFVYyxFQUNULENBQUNGLFVBU2lDRyxPQVA3QkMsSUFDWixNQUFNRCxFQUFPakIsU0FBU0MsY0FBYyxLQUVwQyxPQURBZ0IsRUFBT2QsVUFBVWUsRUFDVixDQUFDRCxhQ3ZCaEIsTUFBTUUsRUFBUW5CLFNBQVNvQixjQUFjLFlBRy9CQyxFQ1BOLFdBQ0ksTUFBTUEsRUFBTzFCLElBQVltQixNQUFNLGdCQUFnQixJQUFJQSxNQUM3Q1EsRUFBVzNCLElBQVlDLFVBQVUsb0JBQW9CLElBQUlHLFNBRS9ELEdBREFzQixFQUFPRSxZQUFZRCxHQUNmRSxhQUFhQyxRQUFRLFFBT3JCSCxFQUFXcEIsVUFBVSxXQUFXc0IsYUFBYUMsUUFBUSxjQVB4QixDQUM3QixNQUFNQyxFQUFLQyxPQUFPLG1CQUNsQkgsYUFBYUksUUFBUSxPQUFPRixHQUM1QkcsUUFBUUMsSUFBSSx5QkFDWlIsRUFBV3BCLFVBQVUsV0FBV3dCLElBS3BDLE9BQU9MLEVETkVVLEdBQ1BDLEVFVE4sV0FDSSxNQUNNQyxFQUFTdEMsSUFBWW1CLE1BQU0scUJBQXFCLElBQUlBLE1BQ3BEb0IsRUFBTXZDLElBQVltQixNQUFNLGNBQWMsSUFBSUEsTUFDMUNxQixFQUFPeEMsSUFBWW1CLE1BQU0sZUFBZSxJQUFJQSxNQXFCbEQsT0FwQkFtQixFQUFTVixZQUFZVyxHQUNyQkQsRUFBU1YsWUFBWVksR0FDckJDLGlCQUVJLElBQ0ksTUFBTUMsUUFBZUMsTUFUZixrQ0FVTixJQUFJRCxFQUFTRSxHQUNULE1BQU1GLEVBQW1CLFdBRTdCLE1BQU1HLFFBQVdILEVBQVNHLE9BQzFCTixFQUFNaEMsVUFBVXNDLEVBQUtyQixRQUNyQmdCLEVBQU9qQyxVQUFVLElBQUlzQyxFQUFLTCxTQUU1QixNQUFPTSxHQUNMWixRQUFRQyxJQUFJVyxHQUNaQyxNQUFNLGlFQUlkQyxHQUNPVixFRmhCVVcsR0FDZkMsRUFBc0JsRCxJQUFZbUIsTUFBTSwyQkFBMkIsSUFBSUEsTUFDN0UrQixFQUFzQnRCLFlBQVlTLEdBQ2xDWCxFQUFPRSxZQUFZc0IsR0FDbkIxQixFQUFRSSxZQUFZRixHQUNwQlEsUUFBUUMsSUFBSUUsR0FHWixNQUFNYyxFR3NCTixXQUNJLE1BQU1DLEVBQVNwRCxJQUFZbUIsTUFBTSxhQUFhLElBQUlBLE1BQzVDa0MsRUFBYXJELElBQVltQixNQUFNLGtCQUFrQixJQUFJQSxNQUNyRG1DLEVBQWN0RCxJQUFZbUIsTUFBTSxtQkFBbUIsSUFBSUEsTUFPN0QsT0FwQ0osU0FBd0JvQyxHQUNwQixNQUFNQyxFQUFleEQsSUFBWW1CLE1BQU0sMEJBQTBCLElBQUlBLE1BQy9Ec0MsRUFBZXpELElBQVlDLFVBQVUscUJBQXFCLFlBQVlHLFNBQ3RFc0QsRUFBUzFELElBQVlzQixPQUFPLGVBQWVBLE9BQ2pEa0MsRUFBZTVCLFlBQVk2QixHQUMzQkQsRUFBZTVCLFlBQVk4QixHQUMzQkgsRUFBYzNCLFlBQVk0QixHQUMxQixJQUFJRyxHQUFpQixFQUNyQixNQUFNQyxFQUFXNUQsSUFBWW1CLE1BQU0sa0JBQWtCLElBQUlBLE1BQ3pEdUMsRUFBU0csaUJBQWlCLFNBQVEsS0FDOUIsSUFBSUYsRUFBaUIsQ0FDakIsTUFBTUcsRUFwQmxCLFdBQ0ksTUFBTUEsRUFBVzlELElBQVlTLFFBQVEsT0FBTyxnQ0FBZ0MsNEJBQTRCSSxPQUV4RyxPQURBaUQsRUFBV0MsV0FBVSxFQUNkRCxFQWlCa0JFLEdBQ2pCSixFQUFXaEMsWUFBWWtDLEdBQ3ZCQSxFQUFXRCxpQkFBaUIsU0FBUUksSUFqQmhELElBQXVCQyxFQWtCTyxJQUFYRCxFQUFFRSxVQWxCRUQsRUFtQldKLEVBQVdNLE1BbEJ6Q2xDLFFBQVFDLElBQUkrQixPQXNCUlAsR0FBaUIsS0FFckJKLEVBQWMzQixZQUFZZ0MsR0FTMUJTLENBQWVoQixHQUNmRCxFQUFTeEIsWUFBWXlCLEdBQ3JCRCxFQUFTeEIsWUFBWTBCLEdBSWRGLEVIaENJa0IsR0FDZjlDLEVBQVFJLFlBQVl1QixJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBteUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbXlIZWFkaW5nID0gKGNsYXNzSHRtbCxpbm5lckh0bWwpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoZWFkaW5nMS5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gICAgICAgIGhlYWRpbmcxLmNsYXNzTGlzdCA9IGNsYXNzSHRtbDtcbiAgICAgICAgcmV0dXJuIHsgaGVhZGluZzEgfTtcbiAgICB9XG4gICAgY29uc3QgbXlJbnB1dCA9IChpbnB1dFR5cGUsIGlucHV0UGxhY2Vob2xkZXIsIGlucHV0Q2xhc3MpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0MS50eXBlPWlucHV0VHlwZTtcbiAgICAgICAgaW5wdXQxLnBsYWNlaG9sZGVyPWlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgIGlucHV0MS5jbGFzc0xpc3Q9aW5wdXRDbGFzcztcbiAgICAgICAgcmV0dXJuIHtpbnB1dDF9O1xuICAgIH1cbiAgICBjb25zdCBteUJ1dHRvbiA9IChidXR0b25DbGFzcywgYnV0dG9uSHRtbCkgPT4ge1xuICAgICAgICBjb25zdCBteUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBteUJ1dHRvbi5pbm5lckhUTUw9YnV0dG9uSHRtbDtcbiAgICAgICAgbXlCdXR0b24uY2xhc3NMaXN0PWJ1dHRvbkNsYXNzO1xuICAgICAgICByZXR1cm4ge215QnV0dG9ufTtcbiAgICB9XG4gICAgY29uc3QgbXlEaXYgPSAoZGl2Q2xhc3MsIGRpdkh0bWwpID0+IHtcbiAgICAgICAgY29uc3QgbXlEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG15RGl2LmNsYXNzTGlzdD1kaXZDbGFzcztcbiAgICAgICAgbXlEaXYuaW5uZXJIVE1MPWRpdkh0bWw7XG4gICAgICAgIHJldHVybiB7bXlEaXZ9O1xuICAgIH1cbiAgICBjb25zdCBteUljb24gPSAoaWNvbkNsYXNzKT0+e1xuICAgICAgICBjb25zdCBteUljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBteUljb24uY2xhc3NMaXN0PWljb25DbGFzcztcbiAgICAgICAgcmV0dXJuIHtteUljb259O1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7bXlIZWFkaW5nLCBteUlucHV0LCBteUJ1dHRvbiwgbXlEaXYsIG15SWNvbn07XG59O1xuZXhwb3J0IHtteUVsZW1lbnR9OyIsIi8vIGltcG9ydCBzdGF0ZW1lbnRzXG5pbXBvcnQge25hdkJhcn0gZnJvbSAnLi9tb2R1bGVzL25hdmJhcic7XG5pbXBvcnQge3JhbmRvbVF1b3RlR2VuZXJhdG9yfSBmcm9tICcuL21vZHVsZXMvcmFuZG9tUXVvdGVHZW5lcmF0b3InO1xuaW1wb3J0IHtjcmVhdGVCb2R5fSBmcm9tICcuL21vZHVsZXMvY29tcGxldGVCb2R5JztcbmltcG9ydCB7IG15RWxlbWVudCB9IGZyb20gJy4vbW9kdWxlcy9lbGVtZW50cyc7XG4vLyBnbG9iYWwgc2NvcGVzXG5jb25zdCBjb250ZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbi8vIHdvcmtpbmcgb24gbmF2YmFyXG5jb25zdCBuYXZEaXY9bmF2QmFyKCk7XG5jb25zdCBxdW90ZUF1dGhvckRpdj1yYW5kb21RdW90ZUdlbmVyYXRvcigpO1xuY29uc3QgcXVvdGVBdXRob3JDbGFzc0NsYXNzPW15RWxlbWVudCgpLm15RGl2KCdxdW90ZS1hdXRob3ItY2xhc3MtY2xhc3MnLCcnKS5teURpdlxucXVvdGVBdXRob3JDbGFzc0NsYXNzLmFwcGVuZENoaWxkKHF1b3RlQXV0aG9yRGl2KTtcbm5hdkRpdi5hcHBlbmRDaGlsZChxdW90ZUF1dGhvckNsYXNzQ2xhc3MpO1xuY29udGVudC5hcHBlbmRDaGlsZChuYXZEaXYpO1xuY29uc29sZS5sb2cocXVvdGVBdXRob3JEaXYpO1xuXG4vLyB3b3JraW5nIG9uIGJvZHlcbmNvbnN0IGxvd2VyRGl2PWNyZWF0ZUJvZHkoKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJEaXYpO1xuIiwiaW1wb3J0IHtteUVsZW1lbnR9IGZyb20gJy4vZWxlbWVudHMnO1xuXG5mdW5jdGlvbiBuYXZCYXIgKCkgIHtcbiAgICBjb25zdCBuYXZEaXY9bXlFbGVtZW50KCkubXlEaXYoJ25hdi1iYXItY2xhc3MnLCcnKS5teURpdjtcbiAgICBjb25zdCBuYXZIZWFkaW5nPW15RWxlbWVudCgpLm15SGVhZGluZygnbmF2LWhlYWRpbmctY2xhc3MnLCcnKS5oZWFkaW5nMTtcbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2SGVhZGluZyk7XG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJykpe1xuICAgICAgICBjb25zdCBuYW1lPXByb21wdCgnRW50ZXIgeW91ciBuYW1lJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJyxuYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BobGUgc2UgbmFhbSBuYWhpIGhhaScpO1xuICAgICAgICBuYXZIZWFkaW5nLmlubmVySFRNTD1gd2VsY29tZSAke25hbWV9YDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbmF2SGVhZGluZy5pbm5lckhUTUw9YFdlbGNvbWUgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpfWA7XG4gICAgfVxuICAgIHJldHVybiBuYXZEaXY7XG59XG5leHBvcnQge25hdkJhcn07IiwiaW1wb3J0IHtteUVsZW1lbnR9IGZyb20gJy4vZWxlbWVudHMnXG5mdW5jdGlvbiByYW5kb21RdW90ZUdlbmVyYXRvcigpe1xuICAgIGNvbnN0IHdlYnNpdGU9XCJodHRwczovL2FwaS5xdW90YWJsZS5pby9yYW5kb21cIjtcbiAgICBjb25zdCBxdW90ZURpdj1teUVsZW1lbnQoKS5teURpdigncXVvdGUtYXV0aG9yLWNsYXNzJywnJykubXlEaXY7XG4gICAgY29uc3QgcXVvdGU9bXlFbGVtZW50KCkubXlEaXYoJ3F1b3RlLWNsYXNzJywnJykubXlEaXY7XG4gICAgY29uc3QgYXV0aG9yPW15RWxlbWVudCgpLm15RGl2KCdhdXRob3ItY2xhc3MnLCcnKS5teURpdjtcbiAgICBxdW90ZURpdi5hcHBlbmRDaGlsZChxdW90ZSk7XG4gICAgcXVvdGVEaXYuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcbiAgICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVF1b3RlKCl7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlPWF3YWl0IGZldGNoKHdlYnNpdGUpO1xuICAgICAgICAgICAgaWYoIXJlc3BvbnNlLm9rKXtcbiAgICAgICAgICAgICAgICB0aHJvdyhyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QganNvbj1hd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBxdW90ZS5pbm5lckhUTUw9anNvbi5jb250ZW50O1xuICAgICAgICAgICAgYXV0aG9yLmlubmVySFRNTD1gLSR7anNvbi5hdXRob3J9YDtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICBhbGVydCgnc29ycnkgY291bGQgbm90IGZpbmQgb3V0IGEgbmV3IHF1b3RlIGhvcGUgeW91IGFyZSBkb2luZyB3ZWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1b3RlRGl2O1xuICAgIH1cbiAgICBnZW5lcmF0ZVF1b3RlKCk7XG4gICAgcmV0dXJuIHF1b3RlRGl2O1xufVxuZXhwb3J0IHtyYW5kb21RdW90ZUdlbmVyYXRvcn07IiwiaW1wb3J0IHtteUVsZW1lbnR9IGZyb20gJy4vZWxlbWVudHMnO1xuXG52YXIgcHJvamVjdE5hbWVBcnJheT1bXTtcbnZhciBsaXN0TmFtZUFycmF5PVtdO1xuIFxuZnVuY3Rpb24gY3JlYXRlSW5wdXRGaWVsZHMoKXtcbiAgICBjb25zdCBpbnB1dEZpZWxkPW15RWxlbWVudCgpLm15SW5wdXQoJ3RleHQnLCdFbnRlciB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdCcsJ2lucHV0LXByb2plY3QtbmFtZS1jbGFzcycpLmlucHV0MTtcbiAgICBpbnB1dEZpZWxkLmF1dG9mb2N1cz10cnVlO1xuICAgIHJldHVybiBpbnB1dEZpZWxkO1xufVxuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0cyh2YWwpe1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG59XG5cbmZ1bmN0aW9uIG1hbmFnZVByb2plY3RzKGdpdmVuRGl2aXNpb24pe1xuICAgIGNvbnN0IGhlYWRpbmdQbHVzRGl2PW15RWxlbWVudCgpLm15RGl2KCdoZWFkaW5nLWxvd2VyLWxlZnQtaWNvbicsJycpLm15RGl2O1xuICAgIGNvbnN0IGhlYWRpbmdQcm9qZWN0PW15RWxlbWVudCgpLm15SGVhZGluZygnaGVhZGluZy1sb3dlci1sZWZ0JywnUHJvamVjdHMnKS5oZWFkaW5nMTtcbiAgICBjb25zdCBwbHVzSWNvbj1teUVsZW1lbnQoKS5teUljb24oJ2ZhcyBmYS1wbHVzJykubXlJY29uO1xuICAgIGhlYWRpbmdQbHVzRGl2LmFwcGVuZENoaWxkKGhlYWRpbmdQcm9qZWN0KTtcbiAgICBoZWFkaW5nUGx1c0Rpdi5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG4gICAgZ2l2ZW5EaXZpc2lvbi5hcHBlbmRDaGlsZChoZWFkaW5nUGx1c0Rpdik7XG4gICAgbGV0IGlzSW5wdXRBdmFpbGFibGU9ZmFsc2U7XG4gICAgY29uc3QgbmV3UHJvamVjdD1teUVsZW1lbnQoKS5teURpdignbmV3LXByb2plY3QtZGl2JywnJykubXlEaXY7XG4gICAgcGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGlmKCFpc0lucHV0QXZhaWxhYmxlKXtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RmllbGQ9Y3JlYXRlSW5wdXRGaWVsZHMoKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG4gICAgICAgICAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxlPT57XG4gICAgICAgICAgICAgICAgaWYoZS5rZXlDb2RlPT0xMyl7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvUHJvamVjdHMoaW5wdXRGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaXNJbnB1dEF2YWlsYWJsZT10cnVlO1xuICAgIH0pO1xuICAgIGdpdmVuRGl2aXNpb24uYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVCb2R5KCl7XG4gICAgY29uc3QgZmluYWxEaXY9bXlFbGVtZW50KCkubXlEaXYoJ2xvd2VyLWJvZHknLCcnKS5teURpdjtcbiAgICBjb25zdCBsZWZ0RmluYWxEaXY9bXlFbGVtZW50KCkubXlEaXYoJ2xvd2VyLWxlZnQtYm9keScsJycpLm15RGl2O1xuICAgIGNvbnN0IHJpZ2h0RmluYWxEaXY9bXlFbGVtZW50KCkubXlEaXYoJ2xvd2VyLXJpZ2h0LWJvZHknLCcnKS5teURpdjtcbiAgICBtYW5hZ2VQcm9qZWN0cyhsZWZ0RmluYWxEaXYpO1xuICAgIGZpbmFsRGl2LmFwcGVuZENoaWxkKGxlZnRGaW5hbERpdik7XG4gICAgZmluYWxEaXYuYXBwZW5kQ2hpbGQocmlnaHRGaW5hbERpdik7XG5cblxuXG4gICAgcmV0dXJuIGZpbmFsRGl2O1xufVxuZXhwb3J0IHtjcmVhdGVCb2R5fTsiXSwic291cmNlUm9vdCI6IiJ9