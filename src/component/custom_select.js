import $ from 'jquery';
import React from 'react';


class CustomSelect extends React.Component {
	componentDidMount() {
		document.getElementsByClassName('custom-select').outerHTML ='';
		const el1 = document.querySelector('.el1')
		const el2 = document.querySelector('.el2')
		var x, i, j, l, ll, selElmnt, a, ab, b, bc, c;
		x = document.getElementsByClassName("custom-select");
		l = x.length;
		for (i = 0; i < l; i++) {
		  	selElmnt = x[i].getElementsByTagName("select")[0];
		  	ll = selElmnt.length;
		  	a = document.createElement("DIV");
		  	a.setAttribute("class", "select-selected");
		  	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		  	x[i].appendChild(a);
			ab = document.createElement("DIV");
			ab.setAttribute("class", "select-items-scroll");
		  	b = document.createElement("DIV");
		  	b.setAttribute("class", "select-items select-hide");
		  	for (j = 1; j < ll; j++) {
				c = document.createElement("DIV");
				c.innerHTML = selElmnt.options[j].innerHTML;
				c.addEventListener("click", function(e) {
					var y, i, k, s, h, sl, yl;
					s = this.parentNode.parentNode.getElementsByTagName("select")[0];
					sl = s.length;
					h = this.parentNode.previousSibling;
					for (i = 0; i < sl; i++) {
					  	if (s.options[i].innerHTML == this.innerHTML) {
							s.selectedIndex = i;
							h.innerHTML = this.innerHTML;
							y = this.parentNode.getElementsByClassName("same-as-selected");
							yl = y.length;
							for (k = 0; k < yl; k++) {
							  	y[k].removeAttribute("class");
							}
							this.setAttribute("class", "same-as-selected");
							break;
					  	}
					}
					h.click();
				});
				b.appendChild(c);
		  	}
		  	ab.appendChild(b);
			// x[i].appendChild(bc);

			x[i].appendChild(ab);
		  	a.addEventListener("click", function(e) {
			  	e.stopPropagation();
			  	closeAllSelect(this);
			  	this.nextSibling.classList.toggle("selected");
			  	this.nextSibling.firstElementChild.classList.toggle("select-hide");
			  	this.classList.toggle("select-arrow-active");
			});
		}
		const closeAllSelect = (elmnt)=> {
		  	/*a function that will close all select boxes in the document,
		  	except the current select box:*/
		  	var x, y, z, i, xl, yl, arrNo = [];
		  	x = document.getElementsByClassName("select-items");
		  	y = document.getElementsByClassName("select-selected");
		  	z = document.getElementsByClassName("select-items-scroll");
		  	xl = x.length;
		  	yl = y.length;
		  	for (i = 0; i < yl; i++) {
				if (elmnt == y[i]) {
				  	arrNo.push(i)
				} else {
				  	y[i].classList.remove("select-arrow-active");
				}
		  	}
		  	for (i = 0; i < xl; i++) {
				if (arrNo.indexOf(i)) {
				  	x[i].classList.add("select-hide");
				  	z[i].classList.remove("selected");
				}
		  	}
		}
		document.addEventListener("click", closeAllSelect);
	}
  	render():JSX.Element{
  		return (<div></div>);
  	}
}

export default CustomSelect;
