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
			<ul id="tran">
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
			smallEn = document.createElement('li'),
			bigEn = document.createElement('li'),
			hidden = document.createElement('li');
// -------------------------------------------------------------------------------------
		clearboth.id = 'clearboth';
		clearboth.innerHTML = '<li><a href="http://www.clearboth.org"><img src="include/clearbothLogo.gif" \/><\/a><\/li>'
		topbar.appendChild(clearboth);
// -------------------------------------------------------------------------------------
		smallEn.id = 'smallEn';
		smallEn.innerHTML = 'KR | en';
		bigEn.id = 'bigEn';
		bigEn.innerHTML = 'KR | EN';
		hidden.id = 'hidden';
		hidden.innerHTML = 'KR';
		smallEn.onclick = bigEn.onclick = hidden.onclick = styleEN;
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