/*  스크립트의 대상 마크업이 수천 라인에 달하는 방대한 규모이고, 반복문의 횟수 또한 수만회에
    육박하기 때문에 i, count 같은 반복문 변수가 scopechain을 따라가며 검색되는 일이 없도록
    모든 함수에서 다 따로따로 선언하였습니다.
*/
(function () {
    var body = document.body;

    // 클래스 토글을 위해, 현재 부여된 커스텀 클래스를 전부 삭제.
    function removeClass(o) {
        if (!o.className) {
            return;
        }
        o.className = o.className.replace('smallEn', '').replace('bigEn', '');
        o.className = o.className.replace('hidden', '').replace('KR', '');
    }	
	
	// 요소노드 전체를 순회하면서 lang 속성을 기준으로 클래스 변경
    function styleEN() {
        var i, that,
            style = ' ' + this.id,
            everything = document.getElementsByTagName("*"),
            count = everything.length;

        for (i = 0; i < count; i += 1) {
            that = everything[i];
            switch (that.lang) {
            case 'EN':
                removeClass(that);
                that.className += style;
                break;
            case 'KR':
                removeClass(that);
                that.className += ' KR';
                break;
            default :
                break;
            }
        }
    }

    // 미번역된 div를 숨기고/보이는 토글
    function toggleVisible() {
        var uncle = this.nextSibling,
            that = (uncle.nodeName === "DIV") ? uncle : uncle.nextSibling;
        if (that.className.indexOf('hidden') >= 0) {
            that.className = 'notyet';
            this.innerHTML = 'hide';
        } else {
            that.className += ' hidden';
            this.innerHTML = 'show';
        }
    }

	function onClick() {
		var anchor = this.getElementsByTagName("a")[0];
		if (anchor && anchor.href) {
			location.href = anchor.href;
			return false;
		}
	}

	// toc 만들어내는 스크립트. *버전 텍스트* 밑에 위치시킴.
	(function () {
		var i, that, start, target,
			toc = document.createElement('ol'),
			everything = document.getElementsByTagName("*"),
			count = everything.length;
		for (i = 0; i < count; i += 1) {
			that = everything[i];
			if (that.innerHTML == 'This is revision 1.2852.') {
				start = i;
				target = that.nextSibling;
				break;
			}
		}
		for (i = start; i < count; i += 1) {
			that = everything[i];
			if (that.nodeName.length == 2 && !isNaN(that.nodeName.replace('H',''))) {
				var a = document.createElement('a'),
					li = document.createElement('li');
				a.href = '#' + that.id;
				a.innerHTML = that.innerHTML;
				li.appendChild(a);
				li.className = that.nodeName;
				toc.appendChild(li);
			}			
		}
		toc.id = 'toc';
		body.insertBefore(toc, target);
	}());

    // 미번역된(.notyet) div 앞에 토글용 스팬 생성. 핸들러. div를 숨김.
    (function () {
        var i,
            div = document.getElementsByTagName('div'),
            count = div.length;
        for (i = 0; i < count; i += 1) {
            if (div[i].className === 'notyet') {
                var span = document.createElement('span');
                span.className = 'collapser';
                span.onclick = toggleVisible;
                span.innerHTML = 'show';
                body.insertBefore(span, div[i]);
                div[i].className += ' hidden';
            }
        }
    }());

    // 탑메뉴div 생성. 핸들러부여. 초기화.
	/* 아래 함수의 결과 마크업 :
		<div id="topbar">
			<ul id="clearboth">
				<li><a href="www.clearboth.org"><img src="include/clearbothLogo.gif" /></a></li>
			</ul>
			<ul id="nav">
				<li><a href="embedded-content-0.html">← Embedded content</a></li>
				<li><a href="spec.html#contents">Table of contents</a></li>
				<li><a href="text-level-semantics.html">Text-level semantics →</a></li>
			</ul>
			<ul id="tran">
				<li><a href="#toc">차례</a></li>
				<li id="smallEn">KR | en</li>
				<li id="bigEn">KR | EN</li>
				<li id="hidden">KR</li>
			</ul>
		</div>
	*/
	(function () {
		var str, 
			topbar = document.createElement('div'),

			clearboth = document.createElement('ul'),

			tran = document.createElement('ul'),
			goToc = document.createElement('li'),
			smallEn = document.createElement('li'),
			bigEn = document.createElement('li'),
			hidden = document.createElement('li'),

			navbar = document.createElement('ul'),
			nav = document.getElementsByTagName("nav")[0],
			navAnchor,
			prev = document.createElement('li'),
			oToc = document.createElement('li'),
			next = document.createElement('li'),
			prevA = document.createElement('a'),
			nextA = document.createElement('a');

		if (nav) {
			navAnchor = nav.getElementsByTagName("a");
		}
// -------------------------------------------------------------------------------------			 
		clearboth.id = 'clearboth';
		clearboth.innerHTML = '<li><a href="http://www.clearboth.org"><img src="include/clearbothLogo.gif" \/><\/a><\/li>'
		topbar.appendChild(clearboth);
// -------------------------------------------------------------------------------------
// IE(8 포함)에서 HTML 5의 nav 요소를 아직 정확하게 인식하지 못하기 때문에, 이 블럭의 
// 스크립트(nav요소 -> 탑 바)는 동작하지 않습니다. 이 요소를 정확하게 인식하지 못하는
// 브라우저의 경우 안내 텍스트가 대신 나타납니다.
		if (navAnchor[0]) {
			switch (nav.getElementsByTagName('a').length) {
			case 3: 
				str = navAnchor[0].innerHTML;
				prevA.innerHTML = str.replace(str.split(' ')[1], '');
				prevA.href = navAnchor[0].href;
				prev.appendChild(prevA);
				oToc.innerHTML = '<a href="spec.html#contents">Table of contents<\/a>';
				str = navAnchor[2].innerHTML;
				nextA.innerHTML = str.replace(str.split(' ')[0], '');
				nextA.href = navAnchor[2].href;
				next.appendChild(nextA);
				prev.onclick = oToc.onclick = next.onclick = onClick;
				navbar.appendChild(prev);
				navbar.appendChild(oToc);
				navbar.appendChild(next);
				nav.className = 'hidden';
				break;

			case 2:
				str = navAnchor[0].innerHTML;
				oToc.innerHTML = '<a href="spec.html#contents">Table of contents<\/a>';
				str = navAnchor[1].innerHTML;
				nextA.innerHTML = str.replace(str.split(' ')[0], '');
				nextA.href = navAnchor[1].href;
				next.appendChild(nextA);
				oToc.onclick = next.onclick = onClick;
				navbar.appendChild(oToc);
				navbar.appendChild(next);
				nav.className = 'hidden';
				break;

			default:
				break;
			}
		} else {
			str = '이 브라우저는 HTML 5의 nav 요소를 인식하지 못합니다. ';
			str += '크롬 또는 파이어폭스를 사용하시면 좀 더 편리합니다.';
			oToc.innerHTML = str;
			oToc.id = 'announce';
			navbar.appendChild(oToc);
		}
		navbar.id = 'nav';
		topbar.appendChild(navbar);
// -------------------------------------------------------------------------------------			 
		smallEn.id = 'smallEn';
		smallEn.innerHTML = 'KR | en';
		bigEn.id = 'bigEn';
		bigEn.innerHTML = 'KR | EN';
		hidden.id = 'hidden';
		hidden.innerHTML = 'KR';
		smallEn.onclick = bigEn.onclick = hidden.onclick = styleEN;
		goToc.onclick = onClick;
		goToc.innerHTML = '<a href="#toc">차례<\/a>'
		tran.appendChild(goToc);
		tran.appendChild(smallEn);
		tran.appendChild(bigEn);
		tran.appendChild(hidden);
		tran.id = 'tran';
		topbar.id = 'topbar';
		topbar.appendChild(tran);
// -------------------------------------------------------------------------------------
		body.insertBefore(topbar, body.firstChild);
		smallEn.onclick();
	}());
}());