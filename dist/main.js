(()=>{"use strict";function e(e){document.querySelector(".title").textContent=e.textContent}function t(){}let n=localStorage.getItem("myProjectList");function c(e,t){const n=document.querySelector(".project"),c=document.querySelector("#project-form"),r=document.createElement("div");r.setAttribute("data-project",`${e}`),r.classList.add("tile","data-tile"),n.insertBefore(r,c);const d=o("menu");d.setAttribute("data-drag",""),r.appendChild(d);const a=document.createElement("div");a.classList.add("project-info"),r.appendChild(a);const s=document.createElement("div");s.classList.add("project-name"),s.textContent=t,a.appendChild(s);const l=document.createElement("div");l.classList.add("edit-container"),l.setAttribute("data-dropdown",""),r.appendChild(l);const i=o("more_vert");i.setAttribute("data-dropdown-button",""),l.appendChild(i)}function o(e){const t=document.createElement("span");return t.classList.add("material-icons-round"),t.textContent=e,t}n=JSON.parse(n||JSON.stringify([]));const r=()=>document.querySelectorAll("[data-project]").length;const d=(e,t)=>{const n=[];return{dataProject:e,name:t,taskList:n,taskNum:n.length}};function a(){const e=document.querySelector("#project-form");document.querySelector("#project-input").value="",e.classList.add("hidden")}function s(e){document.querySelector(".selected").classList.remove("selected"),e.classList.add("selected")}document.querySelector(".project-cancel-btn").addEventListener("click",a),document.querySelector("#add-project").addEventListener("click",(function(){document.getElementById("project-form").classList.remove("hidden"),document.getElementById("project-input").focus()})),document.querySelector("#project-form").addEventListener("submit",(function(e){e.preventDefault();let o=document.querySelector("#project-input").value,s=r();const l=d(s,o);n.push(l),localStorage.setItem("myProjectList",JSON.stringify(n)),localStorage.setItem("currentId",t.toString()),c(s,o),a()})),document.querySelector(".left-panel").addEventListener("click",(function(t){let n=t.target.closest(".home .tile"),c=t.target.closest(".project .tile");if(null!=n){const t=n.querySelector("[data-name]");s(n),e(t),document.querySelector("#add-list").classList.add("hidden")}else{if(null==c)return;{const t=c.querySelector(".project-name");c.dataset.project,s(c),e(t)}}})),n.forEach((e=>{c(e.dataProject,e.name)})),document.querySelector(".hidden-menu").addEventListener("click",(()=>{document.querySelector(".left-panel").classList.toggle("hidden")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBaUJBLFNBQVNBLEVBQVlDLEdBQ0hDLFNBQVNDLGNBQWMsVUFDL0JDLFlBQWNILEVBQVNHLFdBQ2pDLENBRUEsU0FBU0MsSUFFVCxDQ0NBLElBQ0lDLEVBQWNDLGFBQWFDLFFBQVEsaUJBa0N2QyxTQUFTQyxFQUFXQyxFQUFhQyxHQUM3QixNQUFNQyxFQUFVVixTQUFTQyxjQUFjLFlBQ2pDVSxFQUFPWCxTQUFTQyxjQUFjLGlCQUU5QlcsRUFBWVosU0FBU2EsY0FBYyxPQUN6Q0QsRUFBVUUsYUFBYSxlQUFnQixHQUFHTixLQUMxQ0ksRUFBVUcsVUFBVUMsSUFBSSxPQUFRLGFBQ2hDTixFQUFRTyxhQUFhTCxFQUFXRCxHQUdoQyxNQUFNTyxFQUFXQyxFQUFlLFFBQ2hDRCxFQUFTSixhQUFhLFlBQWEsSUFDbkNGLEVBQVVRLFlBQVlGLEdBRXRCLE1BQU1HLEVBQWNyQixTQUFTYSxjQUFjLE9BQzNDUSxFQUFZTixVQUFVQyxJQUFJLGdCQUMxQkosRUFBVVEsWUFBWUMsR0FFdEIsTUFBTUMsRUFBY3RCLFNBQVNhLGNBQWMsT0FDM0NTLEVBQVlQLFVBQVVDLElBQUksZ0JBQzFCTSxFQUFZcEIsWUFBY08sRUFFMUJZLEVBQVlELFlBQVlFLEdBRXhCLE1BQU1DLEVBQVV2QixTQUFTYSxjQUFjLE9BQ3ZDVSxFQUFRUixVQUFVQyxJQUFJLGtCQUN0Qk8sRUFBUVQsYUFBYSxnQkFBaUIsSUFDdENGLEVBQVVRLFlBQVlHLEdBRXRCLE1BQU1DLEVBQVdMLEVBQWUsYUFDaENLLEVBQVNWLGFBQWEsdUJBQXdCLElBQzlDUyxFQUFRSCxZQUFZSSxFQUV4QixDQUVBLFNBQVNMLEVBQWVNLEdBQ3BCLE1BQU1DLEVBQU8xQixTQUFTYSxjQUFjLFFBR3BDLE9BRkFhLEVBQUtYLFVBQVVDLElBQUksd0JBQ25CVSxFQUFLeEIsWUFBY3VCLEVBQ1pDLENBQ1gsQ0F4RUF0QixFQUFjdUIsS0FBS0MsTUFBTXhCLEdBQWV1QixLQUFLRSxVQUhwQixLQThFekIsTUFBTUMsRUFBa0IsSUFDQTlCLFNBQVMrQixpQkFBaUIsa0JBQzNCQyxPQWlDdkIsTUFBTUMsRUFBZ0IsQ0FBQ3pCLEVBQWFpQixLQUNoQyxNQUFNUyxFQUFXLEdBRWpCLE1BQU8sQ0FDSDFCLGNBQ0FpQixPQUNBUyxXQUNBQyxRQUxZRCxFQUFTRixPQU16QixFQVlKLFNBQVNJLElBQ0wsTUFBTUMsRUFBY3JDLFNBQVNDLGNBQWMsaUJBQ3RCRCxTQUFTQyxjQUFjLGtCQUUvQnFDLE1BQVEsR0FDckJELEVBQVl0QixVQUFVQyxJQUFJLFNBQzlCLENBRUEsU0FBU3VCLEVBQVdDLEdBQ0t4QyxTQUFTQyxjQUFjLGFBRS9CYyxVQUFVMEIsT0FBTyxZQUM5QkQsRUFBS3pCLFVBQVVDLElBQUksV0FFdkIsQ0FwS21CaEIsU0FBU0MsY0FBYyx1QkFDL0J5QyxpQkFBaUIsUUFBU04sR0FFckJwQyxTQUFTQyxjQUFjLGdCQUMvQnlDLGlCQUFpQixTQTJJekIsV0FDd0IxQyxTQUFTMkMsZUFBZSxnQkFDaEM1QixVQUFVMEIsT0FBTyxVQUU3QnpDLFNBQVMyQyxlQUFlLGlCQUFpQkMsT0FDN0MsSUE5SW1CNUMsU0FBU0MsY0FBYyxpQkFDL0J5QyxpQkFBaUIsVUFnQjVCLFNBQTZCRyxHQUN6QkEsRUFBRUMsaUJBQ0YsSUFBSXhCLEVBQWN0QixTQUFTQyxjQUFjLGtCQUFrQnFDLE1BQ3ZEOUIsRUFBY3NCLElBQ2xCLE1BQU1pQixFQUFhZCxFQUFjekIsRUFBYWMsR0FFOUNsQixFQUFZNEMsS0FBS0QsR0FVakIxQyxhQUFhNEMsUUFBUSxnQkFBaUJ0QixLQUFLRSxVQUFVekIsSUFDckRDLGFBQWE0QyxRQUFRLFlBQWEsY0FSbEMxQyxFQUFXQyxFQUFhYyxHQUN4QmMsR0FFSixJQTFCc0JwQyxTQUFTQyxjQUFjLGVBQy9CeUMsaUJBQWlCLFNBaUcvQixTQUFtQkcsR0FDZixJQUFJSyxFQUFXTCxFQUFFTSxPQUFPQyxRQUFRLGVBQzVCQyxFQUFjUixFQUFFTSxPQUFPQyxRQUFRLGtCQUduQyxHQUFnQixNQUFaRixFQUFrQixDQUNsQixNQUFNSSxFQUFRSixFQUFTakQsY0FBYyxlQUNyQ3NDLEVBQVdXLEdBRVhwRCxFQUFZd0QsR0FkR3RELFNBQVNDLGNBQWMsYUFDL0JjLFVBQVVDLElBQUksU0FlekIsS0FBTyxJQUFtQixNQUFmcUMsRUFPUCxPQVA0QixDQUM1QixNQUFNQyxFQUFRRCxFQUFZcEQsY0FBYyxpQkFDdEJvRCxFQUFZRSxRQUFRN0MsUUFFdEM2QixFQUFXYyxHQUNYdkQsRUFBWXdELEVBQ2hCLENBRUEsQ0FFSixJQXBIbUJsRCxFQW1DVG9ELFNBQVE5QyxJQUNWSCxFQUFXRyxFQUFRRixZQUFhRSxFQUFRZSxLQUFLLElDakRsQ3pCLFNBQVNDLGNBQWMsZ0JBQy9CeUMsaUJBQWlCLFNBQVMsS0FDZjFDLFNBQVNDLGNBQWMsZUFDL0JjLFVBQVUwQyxPQUFPLFNBQVMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NyZWF0aW5nVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jcmVhdGluZ1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdExpc3QsIGNyZWF0ZVNwYW5JY29uLCBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9jcmVhdGluZ1Byb2plY3RcIlxuaW1wb3J0IHtcbiAgICBzdHlsZUNvbXBsZXRlZFRhc2ssXG4gICAgdXBkYXRlQ29tcGxldGVkVGFzayxcbiAgICBzdHlsZUltcG9ydGFudFRhc2ssXG4gICAgdXBkYXRlSW1wb3J0YW50VGFzayxcbiAgICBkZWxldGVUYXNrLFxuICAgIHNob3dFZGl0Rm9ybSxcbiAgICByZXZlcnRFZGl0Rm9ybUxvY2F0aW9uLFxuICAgIHByb2Nlc3NFZGl0VGFzayxcbiAgICBzaG93SGlkZGVuVGFza1xufSBmcm9tIFwiLi9lZGl0aW5nVGFza1wiXG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKCkge1xuXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpdGxlKG5hbWVOb2RlKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWVOb2RlLnRleHRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBpZCgpIHtcblxufVxuXG5mdW5jdGlvbiBsaXN0RXZlbnQoKSB7XG5cbn1cblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcblxuXG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NEYXRlRGF0YSgpIHtcblxufVxuXG5leHBvcnQgeyB1cGRhdGVUaXRsZSwgbGlzdEV2ZW50LCBkaXNwbGF5VGFzaywgaWQsIGFkZFRhc2ssIHByb2Nlc3NEYXRlRGF0YSB9OyIsImltcG9ydCB7IGRpc3BsYXlUYXNrLCB1cGRhdGVUaXRsZSwgaWQgfSBmcm9tIFwiLi9jcmVhdGluZ1Rhc2tcIjtcbmltcG9ydCB7IHJldmVydEVkaXRGb3JtTG9jYXRpb24gfSBmcm9tIFwiLi9lZGl0aW5nVGFza1wiO1xuaW1wb3J0IHsgcmV2ZXJ0T3B0aW9uTG9jYXRpb24gfSBmcm9tIFwiLi9lZGl0aW5nUHJvamVjdFwiO1xuaW1wb3J0IHsgY2hlY2tXaGljaEhvbWVUaWxlIH0gZnJvbSBcIi4vaG9tZVNlY3Rpb25cIjtcblxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKCkge1xuICAgIC8vZXZlbnQgbGlzdGVybmVyIGZvciBjcmVhdGluZyBhIGZvcm0gZm9yIGFkZGluZyBwcm9qZWN0c1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhbmNlbC1idG4nKTtcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQcm9qZWN0Rm9ybSk7XG5cbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dQcm9qZWN0Rm9ybSk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJyk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHByb2Nlc3NQcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtcGFuZWwnKTtcbiAgICBsZWZ0UGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja1RpbGUpO1xuXG4gICAgZGlzcGxheVByb2plY3QocHJvamVjdExpc3QpO1xuXG59XG5cbi8vZ2V0IHByb2plY3QgbGlzdCBvZiBvYmplY3RzIGZyb20gbG9jYWsgc3RvcmFnZSBvciBzdGFydCB3aXRoIGVtcHR5XG5sZXQgZGVmYXVsdFByb2plY3RMaXN0ID0gW107XG5sZXQgcHJvamVjdExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15UHJvamVjdExpc3RcIik7XG5cbnByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShwcm9qZWN0TGlzdCB8fCBKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvamVjdExpc3QpKTtcblxuLy9wcm9jZXNzIHRoZSBpbnB1dCBhbmQgcHJlcGFyZSB0byBjcmVhdGUgcHJvamVjdCBlbGVtZW50XG5mdW5jdGlvbiBwcm9jZXNzUHJvamVjdElucHV0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgZGF0YVByb2plY3QgPSBmaW5kTmV4dERhdGFzZXQoKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChkYXRhUHJvamVjdCwgcHJvamVjdE5hbWUpO1xuXG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIGFkZFByb2plY3QoZGF0YVByb2plY3QsIHByb2plY3ROYW1lKTtcbiAgICBoaWRlUHJvamVjdEZvcm0oKTtcblxufVxuXG4vL3NhdmUgcHJvamVjdExpc3QgYW5kIGxhc3QgaWQgZGF0YSBvbiBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteVByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50SWRcIiwgKGlkKS50b1N0cmluZygpKTtcblxuXG59XG5cbi8vZGlzcGxheSB0aGUgbGlzdCBvZiBhbGwgcHJvamVjdHMgaW4gdGhlIGxlZnQgcGFuZWxcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KGFycmF5KSB7XG4gICAgYXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0LmRhdGFQcm9qZWN0LCBwcm9qZWN0Lm5hbWUpO1xuICAgIH0pXG59XG4vL2NyZWF0ZSBhIHByb2plY3QgYW5kIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBwcm9qZWN0cyBpbiBIVE07XG5mdW5jdGlvbiBhZGRQcm9qZWN0KGRhdGFQcm9qZWN0LCB0ZXh0SW5wdXQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgYCR7ZGF0YVByb2plY3R9YCk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpbGUnLCAnZGF0YS10aWxlJyk7XG4gICAgcHJvamVjdC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBmb3JtKTtcblxuICAgIC8vbWVudSB0aHJlZSBsaW5lcyBpY29uXG4gICAgY29uc3QgbWVudUljb24gPSBjcmVhdGVTcGFuSWNvbignbWVudScpO1xuICAgIG1lbnVJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1kcmFnJywgJycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgLy9uYW1lIGFuZCBudW1iZXIgc3RhdHVzXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWluZm8nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEluZm8pO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHRleHRJbnB1dDtcblxuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAvL3RocmVlIGRvdHMgb24gdGhlIHJpZ2h0IHNlY3Rpb25cbiAgICBjb25zdCBlZGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdERpdi5jbGFzc0xpc3QuYWRkKCdlZGl0LWNvbnRhaW5lcicpO1xuICAgIGVkaXREaXYuc2V0QXR0cmlidXRlKCdkYXRhLWRyb3Bkb3duJywgJycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0RGl2KTtcblxuICAgIGNvbnN0IGVkaXRJY29uID0gY3JlYXRlU3Bhbkljb24oJ21vcmVfdmVydCcpO1xuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImRhdGEtZHJvcGRvd24tYnV0dG9uXCIsIFwiXCIpO1xuICAgIGVkaXREaXYuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuXG59XG4vL2NyZWF0ZSBzcGFuIGljb24gb2YgZ29vZ2xlIG1hdGVyaWFsc1xuZnVuY3Rpb24gY3JlYXRlU3Bhbkljb24obmFtZSkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucy1yb3VuZCcpO1xuICAgIGljb24udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHJldHVybiBpY29uO1xufVxuXG4vL2ZpbmQgbmV4dCBkYXRhLXNldFxuY29uc3QgZmluZE5leHREYXRhc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXByb2plY3RdXCIpO1xuICAgIHJldHVybiBhbGxwcm9qZWN0cy5sZW5ndGg7XG59XG5cbi8vIHJlbW92ZSBhZGQgdGFzayBCdG4gd2hlbiBob21lVGlsZXMgaXMgc2VsZWN0ZWRcbmZ1bmN0aW9uIGhpZGVBZGRUYXNrQnRuKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWxpc3QnKTtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuXG4vL2NoZWNrIHRvIHNlZSB3aGF0IHRpbGUgaXMgc2VsZWN0ZWRcbmZ1bmN0aW9uIGNoZWNrVGlsZShlKSB7XG4gICAgbGV0IGhvbWVUaWxlID0gZS50YXJnZXQuY2xvc2VzdCgnLmhvbWUgLnRpbGUnKTtcbiAgICBsZXQgcHJvamVjdFRpbGUgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCAudGlsZScpO1xuXG5cbiAgICBpZiAoaG9tZVRpbGUgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGhvbWVUaWxlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hbWVdJyk7XG4gICAgICAgIHNlbGVjdFRpbGUoaG9tZVRpbGUpO1xuICAgICAgICAvLyBjaGVja1doaWNoSG9tZVRpbGUoaG9tZVRpbGUpO1xuICAgICAgICB1cGRhdGVUaXRsZSh0aXRsZSk7XG4gICAgICAgIGhpZGVBZGRUYXNrQnRuKCk7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0VGlsZSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcHJvamVjdFRpbGUucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIik7XG4gICAgICAgIGxldCBkYXRhUHJvamVjdCA9IHByb2plY3RUaWxlLmRhdGFzZXQucHJvamVjdDtcblxuICAgICAgICBzZWxlY3RUaWxlKHByb2plY3RUaWxlKTtcbiAgICAgICAgdXBkYXRlVGl0bGUodGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbn1cbi8vY3JlYXRlIHByb2plY3QgZmFjdG9yeSBmdW5jdGlvblxuY29uc3QgY3JlYXRlUHJvamVjdCA9IChkYXRhUHJvamVjdCwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gW107XG4gICAgY29uc3QgdGFza051bSA9IHRhc2tMaXN0Lmxlbmd0aDtcbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRhUHJvamVjdCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdGFza0xpc3QsXG4gICAgICAgIHRhc2tOdW1cbiAgICB9XG59XG5cblxuLy9wb3AgdXAgdGhlIHByb2plY3QgZm9ybVxuZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpO1xuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIC8vZm9jdXMgb24gaW5wdXQgZmllbGRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbnB1dCcpLmZvY3VzKCk7XG59XG4vL2hpZGUgdGhlIHByb2plY3QgZm9ybVxuZnVuY3Rpb24gaGlkZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0Jyk7XG5cbiAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RUaWxlKG5vZGUpIHtcbiAgICBjb25zdCBzZWxlY3RlZFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcblxuICAgIHNlbGVjdGVkVGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxufVxuZXhwb3J0IHsgY3JlYXRlRXZlbnRMaXN0ZW5lciwgY3JlYXRlU3Bhbkljb24sIHByb2plY3RMaXN0LCBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGhpZGVBZGRUYXNrQnRuLCBjcmVhdGVQcm9qZWN0IH07IiwiaW1wb3J0IHsgY3JlYXRlRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL2NyZWF0aW5nUHJvamVjdFwiO1xuaW1wb3J0IHsgbGlzdEV2ZW50IH0gZnJvbSBcIi4vY3JlYXRpbmdUYXNrXCI7XG5cblxuY3JlYXRlRXZlbnRMaXN0ZW5lcigpO1xubGlzdEV2ZW50KCk7XG4vL2hpZGUgc2lkZSBtZW51IGV2ZW50IGxpc3RlbmVyXG5jb25zdCBoaWRkZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGRlbi1tZW51Jyk7XG5oaWRkZW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxlZnRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LXBhbmVsJyk7XG4gICAgbGVmdFBhbmVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufSk7Il0sIm5hbWVzIjpbInVwZGF0ZVRpdGxlIiwibmFtZU5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImlkIiwicHJvamVjdExpc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkUHJvamVjdCIsImRhdGFQcm9qZWN0IiwidGV4dElucHV0IiwicHJvamVjdCIsImZvcm0iLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5zZXJ0QmVmb3JlIiwibWVudUljb24iLCJjcmVhdGVTcGFuSWNvbiIsImFwcGVuZENoaWxkIiwicHJvamVjdEluZm8iLCJwcm9qZWN0TmFtZSIsImVkaXREaXYiLCJlZGl0SWNvbiIsIm5hbWUiLCJpY29uIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZmluZE5leHREYXRhc2V0IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZVByb2plY3QiLCJ0YXNrTGlzdCIsInRhc2tOdW0iLCJoaWRlUHJvamVjdEZvcm0iLCJwcm9qZWN0Rm9ybSIsInZhbHVlIiwic2VsZWN0VGlsZSIsIm5vZGUiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1Byb2plY3QiLCJwdXNoIiwic2V0SXRlbSIsImhvbWVUaWxlIiwidGFyZ2V0IiwiY2xvc2VzdCIsInByb2plY3RUaWxlIiwidGl0bGUiLCJkYXRhc2V0IiwiZm9yRWFjaCIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=