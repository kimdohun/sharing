# sharing
HTML5 Spec
HTML5 기본태그의 설명 (1. Doctype) html5 
- Doctype

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
위의 문장이 "doctype"이라고 불리어지는 것이다. 하지만 오랫동안 알려지지 않았었다. 
Mac의 Internet Explorer5.0을 개발하는 동안, Microsoft는 놀랄만한 문제점을 발견했다. 다음 버전 브라우져에서 표준지원을 향상시켰지만, 이전에 작성된 페이지들을 제대로 렌더링 할 수 없었다.
또한, 명세서에 따른 렌더링을 하지만, 사람들은 이전 페이지들을 제대로 렌더링을 하지 않을 것이라고 예상했다.
당시의 주요한 브라우져들(Netscape 4, IE4)의 quirks mode방식에 맞춰 페이지들을 작성했었기 때문이다. (IE5/Mac은 향상되었고, 그것은 이전 웹 페이지들을 제대로 렌더링하지 않았다.)

MS는 새로운 해결방법을 발견했다. 페이지를 렌더링 하기전에, IE5/Mac은 "doctype"(이 문장은 일반적으로 HTML의 첫번째 라인에 위치해 있다. - <html>요소 이전이다.)을 찾는다. 
이전 페이지 (오래된 브라우져의 quirks mode 렌더링에 맞춰진)들은 doctype을 가지고 있지 않았다.
IE/Mac는 이전 브라우져들과 같이 이전 페이지들을 렌더링했다.
새로운 표준(<html>태그 이전에 올바른 doctype의 지원)을 지원하는 것을 활성화하기 위하여, 페이지 저자는 doctype을 선택해야한다.

이러한 생각이 급속하게 퍼지게 되고, 모든 주요 브라우져들이 두개의 모드를 가지게 된다. "quirks mode"와 "standards mode"가 그것이다.
물론, 이러한 시작은 매우 빠르게 진행됐다. Mollia재단은 브라우져 버전 1.1부터 적용하기 시작했고, 그들은 한가지 특정한 quirk에 의존하여 "standards mode"로 rendering된다는것을 발견했다.
Mozilla에서는 이러한 문제를 렌더링 엔진에서 제거하고, 엄청난 양의 페이지들이 깨지는 것에 대해서 고쳐나갔다. 이로써 브라우져들이 "almost standards mode"에 맞춰졌다.

Henri Sivonen은 다양한 rendering 모드를 종합 설명해 놓았다.
Quirks Mode
 - 1990년대 후반부터 널리퍼진 관습에 의하여 만들어진 "비표준" 페이지들의 비정상적인 렌더링 방식을 피하기 위하여 현대의  웹표준 방식 명세서를 위반하는 것이다.
 
Standards Mode
 - 특정 브라우져에서 광범위하게 실행되고 명세서에 맞게 대처하는 문서들을 확인하기 위함이다.
   HTML5에서는 이러한 mode를 "no quirks mode"라고 한다.

Almost Standards Mode
 - FF, Safari, Chrome, Opera(7.5부터), IE8은 "Almost Standards mode"로 알려진 mode를 가지고 있다.  "Almost Standards Modes"는 CSS2 명세서에 맞게 엄격하지 않고, 전통적인 table cells 수직 높이를 실행한다. HTML5에서는 "limited quirks mode"라고 부른다.

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

15개 doctype중의 하나인 위의 doctype은 현재 브라우져에서 "standards mode"를 작동하게 한다.
만약, HTML5 doctype으로 변경한다라면, 짧고 편리하게 현재 브라우져에서 "standards mode"를 작동시킬 수 있다.

<!DOCTYPE html>

원서 : http://diveintohtml5.org/detect.html
 
HTML5 기본태그의 설명 (2. Root Element) html5 
 - The Root Element

 HTML페이지는 중첩 엘레멘트의 연속이다. 페이지의 구조는 tree와 같다. 몇몇 엘레멘트는 같은 트리에서 확장된 두개의 가지처럼 묶음이다.
 또 다른 엘레멘트들은 다른 엘레멘트의 자식일 수 있고, 이것은 큰 가지로 부터 확장된 작은 가지와 같다. 자식이 없는 엘레멘트들을 "leaf"(나뭇잎)노드라고 부른다. 가장 상위에 위치한 노드(페이지의 다른 엘레멘트들의 최상위 노드)를  "root element"라고 부른다. html의 root element는 <html>이다.

<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
위의 markup은 잘못되지 않았다. 이러한 방식은 HTML5에서 유효하다. 하지만 너무 길기 때문에 bytes수를 아끼기 위해 쓸모 없는 것들을 지우는 것이 좋다.
http://www.w3.org/1999/xhtml은 xhtml namespace를 말하고 있다. 하지만 HTML5는 항상 namespace를 가지고 있기 때문에, 재정의 하는것은 필요하지 않다. HTML5페이지는 모든 브라우져에서 똑같이 적용된다. 

xmlns는 더이상 필요하지 않다.
<html lang="en" xml:lang="en">

또, 위의 코드중 lang과 xml:lang 두개의 속성은 이 페이지의 언어를 설정한다. 왜 이 두가지 속성을 쓰는 것일까?
다시 말하면, 이것은  xhtml의 흔적이다. HTML5에는 한가지 속성만을 사용한다. 만약, xml:lang속성을 쓰고 싶다면 써도 괜찮다.
<html lang="en">

원서 : http://diveintohtml5.org/detect.html

 
HTML5 기본태그의 설명 (3. head Element) html5 
root element의 첫번째 자식은 일반적으로 <head> element이다. <head>엘레멘트는 medata(페이지의 정보)를 포함하고 있다.
<head> element는 HTML5에서도 변한것은 없다. 하지만 <head> element내의 내용들을 주목할 필요 가 있다.

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>My Weblog</title>
  <link rel="stylesheet" type="text/css" href="style-original.css" />
  <link rel="alternate" type="application/atom+xml" title="My Weblog feed" href="/feed/" />
  <link rel="search" type="application/opensearchdescription+xml" title="My Weblog search" href="opensearch.xml"  />
  <link rel="shortcut icon" href="/favicon.ico" />
</head>

- Character Encoding

컴퓨터는 문자를 인식하지 못하고 bits와 bytes를 문자로 표현한다. 컴퓨터는 스크린에 표현하기 위해 저장된 특별한 Character Encoding을 이용하여 표현한다. 다양한 character encodings하고, 몇몇 언어 (Russian, Chinese, English, Others)과 같은 특별한 언어들을 효과적으로 표현한다.

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
위와 같이 사용하는 것에 대해 간단하게 말하면, 이렇게 정의하게 되면 웹 저자는 UTF-8 character encoding을 사용하여 HTML문서를 작성하는것으로 생각한다.
HTML5에서는 character set의 <meta>태그 설정이 더 쉬워졌다.

<meta charset="utf-8">

원서 : http://diveintohtml5.org/detect.html

 
HTML5 기본태그의 설명 (4. Friends & (Link) Relations) html5 
일반적인 링크(a href)는 다른 페이지를 연결하는 간단한 방법이다. Link relations은 다른 페이지를 왜 연결했는지에 대해 설명하는 방법이다.
1. stylesheet는 브라우져에서 보여지는 문서에 대한 CSS규칙을 포함하고 있다.
2. feed는 현재 페이지에서 같은 내용, 표준 구독 포맷을 포함하고 있다.
3. 다른 언어에서 현재 페이지를 번역 할 수 있다.
4. PDF 포맷도 지원한다.

links의 두가지 종류는 links element를 이용하여 만들 수 있다. 
1. Links to external resources는 현재 페이지를 확장하는 것을 사용하여 resources를 links 한다.
2. hyperlink links는 외부 문서를 links한다.

external resources에서 links의 정확한 동작은 정확한 관계(관련된 link type의 정의)에 의존한다.

종종, link relations은 페이지의 <head>내에서 <link> element로 볼 수 있다.
몇 link relations들은 <a> elements일 수 있지만, 일반적이지는 않는다. HTML5는 <area>element에서 몇몇 relations을 사용 할 수 있지만, 이것도 덜 일반적이다.(HTML4는 <area>element에서 rel 속성을 허용하지 않는다.)
다음의 링크에서 rel 값을 올바르게 사용하는 것에 대해 볼 수 있다.
the full hcart of link relations(http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#linkTypes)

원서 : http://diveintohtml5.org/detect.html

- rel = stylesheet
아래의 link relation을 봐보자
<link rel="stylesheet" href="style-original.css" type="text/css" />
<link rel="stylesheet">는 분리된 파일에서 저장된 CSS 규칙을 가르킨다.
HTML5에서는 'type' 속성을 사용하지 않음으로써 작은 향상을 만들었다.
웹에서의 stylesheet 언어는 css가 type 속성의 기본값이기 때문이다.

<link rel="stylesheet" href="style-original.css" />

- rel = alternate
<link rel="alternate" type="application/atom+xml" title="My Weblog feed" href="/feed/" />
위의 link relation은 일반적이다. <link rel="alternate">(RSS 혹은 type 속성에서 Atom media type으로 합쳐진 것)은 'feed autodiscovery'라고 불려진다.

<link rel="alternate">는 최신문서의 새로운 feed를 가지고 있는 사이트를 발견한 feed reader(google reader같은)들이 출판하는것을 허용한다. 대부분의 브라우져들은 rel="stylesheet"와 다르게 특별한 아이콘에 URL링크를 걸어 feed autodiscovery를 지원한다.

rel="alternate" link relation은 사용하는 조건중 특이한 조합이다. HTML5에서 rel="alternate" link relation 정의는 정확하고, 존재하는 웹 컨텐츠를 더욱 더 명확하게 , 확장 시켜준다.
type=application/atom+xml과 rel="alternate"을 함께 사용하는 것은 현재 페이지의 Atom feed를 나타낸다.
그러나 rel="alternate"과 다른 속성의(PDF와 같은 속성을 나타내는 것은) 사용은 할 수 없다.
HTML5는 문서의 해석에 대한 링크를 하는 방법에 대한 오랜 혼동을 사용하지 않기로 했다.
HTML4에서는 링크된 문서의 명확한 언어를 위해 rel="alternate"와 lang 속석을 혼합하여 사용했지만, 이것은 잘못된 것이다.

The HTML 4 Errata(http://www.w3.org/MarkUp/html4-updates/errata)의 리스트중 4개는 HTML4 spec의 에러이다.
이러한 눈에 띄는 에러중 하나는 rel="alternate"를 문서에 링크시켜 언어를 정하는 방법이다. 
(HTML4 Errata와 HTML5에서는 옳은 방법은 hreflang 속성을 사용하는 것이다.)
안타깝게도, 이러한 errata는 HTML4 spec에 합쳐지지 않을것이다. W3C HTML Working Group이 HTML을 구현하는 단체가 아니기 때문이다.

- HTML5에서의 기타 link relations
rel="archives" = 참고문서는 자료, 문서, 역사적인 소재의 모음을 설명하고, rel="archives"는 참고문서를 가르킨다.
블로그의 index 페이지는 블로그의 과거 포스트들을 rel="archives"와 함께 index를 링크시킬 수 있다.

rel="author" = rel="author"는 페이지 저자에 대한 정보를 링크하는데 사용되어 졌다.
이것은 mailto: address 일 수 있다. 페이지 저자에 대한 contact form 링크 일 수 있다.

rel="external" = link는 현재 문서 형태들의 부분인 site 일부분이 아닌 문서들을 나타내고, rel="external"은 이러한 link를 가르킨다.
이러한 형태의 문서는 wordpress였다. wordpress는 댓글에 의하여 링크들이 유지됐다.

HTML4는 시리즈(책의 chapter, 블로그의 post들)로 된 페이지들 관계의 정의를 rel="start", rel="prev", and rel="next"로 정의했다.
이중에서 rel="next"만이 올바르게 사용되고 있다.

사용자들은 rel="prev"대신에 rel="previous"라고 사용한다. 또, rel="start"대신에 rel="begin", rel="first"를 사용한다.
그리고 rel="last"대신에 rel="end"를 사용한다.

HTML5에서는 rel="first"를 포함하고 있다. 이러한 first라는 단어는 시리즈의 첫번째 페이지를 
말하는 다양한 방법중 가장 일반적인 변화이다.(rel="start"는 확인되지 않은 동의어이다.

rel="icon"은 두번째로 많이쓰는 link relation이다. icon을 쓸때는 shortcut과 함께 쓴다.
<link rel="shortcut icon" href="/favicon.ico">

주요한 브라우져들은 페이지의 작은 아이콘과 관련해서 위와 같은 사용을 지원한다. 
일반적으로 browser의 location bar에서 다음 url이나 browser tab등을 보여준다.

HTML5에서 size속성은 아이콘으로 보여지게 사이즈를 보여주고 아이콘들을 연관시킬 수 있다.
<link rel=icon href=favicon.png sizes="16x16" type="image/png">
<link rel=icon href=windows.ico sizes="32x32 48x48">
<link rel=icon href=mac.icns sizes="128x128 512x512 8192x8192 32768x32768">
<link rel=icon href=iphone.png sizes="59x60" type="image/png">
<link rel=icon href=gnome.svg sizes="any" type="image/svg+xml">
<link rel=stylesheet href=lsforums.css>

rel="license"는 microformat community(http://microformats.org/wiki/rel-license)에서 만들어졌다.
참고 문서는 copyright license를 제공한다.

rel="nofollow"에서 link는 문서 저자나 페이지의 publisher, 페이지지와 관련된 사람들에 의해 상업적인 관계에 포함되어 있는 참고문서의 링크에 의해 권한을 가지지 못한다라는 것을 나타낸다.
대부분의 blogging system들은 댓글에 의해 추가된 링크를 대쳐하기 위해서 rel="nofollow" 링크를 추가하는 것이 기본이다.

re="noreferrer"는 following link가 있을때 언급한 정보에 대한 정보 없이 부족할때 쓴다.
대부분의 브라우져들은 이러한 기능을 지원하지 않지만, WebKit계열 브라우져들은 지원하고 있다.

rel="pingback"은 "pingback" server의 주소를 명시한다.
the Pingback specification(http://hixie.ch/specs/pingback/pingback-1.0)의 설명을 보면 pingback system은 다른 웹사이트에서 link를 했을때 블로그에 자동적으로 알려주는 방법이다.
wordpress blogging system의 pingback mechanism인 저자에게 알람을 실행은 새로운 블로그 포스트를 만든 후 다른 사용자들이 link를 했을때이다.

rel="prefetch"는 선fetching과 특정resource caching은 매유 효율적이고, 사용자들은 이러한 방식을 더욱 더 요구할 것이다. 

사용자들이 다른 검색 결과보다 상단 검색 결과들에 대한 인기가 높다라면, search engine은 검색결과 페이지에 <link rel="prefetch" href="URL of top search result">다음과 같이 추가할 것이다.
예를 들어, Firefox를 사용한다라면, http://www.google.com/search?q=cnn 이 페이지의 소스를 보면 prefetch 키워드를 찾을 수 있다. firefox만이 rel="prefetch"를 지원하고 있다.

 
HTML5의 구조 태그 html5 
HTML5와 CSS3, ECMAScript 5의 working draft단계이거나 최종 초안이 공개되었고
그에 맞춰 따라가야한다는 생각에 먼저 HTML5에 관련된 내용을 찾아 봤습니다.
HTML5의 맛은 봤으니 CSS3에 대해서 찾아논 자료를 공부해봐야할거 같네요.

HTML5명세서는 몇가지 흥미롭고 구조적인 마크업을 유용하게 할 수 있는 태그들을 추가했다.
이러한 태그들(매일 사용하는 주요한 것들)은 우리가 사용하는 코드(일반적으로 div)를
변경시켜줄 것이다.

그럼 한번 무엇인지 알아보자
1. Defining Structure(구조 정의)
 - <section></section>
   section은 내용을 모아 주제화 하는 것이고, header태그가 section태그보다 선행되어야 하고, section태그 뒤에는
   fotter태그가 와야 한다. section은 각각 부분마다 정의 될 수 있다. 
 - <header></header>
   section의 header는 제목 혹은 제목을 그룹핑하거나 section의 보중 설명을 포함한다.
 - <footer></footer>
   footer는 누가 쓴것인지, 어떤 문서와 링크가 연결되어 있는지, copyright, 기타등등의 내용들을 포함하고 있다.
 - <nav></nav>
   이 태그에는 navigation영역을 정의한다. 링크의 리스트등과 같은 것들. nav의 정의 위치는 section,
   header, footer와 같은 주요한 태그 다음이어야한다.
 - <article></article>
   블로그, 매거진, 개요등과 같은 내용을 독립적으로 구성 할 수 있다.
 - <aside></aside>
   aside는 내용과 관련된 것을 나타낸다.
일반적인 블로그 페이지를 새로운 구조 태그로 적용해보자.
<!DOCTYPE html>
<html>
  <head>
    <title>Standard Blog</title>
  </head>
  <body>
    <header>
      <h1><a href="#">Standard Blog</a></h1>
    </header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Archives</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <section>
      <article>
        <header>
          <h1><a href="#">Title</a></h1>
        </header>
        <section>
          <p>Lorem ipsum...</p>
        </section>
      </article>
      <article>
        <header>
          <h1><a href="#">Title</a></h1>
        </header>
        <section>
          <p>Lorem ipsum...</p>
        </section>
      </article>
      <article>
        <header>
          <h1><a href="#">Title</a></h1>
        </header>
        <section>
          <p>Lorem ipsum...</p>
        </section>
      </article>
    </section>
    <footer>
      <p>Copyright © 2008 All Rights</p>
    </footer>
  </body>
</html>
그럼 이 태그를 사용할 수 있을까?

현재 나온 브라우져들은 지원을 하고 있고 IE6에서 또한 적용이 가능하다. 다만 몇가지 작은 변덕이 있는데
이 태그들을 사용하고자 하면 작은 문제들을 넘어가는 것이 필요하다.
첫번째, 새로운 HTML5 doctype은 대부분의 브라우져들이 이해하지 못한다. 
다행히도 이런 내용에 유동적인 브라우져들 때문에 그들은 알 수 없는 태그들을 대처 할 수 있다.
이러한 알려지지 않은 태그(기본적인 스타일이 없는)이고, 이것들은 inline태그로 다루어져 왔다.
이러한 새로운 HTML5 태그들은 구조적인 내용이고 명확한 block level 요소이다.
그렇기 때문에 우리는 태그들에 css 스타일을 적용해주어야 한다. (display:block같은 속성)
css를 간단하게 부분적으로 확장하고 이러한 새로운 태그들은 바로 사용하기 때문에 바로 사용 할 수 있다.
물론 HTML5가 더욱더 지원되어지고, display:block과 같은 쓸모없는 속성은 제거되어져야 하고, 그것은
브라우져의 기본적인 style로 지원될것이다.
IE 지원
만약 IE지원을 요구한다라면 더 많은 이슈가 있을것이다.IE rendering engine은 새로운 태그들을 적용할 것이지만
어떠한 CSS내용도 인식하지 못할 것이다. 다행히도 IE는 매우 간단한 자바스크립트로 신속하게 대처하고 있다.
HTML5를 사용하기 위해선 각각 새로운 태그들을 위해 자바스크립트로 DOM을 만든다
이렇게 하면 새로운 태그에 대한 문제점을 없앨 수 있다. 그 코드는 다음과 같다.
<script>
  document.createElement('header');
  document.createElement('footer');
  document.createElement('section');
  document.createElement('aside');
  document.createElement('nav');
  document.createElement('article');
</script>
이 코드를 적용하기 이전에 HTML5에서의 script태그에 대해 얘기해보자.
HTML 어떠한 script태그에도 type="text/javascript"가 작성되었다고 가정한다. 기존에 넣었던 이 속성을 넣지
않아도 되고 매우 간단해 전다.
HTML5가 제공하는 태그들을 사용하여 문서의 구조를 만들 수 있다(몇가지 편법과 함께)
새로운 웹사이트를 작업할때 더욱 더 구조적으로 마크업을 정의하여 (HTML5를 고려하여)야 한다.

http://orderedlist.com/articles/structural-tags-in-html5 (원문)

- http://channy.creation.net/project/html5/html4-differences/Overview_ko.html (channy님 자료)
- http://firejune.com/1440 (firejune님 자료)
- http://dev.w3.org/html5/spec/Overview.html (W3C)
- http://a.deveria.com/caniuse/ (HTML5를 지원하는 브라우져를 만날 시점들을 브라우져의 버전별로 정리한 표)
 






 

Mads Kjaer씨가 HTML5와 CSS3로 블로그 페이지 만드는 방법에 대해서 글을 올리셨는데
개인적으로 읽다 흥미가 생겨 글을 옮겨 보았습니다. 
http://twitter.com/mads
그분의 twiiter이고요 궁금 하신 분들은 한번 구경해보세요.

HTML5와 CSS3를 가지고 위의 이미지와 같은 블로그 페이지를 만들어 볼려고 한다.
구조는 Header에는 title, 수평네비게이션, content area에는 comments, form, sidebar
와 footer가 위치한다. 
HTML5는 HTML의 새로운 버전이다. 페이지를 더욱 semantic하게 만들어준다.
search engines와 screenreders를 사용하는 것을 더욱 쉽게 해준다.
사용자들의 경험을 향상 시켜줄것이다. HTML5는 fancy APIs(screen에 다양한 그래픽을 표현,
offline에서 데이터 저장, dragging와 dropping등 많은 내용들을 포함하고 있다.

기본적인 구조.

 
HTML5에서는 header,navigation ,sidebar and footer들이 mark up의 의미를 더욱 명확하게 해준다. 
다음과 같은 mark up을 설명할려고 한다.
<!doctype html>  
<html>  
<head>  
    <title>Page title</title>  
</head>  
<body>  
    <header>  
        <h1>Page title</h1>  
    </header>  
    <nav>  
        <!-- Navigation -->  
    </nav>  
    <section id="intro">  
        <!-- Introduction -->  
    </section>  
    <section>  
        <!-- Main content area -->  
    </section>  
    <aside>  
        <!-- Sidebar -->  
    </aside>  
    <footer>  
        <!-- Footer -->  
    </footer>  
  
</body>  
</html>  
보통 HTML markup와 같이 보이지만 몇가지 집고 넘어가야 할 부분이 있다.
HTML5에서 doctype은 하나입니다. 페이지의 시작부분에 <!doctype html>로 선언을 해준다.

이것은 HTML문서라는 것을 브라우져에게 알려줍니다.
- 이미 알려진 태그(h1)은 새로운 태그인 header가 감싸고 있다. (페이지 타이틀, logo등)
  contents의 table 또는 search form등도 포함할 수 있다.
  header는 일반적으로 h1~h6의 heading tag를 포함하고 있다.
  header는 페이지의 전반적인 것을 소개하는데 사용되어 진다.
  또한, section태그에서는 더 세부적인 내용을 소개 할 수 있다.

- nav-tag는 navigation element를 포함하는데 사용되어졌다(사이트의 메인 네비게이션 또는 next/previous 링크같은
특정화된 네비게이션들 같은 곳에)

- section-tag는 문서의 section 위치에 대해 사용되어 졌다. markup 같은 종류 그리고 multiple section들을
각각 안쪽에서 감싸고 있다.

- aside는 메인 컨텐츠와 관련된 컨텐츠(sidebar)를 감싸고 있다. 

- footer-tag는 메인컨텐츠에 대한 추가적인 정보를 포함하고 있다. (copyright, 문서의 링크등)

우리가 만드는 페이지들의 다양한 컨텐츠들을 div를 사용하는 대신에 semantic적인 markup을 할 수 있다.
이렇게 함으로써 검색엔진, screenreder에서 우리의 페이지들을 쉽게 표현 할 수 있다.

1. 네비게이션의 마크업
네비게이션은 HTML4또는 XHTML처럼 작성할 수 있고, unorder list를 nav-tags들 안에 위치시키는
것이 중요하다.
<nav>  
    <ul>  
        <li><a href="#">Blog</a></li>  
        <li><a href="#">About</a></li>  
        <li><a href="#">Archives</a></li>  
        <li><a href="#">Contact</a></li>  
        <li class="subscribe"><a href="#">Subscribe via. RSS</a></li>  
    </ul>  
</nav> 

2. introduction 마크업
우리는 section tag를 문서에 사용하는것은 새로운 section을 정의하는 것이다.

<section id="intro">  
    <header>  
        <h2>Do you love flowers as much as we do?</h2>  
    </header>  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>  
</section>  
 
section태그에 id를 부여함으로써 후에 styling을 구분 할 수 있다.
우리는 h2태그를 감싸는 header태그를 사용할 수 있다.
게다가 이것은 문서의 전체를 표현하고 header-tag는 개별적인 section태그를 서술하는데 사용되어 진다.

3. Main content area 마크업
Main content area는 세개의 섹션으로 구성되어 있다. (블로그 포스트, comments와 comment form)
HTML5의 새로운 구조 태그를 사용하는 쉽다.

 - Blog Post Mark up
   
   <section>  
       <article class="blogPost">  
           <header>  
               <h2>This is the title of a blog post</h2>  
               <p>Posted on <time datetime="2009-06-29T23:31:45+01:00">June 29th 2009</time> by 
               <a href="#">Mads Kjaer</a> - <a href="#comments">3 comments</a></p>  
           </header>  
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tellus 
                eu orci imperdiet nec rutrum lacus blandit. Cras enim nibh, sodales ultricies 
                elementum vel, fermentum id tellus. Proin metus odio, ultricies eu pharetra 
                dictum, laoreet id odio...</p>  
       </article>  
   </section>  

   새로운 섹션 태그와 article-tag로 blog post를 감싼다.
   article-tag는 blog, discussion, encyclopedia 등 개별적인 목록의 위치에 사용되어 진다.
   하나의 article태그를 가지고 single post의 내용을 보고 있지만 blog의 front page에서
   article-tag를 각각의 post를 감쌀 수 있다.

   header태그는 blog post의 metadata와 현재시간에 사용되어 졌다. 그럼으로써 작성자는 언제 섰는지
   누가 썼는지 얼마나 많은 코멘트가 달렸는지를 알려줄 수 있다.
   timestamp는 p태그로 감싸고 있다. 이 태그는 HTML5의 새로운 태그이고 시간을 나타내는 태그로 
   사용되어 졌다.'
   datetime의 내용에 대한 속성은 다음과 같다.
   
 
   1. 년도는 dash표시가 된다.
   2. 달도 똑같다.
   3. 날짜
   4. T는 내가 현재 있는 곳에 시간을 나타낸다.
   5. 지역시간은 hh:mm:ss형태이다.
   6. 시간은 GMT 기준이다.
 
 - Comments 마크업
   새로운 속성이나 새로운 태그가 사용되지는 않았다.
   <section id="comments">  
      <header>  
          <h3>Comments</h3>  
      </header>  
      <article>  
          <header>  
              <a href="#">George Washington</a> on <time datetime="2009-06-29T23:35:20+01:00"> 
              June 29th 2009 at 23:35</time>  
          </header>  
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut.</p>  
      </article>  
      <article>  
         <header>  
              <a href="#">Benjamin Franklin</a> on <time datetime="2009-06-29T23:40:09+01:00">
               June 29th 2009 at 23:40</time>  
         </header>  
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
               nostrud exercitation ullamco laboris nisi ut.</p>  
      </article>  
   </section>  

 - Comment Form 마크업
   HTML5에서는 forms태그에 관련된 향상된 여러가지들을 소개하고 있다.
   client-side validation을 할 수 있다.(fields, emails 등)
   브라우져에서 우리의 정보를 보호 해줄 수 있다.
   
   <form action="#" method="post">  
       <h3>Post a comment</h3>  
       <p>  
           <label for="name">Name</label>  
           <input name="name" id="name" type="text" required />  
       </p>  
       <p>  
           <label for="email">E-mail</label>  
           <input name="email" id="email" type="email" required />  
       </p>  
       <p>  
           <label for="website">Website</label>  
           <input name="website" id="website" type="url" />  
       </p>  
       <p>  
           <label for="comment">Comment</label>  
           <textarea name="comment" id="comment" required></textarea>  
       </p>  
       <p><input type="submit" value="Post comment" /></p>  
   </form>  

   input에 두개의 새로운 타입이 생겼다. email, url이다. email은 사용자가 email형식에 맞게 입력하는 것이고,
   url은 website address에 맞는 형태로 입력하는 것이다. 
   속성으로 required를 쓴다면 사용자들은 빈필드로 submit할 수 없다.
   required는 boolean 속성이다.

4. Sidebar와 Footer 마크업
 - sidebar와 footer의 마크없은 간단하다. sections 태그로 몇몇 컨텐츠를 가지고 aisde-, footer-tag로 감싼다.

5. CSS3 Styling
 - CSS3는 styles, selectors, cascade의 원리로 만들어졌다. 새로운 특징들을 추가 시켰고, 
   새로운 selectors와 pseudo-classes와 속성들을 포함하고있다. 이러한 특징들을 잘 사용하면
   더욱 쉽게 layout을 나누고 설정할 수 있다.

6. 기본 셋팅

 - 시작하기 앞서 typography, background-color등 기본적인 규칙들을 정의한다.
   /* Makeshift CSS Reset */  
   { margin: 0; padding: 0; }   
  
   /* Tell the browser to render HTML 5 elements as block */  
   header, footer, aside, nav, article { display: block; }   
   body { margin: 0 auto; width: 940px; font: 13px/22px Helvetica, Arial, sans-serif; background: #f0f0f0; }   
   h2 { font-size: 28px; line-height: 44px; padding: 22px 0; }   
   h3 { font-size: 18px; line-height: 22px; padding: 11px 0; }   
   p { padding-bottom: 22px; }  

   먼저 margin과 padding을 설정한다. 
   새로운 HTML5태그들을 block으로 설정했다. 몇몇 브라우져들은 HTML5태그들을 제대로 인식하지 못한다.
   Header는 추가적인 설정을 요구하지 않는다. 그렇기때문에 navigation 설정부터 시작할려고한다.

7. Navigation Styling
 - Navigation bar는 window의 전체 너비가 필요하다. 그래서 몇가지 style을 추가했다.
   
   nav { position: absolute; left: 0; width: 100%; background: url("nav_background"); }  

   nav-element를 absolutely로 position하고 위치를 left한 다음 너비를 100%로 맞춰주었다.
   layout경계에 list태그를 써서 center정렬할려고 한다.

   nav ul { margin: 0 auto; width: 940px; list-style: none; }     
   
   navigation items추가적인 설정을 하고 layout에 맞는 grid정렬을 할려고 한다. 
   nav ul li { float: left; }   
  
    nav ul li a {   
        display: block;   
        margin-right: 20px;   
        width: 140px;   
        font-size: 14px;   
        line-height: 44px;   
        text-align: center;   
        text-decoration: none;   
        color: #777;   
    }   
  
        nav ul li a:hover { color: #fff; }   
  
        nav ul li.selected a { color: #fff; }   
  
        nav ul li.subscribe a {   
            margin-left: 22px;   
            padding-left: 33px;   
            text-align: left;   
            background: url("rss.png") left center no-repeat;   
        }  
   
8. Introduction Styling
 - introduction 마크업의 간단한 예이다.(heading과 텍스트문장의 section)
   CSS3의 새로운 속성을 사영하여 훨씬 나은 모습을 보여줄것이다.

   #intro { margin-top: 66px; padding: 44px; background: #467612 url("intro_background.png") repeat-x;   
    background-size: 100%; border-radius: 22px; }  

   첫번째 새로운 속성은 background-image의 size를 사용하게 해준다. 우리가 사용한 예제에서는
   박스가 컨텐츠의 추가하는 만큼 유동적이라면, gradient background는 그만큼 커질 것이다.

  
 
   두번째 새로운 속성인 border-radius를 추가하여 rounded-cornor를 추가하였다. 모든 코너에
   22px만큼의 round코너를 설정하였다. 각각의 코너에 각기 다른값을 주어 설정 할 수 있다.
   
   
 
   안타깝게도 아직 주요 브라우져에서는 실행되지 않습니다.하지만 벤더설정 속성을 사용하면 
   사용할 수 있습니다. background-size는 새로운 버전의 safari, opera, konqueror가 지원합니다.
   background-radius는 새로운 버전의 safari, firefox에서 지원하고 있습니다.

   #intro {   
    ...   
    /* Background-size not implemented yet */  
    -webkit-background-size: 100%;   
    -o-background-size: 100%;   
    -khtml-background-size: 100%;   
  
    /* Border-radius not implemented yet */  
    -moz-border-radius: 22px;   
    -webkit-border-radius: 22px;   
   }

   background-color를 정의하면 firefox와 같은 브라우져에서는 background-size같은 속성을
   지원하지 않지만 주요한 문제는 없다.
   이제 heading과 text를 style하는게 필요하다.
   #intro h2, #intro p¬†{   
    width: 336px;   
   }   
  
   #intro h2 {   
    padding: 0 0 22px 0;   
    font-weight: normal  
    color: #fff;   
   }   
  
   #intro p {   
    padding: 0;   
    color: #d9f499;   
   }  

   CSS3의 지원으로 #intro에 두번째 background image를 쉽게 추가할 수 있다.

   #intro {   
    ...   
    background: #467612 url("intro_background.png") top left (287px 100%) repeat-x,   
            url("intro_flower.png") top rightright (653px 100%) no-repeat;   
    ...   
   }  

   2개의 이미지를 background-images에서 면적을 너비를 명시했고, 이미지들은 겹치지 않도록 설정했다.
   
 
   안타깝게 아직 브라우져에서는 지원하지않지만 예전 방식으로 할 수 있다.
   inline image와 positioning CSS를 이용하여 할 수 있다.

 9. Content Area And Sidebar Stylying
 - Content Area And Sidebar는 각기 다른위치에 정렬되어 있다. 기존에는 float을 사용하여 
   작업했지만 CSS3에서는 tables를 사용할 것이다.
   table이라는 얘기에 당황을 하겠지만, 예전에도 table로 작업을 했었고 아직도 하고 있다.
   우리는 table을 사용하여 layout을 만들지 않는다. 하지만 CSS3에서는 markup으로 table을
   사용하지 않고 CSS속성으로 사용한다. 한번 시작해보자.

   <div id="content">  
       <div id="mainContent">  
           <section>  
               <!-- Blog post -->  
           </section>  
           <section id="comments">  
               <!-- Comments -->  
           </section>  
           <form>  
               <!-- Comment form -->  
           </form>  
       </div>  
       <aside>  
           <!-- Sidebar -->  
       </aside>  
    </div>  

    semantic적으로 의미있게 만들고 그것을 styling할것이다. #content div태그를 table과 같이 사용할 것이다.
    #mainContent를 table-cells로 설정할 것이다. CSS3로 하면 굉장히 쉽다.
 
   #content {   
       display: table;   
   }   
  
    #mainContent {   
        display: table-cell;   
        width: 620px;   
        padding-right: 22px;   
    }   
  
    aside {   
        display: table-cell;   
        width: 300px;   
    }  

    더이상 float은 사용 안해도 된다. float을 해제시켜주지 않아도 된다는 것이다. 
    이 방법은 layout을 만드는데 더 쉽게 해준다.

 - Blog Post Styling
   Header부분은 multi-colum layout에서 참고하길 바란다.
   Multiple columns
   text의 Multiple columns는 텍스트를 자르는 방법없이는 불가능하다. 
   div를 여러번 감싸는 것으로 여러 문단으로 나누는 방법이 있지만, CSS3는 정말 쉽게 처리해준다.

   <div>  
       <p>Lorem ipsum dolor sit amet...</p>  
       <p>Pellentesque ut sapien arcu...</p>  
       <p>Vivamus vitae nulla dolor...</p>  
       ...   
   </div>  

   2가지 간단한 속성을 넣어 추가할 수 있다.
   .blogPost div {   
       column-count: 2;   
       column-gap: 22px;   
   }  

   2개의 columns과 사이의 간격을 22px만큼 띄길 원한다. 추가적인 div가 필요하다.
   현재는 하나 이상의 column을 span태그로 만드는방법을 지원하지 않기 때문이다.
   그러나 앞으로는 column-span속성으로 해결 할 수 있다.

   .blogPost {   
       column-count: 2;   
       column-gap: 22px;   
   }   
  
   .blogPost header {   
       column-span: all;   
   }  

   column-count, column-gap은 지원되는 브라우져가 많지 않다(safari,firefox)
   하지만 브라우져를 명시하는 속성으로 사용할 수 있다.

   .blogPost div {   
    /* Column-count not implemented yet */  
    -moz-column-count: 2;   
    -webkit-column-count: 2;   
  
    /* Column-gap not implemented yet */  
    -moz-column-gap: 22px;   
    -webkit-column-gap: 22px;   
   }  

 - Box shadow
   밑의 blog post에서 images를 가깝게 보고자 하면 drop-shadow를 볼 수 있을것이다. 
   CSS3속성을 이용하여 box-shadow속성을 설정하였다.
   
   .blogPost img {   
       margin: 22px 0;   
       box-shadow: 3px 3px 7px #777;   
   }

  
 
   첫번째 3px은 그림자효과를 수평으로 나오게 한다. 두번째 3px은 수직으로 그림자를 나오게
   한다. 마지막 7px은 border를 흐리게 표현한다. 0으로 설정하면 solid형태로 출력된다.
   마지막은 그림자의 기초색을 설정한다. 이 색은 번지게 표현되며 그림자의 번짐을 
   더욱 표현해준다.
   아직 브라우져에서는 적용이 되지않고 safari에서만 사용이 가능하다.
   
   .blogPost img {   
       margin: 22px 0;   
       -webkit-box-shadow: 3px 3px 7px #777;   
   }  

 - comments에서의 zebra-stripting
   zebra-striping(나열된 엘레멘트중 두번째 엘레멘트에 hilighting이 된것)는 기존엔 자바스크립트를 통한
   엘레멘트 선택을 포함한다. 모든 엘레멘트에 대해서 반복문을 이용하여 홀수엘레멘트만 hilighting이
   되도록 하였다. 하지만 CSS3의 pseudo-class(nth-child)를 사용하여 해결하는 방법을 얘기할려고 한다.
   이 방법은 자바스크립트없이 간단하게 해결 가능하다. 
   
   section#comments article:nth-child(2n+1) {   
      padding: 21px;   
      background: #E3E3E3;   
      border: 1px solid #d7d7d7;   
  
      /* Border-radius not implemented yet */  
      -moz-border-radius: 11px;   
      -webkit-border-radius: 11px;   
   }  

   2n+1은 매우 간단하다.
    - 2n selects는 두번째 아이템을 선택한다. 3n이라고 쓰면 3번째 아이템을, 4n이면 4번째 아이템이다.
    - +1이란 모든 브라우져에서 엘레멘트1(두번째 엘레멘트)를 시작으로 인식한다.
    programming에서 얘기하는 배열과 동일하게 array의 시작은 0이고 이것 또한 동일하다. 
    element1은 두번째 엘레멘트를 얘기하는 것이다.

   다음과 같이 간단하게 쓸 수도 있다.
   section#comments article:nth-child(odd) { ... }  
   두가지 속성이 있다. odd와 even

완료 페이지는 밑의 링크에서 확인 할 수 있다.
see the final design
http://nettuts.s3.amazonaws.com/373_html5/final.zip

HTML5, CSS3를 사용하여 layout을 위해 float을 사용하지 않아도 될 것이고
zebra-stripe table또는 background images 너비, 높이를 위해서 스크립트를 작성하는 시간을
줄일 수 있다.

IE6,7에서는 정상적으로 보이지는 않습니다. HTML5, CSS3를 지원하지 않고
있기 때문이고 CSS3의 지원은 IE8부터 되고 HTML5를 지원하는 방법은 제가 올린 글 중


HTML5 지원하지 않는 IE에서 HTML5 사용하는 방법

을 참고하시면 될 것 같습니다.

원본주소 : http://net.tutsplus.com/tutorials/html-css-techniques/html-5-and-css-3-the-techniques-youll-soon-be-using/












HTML5 지원하지 않는 IE에서 HTML5 사용하는 방법 html5 
(function(){        
        if(!/*@cc_on!@*/0) return;
        var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,
                eventsource,figure,footer,hgroup,header,mark,menu,meter,nav,output,
                progress,section,time,video".split(','),i=0,length=e.length;
        while(i<length){
                document.createElement(e[i++])
        }
})();

paul hayes씨의 블로그에서 가져온 내용 입니다.
앞으로 올릴 글을 위해 미리 올리는 거예요 ㅋㅋ
http://www.fofronline.com/2009-06/moving-markup-towards-html5/ 
 

HTML5의 시작 html5  
저자 : J. David Eisenberg
크롬과, FF3, Opera, Safari에서 HTML5를 지원하고 정말 빠르게 우리에게 다가오고
있다. 넓게 퍼져있는 HTML5에 대한 내용에 대해서 준비하는데 도움을 줄 수 있는
몇가지 제안을 하려고 한다.
1. 다른 사람들이 작업해놓은것을 보아야한다.
- 당신이 준비할 수 있는 첫번째 일은 다른 사람들이 작업해 놓은 HTML5에 관련된
  내용을 보는 것이다. HTML 5 gallery(http://html5gallery.com/) 에서 
  새로운 HTML5 요소를 사용한 몇가지 사이트들을 볼 수 있을 것이다.
2. 지금 바로 시작해라.
이곳(A Preview of HTML 5 - http://www.alistapart.com/articles/previewofhtml5/)이나 
이곳(http://html5doctor.com/)들의 글을 읽거나, 사이트들을 볼 수 있다. 
혹은 HTML5명세서(http://www.whatwg.org/specs/web-apps/current-work/)도 있다.

하지만 위에 내용보다도 새로운 요소들을 사용해보게 HTML5를 이해하는데 도움이
될 것이다. 현재 보고 있는 사이트의 내용을 수정해보거나, 새로운 페이지를
만들어 보는 경험을 해볼 수도 있다.

내가 경험한 여행에 대한 내용을 만들어 보았다.(http://langintro.com/hamburg5/index.html)
이렇게 직접 작업을 하며녀서 새로운 것을 발견하게 되었다. 예를들어
FF3.5에서는 article, section요소에 대해서 display:inline속성으로 되어 있었다.
그래서 내가 생각했던 대로 이 요소들을 display:block속성으로 변경시켜주었다.

3. X표시에 대한 궁금점
대부분의 디자이너들은 마크업을 작성할때 모든 내용을 손으로 작업하는걸 싫어할
것이다. HTML5를 빠르게 이해하고 싶다라면, 손으로 작성하는 만큼 배우게 될
것이다. 그리고 HTML5, XHTML1.0/1.1 and XHTML5의 사이에서 관계에서 조그마한
혼동을 느낄 것이다. 이제부터 차이점에 대해 해결해 보고자 한다.
HTML4.0(우리가 현재 사용하는)은 SGML이라 불려지는것에 의해 규칙이 기초되어 있다.
SGML규칙은 별도의 closing tag(<img>)를 사용하지 않아도 되고, 속성의 값을 정의 해줄때에는
quotation마크들 없이도 작성 할 수 있다. 
하지만 XHTML1.0과 1.1은 XML이라 불려지는 규칙에 의해 기초되어 있다.
XML규칙에 따르면 요소 속성에서 quotation마크들은 반드시 붙어야 하고 closing tag 또한 반드시 필요하다. 
HTML5는 위의 두 규칙에 기초되어 정의되지 않았고, HTML form(serilization 또는 스펙을 HTML form이라고 불렀다.)
또는 XHTML form에 의해 기초되었다. HTML form에서 마크업을 작성할때, 몇가지 태그들에서는 closing(and opening)를
사용하지 않고, 속성값에 quote를 가지지 않아도 된다. 또한 몇가지 XML마크업 을 사용할 수 있고, <img />, <hr />를 사용할 수 있다.
XHTML serilization사용할 때, 언급되어진 XML 규칙을 따를 수도 있다.
XHTML5를 작성하거나 HTML5를 사용할때 XHTML로서 사용하면 된다. 
또한 XML 표준을 유지하면 마크업시 시간을 절약할 수 있다. 또한 속성값의
quote값을 사용한다면 더 나을 수 있다. 게다가 이러한 결정을 하는데 
시간을 낭비하지 않느다면 마크업의 일관성을 유지할 수 있다. 
HTML5이 아닌 XHTML5로 마크업한다면 그 문서는 여러곳에서 활용가능한 문서로서
다양한 마크업을 구성할 수 있다.(예:RDFa, MathML , HTML5의 SVG - http://www.w3.org/Style/XSL/).
또한 XML에 기초되어진 XPath, XSLT, XQuery과 같은 툴에서도 사용가능하다.
또한, XHTML5로 작성한다면 MIME type은 Application/xhtml+xml or text/xml로 정의된다.
이러한 MIME type의 정의는 서버관리자와의 조율이 필요할것이다.
4. 정규표현식

HTML5는 Input요소를 확장시켰다. (날짜만 입력가능하게하는 속성과
최소, 최대값(numeric range설정)을 포함하는 속성과 type의 새로운 값을
설정 할 수 있도록 제공한다.(url,email,date,time등)
이러한 속성들이 필요없다면 input type속성에 "text"라고 입력하면 된다.

또한 pattern속성은 정규표현식(ECMAScript-http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
또는 자바스크립트로 정의되어진)을 입력할 수 있다. 
정규표현식은 간결하고 문자의 패턴을 명확한 방법으로 암호화하여준다.
예를들어 우편번호코드의 match를 원한다면 가능하다.

/^\d{3}-?\d{3}$/
만약 당신의 브라우져가 HTML5의 확장폼기능을 지원하지 않는다면
Google's Web Form2(http://code.google.com/p/webforms2/)를 사용하면 된다.
태그의 사용내역
Enter a date: <input type="date" name="day" required="required" title="Use format yyyy-mm-dd" />
Enter a Postal Code: <input type="text" name="postCode" required="required" pattern="/^\d{3}-?\d{3}$/" title="123-123" />
정규표현식을 잘 알고 있다면 시간을 단축 시킬 수 있다.

많은 텍스트 에디터들이 정규표현식으로 찾고 변경시키는 기능을 제공하고 있다.

5. SVG를 이용한 정적인 디자인

 - 정의:XML 그래픽표준으로 XML의개방성 상호운용성 등의 장점을 수용하여 그래픽의 활용범위 확대할 수 있도록 
만든 벡터 그래픽 (W3C)
 -특징 
   1) 선,텟스트, 이미지 등 모든 그래픽 요소에 쉽게 접근 가능하여 DB와 연동하여 웹 그래픽 문서를 동적생성하고
   2) 그래픽이 많이 사용되고 동적이며 상호운용적 인테페이스가 강조되는 분야에 활발한 기술개발 이뤄짐
          예) DOM을 통해 SVG그래픽 요소에 접근하는 지리정보시비스
   3) 플래시 형식의 모든 이점을 제공, 일반적으로 사용하는 글꼴 및 트루타입 글꼴(확장자가 ‘ttc’나 ‘ttf’로 
      윈도우즈에서 사용하는 글꼴), XML, CSS, 동적 HTML 애니메이션과 같은 기능도 지원
   4) 텍스트로 기술되는 그래픽이기 때문에 그래픽을 텍스트처럼 검색하고 인덱스 기능을 활용할
 - 문제점 : 표준부재( App개발, 배포,호환에 많은 비용 발생)

vector를 이용한 그래픽으로 동그란 도형을 만들기 원한다면 HTML5에 포함되어 있는 내장 SVG(Scalable Vector Graphics) - http://www.w3.org/Graphics/SVG/ 를 문서내에 포함 시킬 수 있다.
SVG를 포함시킨다면 FF, Safari, Opera에서 실행된다.(http://wiki.whatwg.org/wiki/Implementations_in_Web_browsers)
이미 FF3.5에서는 SVG를 사용할 수 있다. 

(http://www.alistapart.com/d/get-ready-for-html-5/simple.svg
http://www.alistapart.com/d/get-ready-for-html-5/gatto02.svg)

다음은 SVG를 이용한 간단한 색상의 네모들을 만드는 예제이다.

<svg xmlns:svg="http://www.w3.org/2000/svg"
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 200 100"
width="200px" height="100px">
<circle cx="50" cy="50" r="30"
    style="stroke:none; fill:#ff0000;"/>
<g transform="translate(100, 20) scale(1.65)">
    <polygon points="36 25, 25 36, 11 36, 0 25,
        0 11, 11 0, 25 0, 36 11"
        style="stroke:none; fill:#0000ff;" />
</g>
<rect x="60" y="20" height="60" width="60"
    style="stroke:none; fill:#00ff00;
    fill-opacity: 0.5;" />   
</svg>
SVG graphic의 동적인 수정은 자바스크립트로 가능하고, HTML5에서는 더 나은 방법을 제공한다.

6. Canvas

canvas요소는 HTML5의 가장 흥분되는 특징중의 하나이다. FF,Safari,Opera,Chrome에서 지원하고
IE에서는 아직 지원하지 않는다. Canvas요소는 앞서가는 특징이다. 자바스크립트로 무엇이든지 그리기를 원한다면
canvas요소가 필요할 것이다.

다음과 같이 자바스크립트 코드를 만들었다.

function drawSimpleCanvas() {
  var canvas =
    document.getElementById("simpleCanvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath(); // the circle
    ctx.fillStyle = "#ff0000";
    ctx.arc(50, 50, 30, 0, 2*Math.PI, true);
    ctx.closePath();
    ctx.fill();
    ctx.save();
        
    // move and resize the octagon
    ctx.translate(100, 20);
    ctx.scale(1.65, 1.65);
    ctx.fillStyle = "#0000ff";
    ctx.beginPath();
    ctx.moveTo(36, 25); ctx.lineTo(25, 36);
    ctx.lineTo(11, 36); ctx.lineTo(0, 25);
    ctx.lineTo(0, 11); ctx.lineTo(11, 0);
    ctx.lineTo(25, 0); ctx.lineTo(36, 11);
    ctx.closePath();
    ctx.fill();
        
    // restore graphics as they
    // were before move and resize
    ctx.restore();
    ctx.fillStyle = "#00ff00";
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.rect(60, 20, 60, 60);
    ctx.closePath();
    ctx.fill();
  }
}
canvas요소를 사용하려면 자바스크립트를 연동할 수 있어야한다.
Mozilla's Canvas tutorial로 Canvas와 관련된 소개와 예제를 볼 수 있다.
(https://developer.mozilla.org/ko/Canvas_tutorial)

이번 글로벌 웹 기술의 미래 포럼(http://webappscon.com/fwf/2009/program.html)에서도
FF, Opera, Chrome, Safari(이 두곳은 참석을 하지 않았지만)에서는 HTML5에 대한 지원에 대해서
굉장히 역설하셨었고, Mobile 또한 뜨거운 화두가 되어 가는것 같았다.(MS제외 ;;)
HTML5에 대해서 알면 알수록 도움이 되지 않을까?ㅋㅋㅋ

PS : SVG,VML과 Canvas 특징 (http://ppako.tistory.com/4?srchid=BR1http%3A%2F%2Fppako.tistory.com%2F4)
SVG,VML과 Canvas의 성능 비교 (http://enzine.tistory.com/450?srchid=BR1http%3A%2F%2Fenzine.tistory.com%2F450)

원문 - http://www.alistapart.com/articles/get-ready-for-html-5/
 

미리보는 HTML5 html5 
1. 개요

웹은 진화하고 있고 새롭고 혁신적인 웹사이트들은 매일같이 나오고 있다.
HTML4는 10년 가까이 되었고, 퍼블리셔들은 언어와 브라우져의 기능적인 제한으로 인하여
새로운 기술이나 향상된 기능들을 사용하지 못하고 있다.
이 글에서 HTML5의 소개와 form controls, APIs, multimedia, structure, sematics과 관련된 향상된 특징을 얘기해보려고 한다.
HTML5(2004년부터 시작되었다.)는 W3C HTML WG(http://www.w3.org/html/)와 WAHTWG(http://www.whatwg.org/)
와의 협업 노력으로 실행되었다.
관련된 주요한 인원들은 W3C의 노력으로 참여하게되었다.(Apple, Mozilla, Opera, Microsoft) 이번 글에서는 몇가지 주요한 
특징들에 대해서 간략하게 설명해보고자 한다.
2. 구조

HTML5의 새로운 요소(더 쉽게 구조를 만들 수 있다)를 소개한다.
대부분 HTML4페이지들은 일반적인 구조에서 다양함을 포함하고 있다.(headers, footers, columns)
이런 내용들은 일반적으로 div태그를 이용하여 표시한다.
 

현재 HTML4버전에서는 semantics적인 부분들을 더 상세하게 기술하는 태그가 부족하기 때문에
div 엘레멘트들을 많이 사용할 수 밖에 없다. 
HTML5는 이러한 이슈들을 해결할 수 있는 새로운 요소인 section태그를 소개하고 있다.
 

위의 이미지에 대한 마크업은 다음과 같다.
<body>
  <header>...</header>
  <nav>...</nav>
  <article>
    <section>
      ...
    </section>
  </article>
  <aside>...</aside>
  <footer>...</footer>
</body>
이러한 태그들을 사용함으로써 얻게 되는 이점이 있다. heading 태그(h1 to h6)들을 사용할때 heading levels에서 sections
태그들로 감싸주어야한다.

예를들어 h1태그를 section태그가 감싸준 마크업구조이다.
<section>
  <h1>Level 1</h1>
  <section>
    <h1>Level 2</h1>
    <section>
      <h1>Level 3</h1>
    </section>
  </section>
</section>
h1태그가 있는 곳에 다른 heading(h2 to h6) 태그들도 위치할 수 있다.
section태그들을 사용하여 페이지의 sections의 의도를 구분하고, 이런 기술적인 도움은 사용자가 페이지의 이동을 쉽게 해준다.
예를들면 navigation section 또는 빠르게 다음 문맥을 skip link필요없이 이동하게 해준다.
페이지작업자는 의미없는 div태그의 사용을 대체하여 각자에 맞는 의미있는 태그들을 사용하여 수정을 용이하고 더 쉽게 
도와준다.
- header 요소는 hbeader섹션을 대표하는 태그이다. Header는 section의 Header보다 더 많은 내용을 포함하고 있다. 
예를 들면 Header는 Subheadings 또는 버전 정보나 첫제목등의 내용을 포함하고 있다.
<header>
  <h1>A Preview of HTML 5</h1>
  <p class="byline">By Lachlan Hunt</p>
</header><header>
  <h1>Example Blog</h1>
  <h2>Insert tag line here.</h2>
</header>
- footer요소는 footer섹션을 대표한다. Footer는 일반적으로 저자나, copyright, 관련문서, 관련링크등의 정보를
포함하고 있다.
<footer>ⓒ 2007 Example Inc.</footer>
- nav 요소는 navigation link의 섹션이다. 사이트 navigation 또는 table의 contents에 적합하다.
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
- aside 요소는 contents의 sidebar로 위치한다. 일반적으로 sidebar마크업 사용시 사용된다.
<aside>
  <h1>Archives</h1>
  <ul>
    <li><a href="/2007/09/">September 2007</a></li>
    <li><a href="/2007/08/">August 2007</a></li>
    <li><a href="/2007/07/">July 2007</a></li>
  </ul>
</aside>
- section 요소는 문서나 application의 일반적인 section이다(chapter 또는 예제).
<section>
  <h1>Chapter 1: The Period</h1>
  <p>It was the best of times, it was the worst of times,
     it was the age of wisdom, it was the age of foolishness,
     it was the epoch of belief, it was the epoch of incredulity,
     it was the season of Light, it was the season of Darkness,
     ...</p>
</section>
- article 요소는 문서, 페이지 또는 사이트의 개별적인 섹션이다.
news나 blog articles, forum posts 또는 comments에 적합하다.
<article id="comment-2">
  <header>
    <h4><a href="#comment-2" rel="bookmark">Comment #2</a>
        by <a href="Jack'>http://example.com/">Jack O'Niell</a></h4>
    <p><time datetime="2007-08-29T13:58Z">August 29th, 2007 at 13:58</time>
  </header>
  <p>That's another great article!</p>
</article>
3. Video and Audio

최근 웹에서 video와 autido는 YouTube(http://www.youtube.com/), MySpace(http://www.myspace.com/)등
과 같은 video와 audio와 관련된 내용들은 누구든지 쉽게 만들어 publish하는것이 증가하고 있다.

HTHML에서는 embed나 multimedia등을 나타내는 요소가 거의 없었다. 많은 사이트는 Flash가 제공하는 기능에 의존하고 있다. QuickTIme, Windows Media등 다양한 plug-ins을 사용할 수 있음에도 불구하고, Flash는 개발자들이 APIs로 제공하여 Cross-browser를 해결하는 방안을 제공하고 있기 때문에 그렇다.
Flash에 기초한 미디어 플레이어로서 작업자들은 사용자 인터페이스를 디자인할수 있게 제공되어 지는것에 흥미를 가지고 있다. 일반적인 시작, 멈춤, 끄기, 찾기, 볼륨조정등을 가능하게 해준다.

이러한 방법은 내장되어있는 video와 audio 그리고 DOM APIs에서 제공하는 녹음재싱 기능등을
추가하여 브라우져 기본 기능을 제공한다.
새로운 video와 audio 요소는 사용하기가 쉽다. APIs의 대부분은 두가지 요소사이에서 공유하고 있다.
차이점이라면 Visual과 non-visual media가 차이점이다.
Opera(http://my.opera.com/desktopteam/blog/2007/11/08/experimental-video-build-released-on-opera-labs)와 Webkit(http://webkit.org/blog/140/html5-media-support/)은 video요소를 부분적으로 지원하게 만들어 배포했다.

위에서 얘기한 부분을 해결하기 위해서는 다음을 다운 받아야한다.
Opera(http://dev.opera.com/articles/view/a-call-for-video-on-the-web-opera-vid/)
Webkit(http://nightly.webkit.org/)

Opera는 Ogg와 Webkit에서 지원하는(QuickTime에서도)모든 포맷이 가능하고, third party codec도 포함하고 있다.
내장된 video의 가장 간단한 예제는 video요소와 브라우제에서 제공하는 기본적인 사용자 인터페이스를 사용하는 것이다.
control속성은 boolean속성이다. (사용자에게 이 control UI를 제공할것인지 선택할 수 있다. 기본은 off이다.)
<video src="video.ogv" controls poster="poster.jpg" 
width="320" height="240">
    <a href="video.ogv">Download movie</a>
</video>
optional poster 속성은 video가 시작된기전에 video가 보여지는 공간에 이미지를 위치 시킬 수 있다.
몇몇 video formats은 자체에서 poster frame을 지원하고 있음에도 불고하고(MPEG-4), poster 속성은 대안적인 해결을(video format과는 개별적으로 작업할 수 잇다.) 제공하고 있다.
audio 요소를 사용하여 내장된 audio를 사용하는 가장 간단한 방법에 대해서 얘기할려고 한다.
대부분 속성은 video와 audio 요소는 같다. 다만 audio요소는 width, height, poster 속성이 없다.
<audio src="music.oga" controls>
    <a href="music.oga">Download song</a>
</audio>
HTML5는 souce요소를 제공한다. source 요소는  codec의 지원이나 media type에 기초하여 브라우져가 선택하게 하여 video와  audio파일을 거기에 맞게 대체시켜준다.

media속성은 media type와 codecs에 따라 type 속성이나 기기의 한계에 따라 선택하여 media query를 사용한다.
souce 요소를 사용할때 src 속성은 부모노드인 video와 audio 엘레멘트 또는 대안으로 주어지는 source 요소를 무시하고 동작한다.
<video poster="poster.jpg">
    <source src="video.3gp" type="video/3gpp" 
    media="handheld">
    <source src="video.ogv" type="video/ogg;
    codecs=theora, vorbis">
    <source src="video.mp4" type="video/mp4">
</video>
<audio>
  <source src="music.oga" type="audio/ogg">
  <source src="music.mp3" type="audio/mpeg">
</audio>
작업자는 사용자 인터페이스를 변경 할 수 있기를 원하고 페이지의 디자인에 맞게 적절하게 만들 수 있기를 원한다.
확장 API는 몇가지 함수와 media에서 녹음재생을 조절하는 스크립트 이벤트를 제공하고 있다.
간단한 함수는 play(), pause()그리고 시작으로 되돌리는 현재시간 셋팅을 사용할 수 있게한다.
예제를 보고 이것들을 사용할 수 있다.
<video src="video.ogg" id="video"></video>
<script>
  var video = document.getElementById("video");
</script>
<p><button type="button" onclick="video.play();">Play</button>
   <button type="button" onclick="video.pause();">Pause</button>
   <button type="button" onclick="video.currentTime = 0;">Rewind</button></p>
video와 audio 요소에 관련된 다른 속성이나 APIs에 대해서 여기에서 다 다루지는 못했다.
더 많은 정보는 이곳(http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#video)
에서 찾아보면 된다.
4. 문서표현

html, xhtml의 이전버전과 달리 문법의 조건도 정의되어져 있다. HTML5는 DOM의 규정에의해 정의되었다.
Tree구조는 문서를 표현하는 브라우져 내부에서 사용되어 진다.

예를들어 간단한 문서의 타이틀의 구성, heading과 paragraph등을 고려한다. DOM Tree로 표현하면 다음과 같다.
 
DOM tree는 body에서의 head의 title요소와 h1, p를 포함하고 있다.
DOM의 규격에서 HTML5 정의의 이점은 언어적으로 개별적으로 문법정의가 가능하다는 것이다.
주요한 두가지 문법론은(HTML serialisation - HTML5로 알려진것, XML Serialisation - XHTML5로 알려진것) HTML문서를 표현하는데 사용되어 질 수 있다.

HTML Serialisation은 HTML의 이전버전의 문법규격인 SGML에 의하여 영감받은것으로 간주한다.
그러나 실질적으로는 브라우져에서 실질적으로 HTML을 더욱 호환성있게 다루도록 정의되어져 있다.

- text/html MIME 형식
<!DOCTYPE html>
<html>
  <head>
    <title>An HTML Document</title>
  </head>
  <body>
    <h1>Example</h1>
    <p>This is an example HTML document.
  </body>
</html>
이전버전의 HTML에서는 몇몇 tag들은 선택적이거나 자동적으로 내포되어 있다.
XML serialisation은 XHTML1.0과 같은 namespaces와 XML1.0을 사용하여 문법을 간주한다.

- XML MIME 형식
<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>An HTML Document</title>
  </head>
  <body>
    <h1>Example</h1>
    <p>This is an example HTML document.</p>
  </body>
</html>
위의 두개 예제는 보기에는 다르지만 결국 같은 내용이다.
브라우져에서 MIME type은 은 두가지로 다양하게 사용한다. text/html로 지원되는 문서는 HTML serialisation의 요구를 확인해 주어야 한다.

또 XML MIME type(application/xhtml+xml)로 지원되는 문서는 XML serialisation의 요구를 확인해 주어야 한다.
작업자는 어떤 serialisation을 사용할 것인지를 알려주어야만 한다. 
작업자는 다른 작업자 혹은 다른 작업시 하나의 조건에 강제되면 안된다.

각각의 방법은 다양한 상황에서 향상되어 질 수 있다.
- HTML 사용시 이점
  - 존재하는 브라우져 호환성을 유지할 수 있다.
  - 작업자는 이전 문서와 동일한 문법을 사용할 수 있다.
  - 유연한 문법체계는 우연한 문법적 오류를 관대하게 넘겨준다.
  - 간편한 줄여쓸 수 있는 문법 체계, 작업자는 몇몇 태그와 속성값을 생략할 수 있다.

- XHTML 사용시 이점 
  - 엄격한 XML 문법은 작업자에게 잘 만들어진 마크업을 작성하게 장려하고, 작업물을 유지보수 하는데 더 쉽게 해준다.
  - 다양한 XML 문법(SVG, MathML등)으로 향상 가능하게 해준다.
  - XML작업의 사용을 허용함으로써, 작업자들은 부분적인 수정 또는 퍼블리싱 과정을 가능하게 해준다.
5. 기여방법

HTML5는 빠르게 진행중이지만, 몇년동안은 계속 진행되어야 할 것으로 보고 있다.
다양한 테스트케이스의 생성의 요구와 상호 사용가능하게 실행되어져야하기 때문에 현재 평가내용들의 작업을
맞추는 것이 10~15년 정도 안에 완료될 것이다. 이러한 과정 동안에 다양한 사람들의 의견(디자이너와 개발자, 기획자, 개발툴 벤더들(DreamWeaver등), 브라우져 벤더)의 feedback을 통하여 HTML5의 성공을 확신할 수 있을 것이다.

모두가 환영만 할 것이 아니라 활발하게 HTML5의 feedback에 활발하게 기여해야 한다.
- HTML5와 HTML4의 차이점 : http://channy.creation.net/project/html5/html4-differences/Overview_ko.html
- HTML Design 원리 : http://www.w3.org/TR/html-design-principles/
  HTML Design 원리는 현재 존재하는 많은 디자인의 결정들을 이성적으로 판단하는데 도움을 줄 수 있다.
- 웹개발자의 가이드를 위한 HTML5 : http://dev.w3.org/html5/html-author/
  HTML5문서를 쓰는것에 대해서 알 수 있는 필요성에 대해서 디자이너와 개발자들에게 실전에서 쓸 수 있게 하고, 가이드라인을 제공하고 이해시키는데 도움이 될 수 있을 것이다.
마지막으로 WHATWG blog(http://blog.whatwg.org/)에 코멘트를 남길 수 있다.
원문 : http://www.alistapart.com/articles/previewofhtml5/
 

Blog templates:HTML5의 layout관련 elements html5 
HTML5 spec은 layout과 관련된 새로운 sectioning elements를 소개하고 있다. - <article>, <section>, <header>, <footer>, <nav>, <aside>, <hgroup>

이런 태그들을 사용할때에 대한 혼란이 늘어나고 있다. 이러한 태그들을 사용할때 더 적절하게 사용하는 방법과 예제를 통하여 blog template을 만들어 보고자 한다.

- 기본적인 페이지 template
처음 시작은 블로그의 기본적인 페이지 template부터 시작하고자 한다. 여기서는 사이트의 header, footer, sidebar, contents는 
제외하고 sub-templates과 관련되게 제공하고자 한다.
<!DOCTYPE html>
<html lang="en-US-x-Hixie">
  <head>
    <title>My Blog: Adventures in cat pictures</title>
  </head>
  <body>
    <header> <!-- site header -->
      <hgroup> <!-- squashes subtitle in doc outline -->
        <h1>My Blog</h1>
        <h2>Adventures in cat pictures</h2>
      </hgroup>
      <nav> <!-- main blog navigation links -->
        <ul>
          <li><a href="…">Front page</a></li>
          <li><a href="…">About My Blog</a></li>
          … other navigation links …
        </ul>
      </nav>
    </header>
    … main content goes here …
    <aside> <!-- sidebar -->
      <section>
        <h1>Search My Blog</h1>
        <form action="…">
          <input name="q" type="search"
          placeholder="To search, type and hit enter" />
        </form>
      </section>
      <section>
        <h1>Blogroll</h1>
        <ul>
          <li><a href="…">My other blog</a></li>
          <li><a href="…">Your blog</a></li>
          <li><a href="…">Your friend’s blog</a></li>
        </ul>
      </section>
    </aside>
    <footer> <!-- site footer -->
      <p>Copyright ⓒ 2009 You. All rights reserved.</p>
      <address>
        <a href="you@example.orgyou@example.orgmailto:you@example.org">you@example.org</a>
      </address>
    </footer>
  </body>
</html>
위의 마크업은 쉽게 이해가 될것이다. 그래도 잠깐 짚고 넘어가보고자 한다.
첫째, page header
<header> <!-- site header -->
  <hgroup> <!-- squashes subtitle in doc outline -->
    <h1>My Blog</h1>
    <h2>Adventures in cat pictures</h2>
  </hgroup>
  <nav> <!-- main blog navigation links -->
    <ul>
      <li><a href="…">Front page</a></li>
      <li><a href="…">About My Blog</a></li>
      … other navigation links …
    </ul>
  </nav>
</header>
이 사이트의 header에는 새로운 세개의 태그가 사용되어 졌다. - <header>,<hgroup>,<nav>
<header>태그는 모든 sectioning 태그에서 사용되어 질 수 있다. 

이러한 조건에서는 <body>의 header로서 사용되어졌고, <article>태그만큼 새로운 sectioning elements이다.
페이지에서 사이트 heading과 page- 또는 section-specific headings의 차이를 구분할려고 한다면
CSS styling으로 가능하다.
<hgroup>태그에서는 h1-h6태그를 사용하고 subheading, 대체제목, line으로 구분할때 사용되어 진다. 
위의 코드에서 처럼 header에서, blog의 제목과 & 서브제목을 마크업할때 사용하고, 서브제목이 문서의 바깥으로 
나타나지 않게한다.

<nav>태그는 페이지내에서 다른 페이지 혹은 섹션 링크를 나타내는 섹션이다. <nav>태그는 header내용을 포함할 수 있다.
다음은 sidebar이다.
<aside> <!-- blog sidebar -->
  <section>
    <h1>Search My Blog</h1>
    <form action="…">
      <input name="q" type="search"
             placeholder="To search, type and hit enter" />
    </form>
  </section>
  <section>
    <h1>Blogroll</h1>
    <ul>
      <li><a href="…">My other blog</a></li>
      <li><a href="…">Your blog</a></li>
      <li><a href="…">your friend’s blog</a></li>
    </ul>
  </section>
</aside>
sidebar에서는 몇가지 새로운 태그와 속성이 사용되었다. - <aside>,<section>,<input type="search">,
placeholder attribute.  sidebar는 <aside>태그로 표현할 수 있다. 
sidebar의 각 섹션은 <section>태그가 포함되어 있다.
HTML5는 application section 또는 문서내에서 <section>태그를 정의할 수 있다. section은 컨텐츠의 주제별 그룹이고, 
heading, footer에서도 사용 가능하다.
<section>태그는 문서를 부분적으로 나누는것이다. 각 sidebar의 sections은 heading을 가지고 있고, 경계를 나타내준다.
<h1>태그를 headings으로 사용하고 <h2>~<h6>을 사용하지 않았다. sectioning태그는 heading태그를 
중복시키지 않는 역활을 한다. 

예제를 보면
<body>
  <h1>Heading 1</h1>
  <h2>Heading 1.1</h2>
  <h3>Heading 1.1.1</h3>
  <h2>Heading 1.2</h2>
</body>
 
또 다른 예제
<body>
  <h1>Heading 1</h1>
  <section>
    <h1>Heading 1.1</h1>
    <section>
      <h1>Heading 1.1.1</h1>
    </section>
  </section>
  <section>
    <h1>Heading 1.2</h1>
  </section>
</body>
CSS를 사용하여 body>h1 style이 section>h1보다 rendering되는 크기가 더 크다.
중복되는 최상위 heading과 하위 heading를 <section>태그로 구분할 수 있을 것이다.

search form은 HTML5의 내용중 부분적으로 사용을 하였다. <input type="search">는 type="text"와 같은동작을 하지만 
분명한 차이점이 있다.
이러한 속성들은 Webkit엔진을 가진 브라우져(safari)에서는 몇년전부터 실행이 되어졌고, HTML5에서는 채택이 되어 졌다.
placeholder 속성은 input내용이 비어 있을때 또는 focus가 가지 않았을때 입력 예를 보여주고, 사용자가 
click(또는 tab)으로 해당input field를 이동했을때는 텍스트가 사라지게 한다.
<footer>태그는 site의 metadata( copyright, contact information) 것들을 포함하고 있다.
<footer> <!-- site footer -->
  <p>Copyright ⓒ 2009 You. All rights reserved.</p>
  <address>
    <a href="you@example.orgyou@example.orgmailto:you@example.org">you@example.org</a>
  </address>
</footer>
- 개별 blog posts
블로그를 보는 두가지 방법이 있다. 하나는 페이지 내에서 한가지 블로그 포스트만 보는 것이고, 하나는 전체적으로 
모아놓은 블로그 포스트들을 보는 것이다. 
<article>
  <header> <!-- blog post header -->
    <h1>My Blog Post</h1>
    <p>
      posted by You at <time
      datetime="2009-09-04T16:13:40-07:00">1:40 PM
      on September 4th, 2009</time>
    </p>
  </header>
    … body of blog post …
  <footer> <!-- blog post footer -->
    <p>Comments are closed at this time.</p>
  </footer>
</article>
감싸고 있는 article 태그와 time 태그를 사용하고 있다.
<article>태그는 블로그 포스트를 사용하는 가장 좋은 sectioning 태그이다.
 * <article>태그는 개별적인 문서의 부분, 페이지, 어플리케이션 또는 사이트등의 폼들을 구성하는 
페이지 섹션을 나타낸다. <article>태그는 "독립적이다" 컨텐츠로 따로 사용할 수 있고, 어느 부분에서든 섹션별로 
구분지어질 수 있다.
예를들어, 블로그 컨텐츠가 길고, 여러 부분으로 쪼개져 있고, 각각 subheading을 가지고 있다라면, 이러한 조건에서 
<section>태그를 사용하면 된다.
<article>
  <header>…</header>
  <section>
    <h1>Part the first</h1>
    … first part of blog post …
  </section>
  <section>
    <h1>Part the second</h1>
    … second part of blog post …
  </section>
  … more sections …
  <footer>…</footer>
</article>
<article>태그는 포스트의 내용을 포함하고 있고, 또한 <header>와 <footer>도 포함하고 있다.
<section>태그는 각각의 subsection을 포함하고 있다. 만약 세부적으로 styling또는 scripting을 적용시키고자 
한다라면 <div>태그를 사용하는게 맞는 의미일 것이다.
 *  <section>태그는 일반적인 container태그는 아니다. styling 또는 scripting을 하기위함이라면 section대신 div를 
사용하기를 권장한다.
<div>태그를 사용하는 것은 다음과 같이 짧은 블로그 포스트를 작성했을때이다.
<article>
  <header>…</header>
  <div>
    … body of blog post …
  </div>
  <footer>…</footer>
</article>
포스트가 길어지고 나누어야할때는
<article>
  <header>…</header>
  <div>
    <section>
      <h1>Part the first</h1>
      … first part of blog post …
    </section>
    <section>
      <h1>Part the second</h1>
      … second part of blog post …
    </section>
    … more sections …
  </div>
  <footer>…</footer>
</article>
- comment
comment에 대한 태그 사용은 <article>을 사용하길 권장한다.
<article>태그로 감싸게 된다면, 내부의 <article>태그는 바깥쪽 <article> contents와 관련되어 있다.
<article>
  … header and such …
  … body of blog post …
  <article> <!-- comment 1 -->
    … body of comment …
    <footer> <!-- comment footer -->
    … who wrote the comment, etc. …
    </footer>
  </article>
  … more comments …
  … blog post footer …
</article>
그러나 comment추가 form은 어떻게 할 것인지에 대해서 생각해봐야한다. comment추가 form은 comments가 
존해하는 곳 다음에 나타난다.
comment와 form을 유지하는 container역확을 사용하는 태그를 사용하길 원한다. 내가 생각하는 가장 최적의 방법은 
<section>태그이다. 
<article>
  … header and such …
  … body of blog post …
  <section>
    <h1>Comments</h1>
    <article> <!-- comment 1 -->
      …
    </article>
    … more comments …
    <form> <!-- add comment form -->
      …
    </form>
  </section>
  … blog post footer …
</article>
- Archive pages
Archive pages는 multiple blog posts를 가지고 있다. 페이지의 각 부분을 표시하기 위한 명확한 방법은 <article>태그를 
사용하는 것이다.
<body>
  <header>…</header>
  <article>… blog post 1 …</article>
  <article>… blog post 2 …</article>
  … more blog posts …
  <aside>…</aside>
  <footer>…</footer>
</body>
이전에 하던 방식은 <div>태그를 사용하던 것이다.
<body>
  <header>…</header>
  <div>
    <article>… blog post 1 …</article>
    <article>… blog post 2 …</article>
    … more blog posts …
  </div>
  <aside>…</aside>
  <footer>…</footer>
</body>
원서 : http://edward.oconnor.cx/2009/09/using-the-html5-sectioning-elements
 

HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (1 - canvas API) html5 

 - 들어가기 전에

HTML5를 사용하는데 예전 브라우져들이 지원하지 않으면 어떻게 하나요? 라는 의문이 생길 것이다.
그러나 질문 자체가 잘못되었다. HTML5자체가 아닌 , 개별적인 특징의 모임이다. 브라우져들이 개별적인 특징들을 
지원하는 것을 발견할 수 있을것이다. (canvas, video, geolocation)
 - 기술들의 발견

브라우져가 객체들의 모임인 웹페이지를 렌더링할때는(DOM을 생성한다.) HTML태그로 표현한다.
모든 태그(<p>,<div>,<span>)는 다양한 객체들에 의해 DOM을 표현한다. (전역객체(window, document)들은 특수하게 
일반객체와는 다르다.)
모든 DOM객체들은 일반적인 속성들을 공유한다. 하지만 몇몇 객체들은 더 많은 속성을 가지고 있다.
HTML5특징을 지원하는 브라우져에서, 특정한 객체들은 특별한 속성을 가지고 있다.
DOM에서 이러한 속성들을 지원하는 특징들에 대해서 얘기를 해볼려고 한다.
발견한 4개의 기술들에 대해서 브라우져별 지원내용에 대해서 알아볼려고 한다.

 - Modernizr, HTML5 Library

Modernizr는 오픈소스이다. MIT-lincesed Javascript library이고 HTML5 & CSS3특징들을 지원한다.
Modernizr를 사용하기 위해서는 다음과 같은 <script>태그를 페이지 상단에 적용한다.
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Dive Into HTML5</title>
  <script src="modernizr.min.js"></script>
</head>
<body>
  ...
</body>
</html>
Modernizr는 자동으로 실행되며, modernizr_init()같은 함수를 사용하여 구동시킬 필요가 없다.

이 라이브러리를 실행할때 Modernizr에 의해 호출된 전역객체들이 생성된다. 전역객체는 각각의 특징에 Boolean 
속성들을 포함하고 있다.
예를 들어 사용하고 있는 브라우져가 canvas API(http://diveintohtml5.org/canvas.html)를 지원한다라면 
Modernizr.canvas속성을 true값을 가지게 될 것이다.

canvas API를 지원하지 않는 브라우져라면 Modernizr.canvas속성은 false값을 가질 것이다.
if (Modernizr.canvas) {
  // let's draw some shapes!
} else {
  // no native canvas support available :(
}

원서 : http://diveintohtml5.org/detect.html
 

HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (2 - canvas Text API) html5 

 - canvas text API

사용하고 있는 브라우져가 canvas API를 지원한다면 canvas text API는 지원하지 않을것이다. canvas API는 시간이 
지나면서 점점 늘어나고 있지만, text기능은 늦게 지원될 것이다. 몇몇 브라우져는 text API를 지원하기 전에 canvas를 
먼저 지원하고 있다.

사용하는 브라우져가 canvas API를 지원한다면 DOM객체는 getContext() method로 <canvas>태그를 확인할 수 있도록 
해준다.
사용하고 있는 브라우져가 canvas API를 지원하지 않는다면 DOM객체는 일반적인 method로 <canvas>태그를 만들 수 
있도록 해준다.

function supports_canvas_text() {
  if (!supports_canvas()) { return false; }
  var dummy_canvas = document.createElement('canvas');
  var context = dummy_canvas.getContext('2d');
  return (typeof context.fillText == 'function');
}

canvas를 사용하기 위해서는 canvas가 지원되는지에 대한 확이부터 시작한다. support_canvas()함수에 대해 이전 섹션에서 확인할 수 있다.
사용하는 브라우져가 canvas API를 지원하지 않다는다면 text API지원도 안될 것이다.

if (!supports_canvas()) { return false; }

다음은 <canvas>태그와 context에 그릴 객체를 만든다. support_canvas()에서 이미 getContext method가 모든 canvas객체에 존재하는지에 대해 확인했기 때문에 사용이 가능하다.

var dummy_canvas = document.createElement('canvas');
var context = dummy_canvas.getContext('2d');

마지막으로 drawing context가 fillText()함수를 사용할 수 있는지에 대한 확인을 해야한다. 가능하다면 canvas text API의 사용이 가능하다.

return (typeof context.fillText == 'function');

이 기능을 쓰기전에 Modernizr를 사용하여 canvas text API의 지원을 받을 수 있다.

if (Modernizr.canvastext) {
  // let's draw some text!
} else {
  // no native canvas text support available :(
}

원서 : http://diveintohtml5.org/detect.html

 

HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (3 - Video) html5 

HTML5는 브라우져에서 지원하는 <video>라는 새로운 태그를 선보였다. 내장된 Video는 QuickTime, Flash등 third-party plugin없이 사용이 가능하다.

또한 <video>태그는 스크립트의 사용없이도 사용할 수 있다. 다양한 Video Files을 사용할 수 있고, 브라우져들은 HTML5에서 <video>태그를 지원함으로써 자체에서 지원되어지는 video format들을 기본으로 선택할 수 있게 될 것이다.
다음에서 관련 내용들을 볼 수 있다. 

part 1: 포함하고 있는 포맷 (http://diveintomark.org/archives/2008/12/18/give-part-1-container-formats)
part 2: video codec의 불필요 (http://diveintomark.org/archives/2008/12/19/give-part-2-lossy-video-codecs)

HTML5 <video>태그를 지원하지 않는 브라우져들은 <video>를 앞으로도 지원하지 않을 것 같다. 그러나 third-party plugin 대신에 기본적으로 제공하는 이점에 대해서 알려야한다.

Kroc Camen은 Video for Everybody!(http://camendesign.com/code/video_for_everybody)로 볼려지는 해결방법을 제시했다.
HTML5 <video>태그를 사용할 수 있다면 사용하고, 아니라면 QuickTime, flash등 third-party plugin으로 이전 브라우져와의 호환성을 해결했다.
이러한 해결 방법에서 Javascript를 사용하지 않았다. 또한 어떤 브라우져에서도 잘 실행되었다.(모바일브라우져를 포함하고 있다.)

이 방법 말고도 더 많은 해결방법을 얘기해보고자 한다.
<video>태그를 사용한 페이지에서 play와 같은 기능들보다 더 많은 기능을 사용하고 싶다면, Javascript를 사용하여야 한다.
현재 브라우져가 HTML5 <video>태그를 지원한다라면, DOM 객체는 <video>태그를 만들고 canPlayType() 함수를 가지고 있을 것이다.
지원하지 않는다라면 <video>태그를 생성하여, 모든 태그에서 쓰이는 일반적인 속성으로 설정할 수 있다.

function supports_video() {
  return !!document.createElement('video').canPlayType;
}

기능을 직접 작성하는 대신에 Modernizr로 <video> 태그를 지원받을 수 있다.

if (Modernizr.video) {
  // let's play some video!
} else {
  // no native video support available :(
  // maybe check for QuickTime® or Flash® instead
}

다음으로는 현재 브라우져에서 실행되어 질 수 있는 video format을 찾는 테스트를 해볼려고 한다.

원서 : http://diveintohtml5.org/detect.html

 

HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (4 - Video Formats) html5 
Video format은 언어로 쓰는 것과 같다. 영어신문과 스페인 신문은 같은 정보를 전달하지만, 당신이 영어만 읽을 수 있다면 여러 언어의 신문중 영어신문만 읽을 수 있을 것이다. video를 play하기 위하여 브라우져들은 언어(video로 쓰여진)를 이해하는 것이 필수적이다.

위에서 언어라고 말한것은 video에서는 codec으로 불리어 진다. vidoe의 stream을 해석하기 위한 알고리즘을 사용한다.
불행하게도 HTML5 Video Tag에서는 코덱을 사용할 수 없다. 브라우져들은 두개정도의 동영상을 볼 수 있게 제공한다. (라이센스 비용 때문이다.)

HTML5의 Video태그는 safari와 iphone에서는 잘동작한다.(Adobe Flash도 지원한다. 이것에 대한 해결 방법은 Video for Everybody! - http://camendesign.com/code/video_for_everybody 여기서 확인하면 된다.)

또 Chromium(http://code.google.com/intl/ko/chromium/)과 Mozilla Firefox(http://www.mozilla.or.kr/ko/)와 같은 오픈 소스 브라우져도 동작한다.
브라우져가 HTML5 Video를 지원한다면 DOM 객체는 <video>태그의 canPlayTYpe() method를 사용할 수 있다.
이 method는 브라우져에서 지원하는 video format에 대해서 확인해준다.
또, 이 기능은 Macs과 iPhones에서 지원하는 포맷을 확인 시켜준다.

function supports_h264_baseline_video() {
  if (!supports_video()) { return false; }
  var v = document.createElement("video");
  return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
}
supports_video()함수의 사용은 이전 내용에서 다루고 있다. 브라우져가 HTML5 video를 지원하지 않는다면 어떠한 video format도 볼 수 없다.

if (!supports_video()) { return false; }

그리고 이 함수는 비어있는 video태그를 생성해주고(이 기능은 페이지에서 확인할 수도, 볼 수 도 없다.), canPlayType() method를 호출한다.
이 method는 supports_video()함수로 존재여부를 체크해주기 때문에 video태그의 존재여부를 보장해준다.
var v = document.createElement("video");
"video format"은 여러종류의 일을 수행하는 조합이다. 기술적으로 보면 video태그가 H.264 Baseline video와 MPEG-4의 AAC LC audio를 실행할 수 있는지 아닌지를 확인할 수 있다.
(다음의 글을 읽으면 이런 비디오 종류에 대한 것을 이해할 수 있다. - http://diveintomark.org/tag/give)
return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
canPlayType()함수는 Boolean값을 return하지 않는다. 복잡한 video format과 관련된 string값을 return 시켜 준다.
"probably" 브라우져가 현재 format을 실행시킬 수 있다는 확신이 있다면
"maybe" 브라우져가 현재 format을 실행시킬 수 있다는 판단이 되면
""(비어있는 값)브라우져가 현재 format을 실행시킬 수 없을때
여기서 설명하는 함수는 Mozilla Firefox 또는 다른 open source 브라우져들이 video format을 지원하는지를 확인한다.
위의 내용과 다른 이 함수의 차이점은 canPlayType()함수가 string값을 던져주는 것이다. 기술적으로 얘기하면 브라우져가 Theora video와 Vorbis audio(ogg)를 실행할 수 있는지 아닌지를 요청한다.
function supports_ogg_theora_video() {
  if (!supports_video()) { return false; }
  var v = document.createElement("video");
  return v.canPlayType('video/ogg; codecs="theora, vorbis"');
}
Modernizr에서는 각각의 video format을 확인해줄 수 없다. 그렇기 때문에 video태그를 사용할때 여기에 적혀진 함수를 
사용해야 할 것이다.
원서 : http://diveintohtml5.org/detect.html


HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (5 - Local Storage(like cookie), Web Worker(Thread)) html5 

HTML5 storage(http://dev.w3.org/html5/webstorage/)는 컴퓨터에서 저장된 정보나 복구하여 웹사이트에사 사용하는 방법을 제공한다.
이 개념과 비슷한 원리는 cookies이지만 거대한 양의 정보를 저장하기 위해서 디자인되었다.
Cookies는 저장되는 사이즈가 저장되어 있고, 데이터를 전송할때마다 매시간 서버에 새로운 페이지를 요청한다. (이것은 추가적인 시간이나 brandwidth를 소비한다.)
HTML5 storage는 서버에 요청하지 않게 하면서, 웹사이트는 페이지 로드 후에 자바스크립트등을 접근가능하게 해준다.

Local Storage와 관련되어 HTML5 스펙에 포함이 되어 있는지 그렇다면 왜 따로 분리하여 명세서가 존재하는지에 대해서 궁금할 것이다.
그것에 대한 답변은 물론 Local Storage는 주요한 HTML5 명세서에 포함되어 있지만, 분리되어 명세서가 존재하는 이유는 "HTML5의 대한 내용이 방대하기 때문이다"라고 HTML5 Working Group에서 몇몇은 설명하고 있다.

브라우져가 HTML5 storage를 지원한다면, 전역 window 객체인 localStorage 속성을 사용 할 수 있다. HTML5 storage를 지원하지 않는다면, localStorage 속성은 정의되어 있지 않을 것이다.

function supports_local_storage() {
  return (typeof window.localStorage != 'undefined');
}

Modernizr(http://www.modernizr.com/)는 아직 지원하지 않고 있다. 필요하다면 함수를 따로 만들어야 한다.

그렇다면 또 궁금한 점이 생길것이다. HTML5 storage database의 보안은 어떤지?
누구나 볼 수 있는 것인지?
사용자의 HTML5 storage database는 사용자의 컴퓨터를 사용할 수 있는 사람이라면 누구든지 물리적으로 접속 가능하다.
사용자의 브라우져에서 웹사이트의 값을 읽고 수정할 수 있지만, 해당 사이트들은 다른 사이트에 의해서 저장되어진 값들을 확인할 수 없게 할 수 있다.
이러한 방법을 same-origin restriction
(http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#origin-0)이라고 부른다.

- Web Workers

Web Workers는 브라우져에서 Javascript를 실행할때 background에서 실행되는 것을 표준적인 방법으로 제공한다.
Web Workers를 더많이 혹은 적게 같은 시간에 모든것을 실행하는 방법인 multiple "threads"를 생성한다.
(예를들면, 같은 시간에 당신의 컴퓨터에서 다양한 application을 실행할 수 있다라는 것이다.)
이것은 "background threads"고 복잡한 수학적 계산을 가능하게 하면서, network requests를 만들고, local storage를 접속가능하게 주면서, 웹페이지의 scrolling, clicking, typing에 응답하게 해준다.

브라우져가 Web Worker API를 지원한다면 전역 window객체의 worker 속성을 사용할 수 있다. Web Worker API를 지원하지 않는다라면 worker속성 또한 정의되어 있지 않을 것이다.

function supports_web_workers() {
  return typeof window.Worker != 'undefined';
}

이 기능 또한 Modernizr에서 아직 지원하지 않고 있고, 필요하다면 함수를 따로 만들어야한다.

원서 : http://diveintohtml5.org/detect.html
 
HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (6 - Offline Web Applications) html5 

오프라인된 웹페이지를 읽는것은 쉬운 일이다: 인터넷을 연결하거나, 웹페이지를 로딩하고, 인터넷으로부터 연결을 끊거나, 왼딴곳에서 운영을하거나, 취미등으로서 웹페이지를 읽는등(시간을 절약할 수 있고, 아마 모아진 정보에 대해서 내가 원하는 정보를 바로 보기를 원할것이다.)

그러나 Gmail이나 Google Docs와 같은 웹 어플리케이션이 그러한가? HTML5에서는 고맙게도 누구나 offline에서도 웹어플리케이션을 만들 수 있다.
Offline web applications(http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html#offline)는 online 웹어플리케이션에서 벗어나기 시작했다.
첫째로, 당신은 offline에서 활성화된 웹페이지를 방문할 수 있고, offline에서 동작하기위해 필수적인 파일들을 웹서버에서 브라우져에 알려준다.

이러한 파일들은 어떤것이든 될 수 있다.(HTML, Javascript, Images, video등) 당신의 브라우져는 필요한 모든 파일들을 다운로드할 것이고, 당신이 인터넷에 연결되어 있지 않을 때도 웹사이트들을 재방문할 수 있다.
당신의 브라우져는 당신이 오프라인 되었을때 필요한 파일들을 다운로드하여 사용할 수 있다고 알려줄 것이다.
다시 온라인 되었을때, 당신은 원격에 있는 웹서버에 변경된 어떤것들도 업로드 할 수 있다. 브라우져가 offline web applications을 지원한다라면 전역 window객체의 속성인 applicationCach 속성을 사용할 수 있다. 하지만 지원하지 않는다면 applicationCache속성은 정의되어 있지 않을 것이다.
function supports_offline() {
  return (typeof window.applicationCache != 'undefined');
}
Modernizr(http://www.modernizr.com/)에서는 아직 지원하지 않고 있다.

원서 : http://diveintohtml5.org/detect.html
 
HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (7 - Geolocation) html5 

Geolocaiton은 당신이 공유하고 있는 정보 또는 사람들에 대해서 믿을 수 있는지에 대해서 알 수 있다.
당신은 많은 방법으로 알 수 있다.(IP address, 연결된 무선 네트워크, 핸드폰 정보 또 GPS 하드웨어를 통해 위성으로 부터 위도, 경고 같은 정보들을 받을 수 있다.)
궁금한 점이 생길 것이다.
Q.geolocation이 HTML5의 일부분인가? 왜 이 기능에 대해서 설명하는 것인지?
Geolocation은 현재 브라우져에서 지원하고 있고, 그들은 HTML5 특징에 지원여부를 추가하고 있다.
엄밀히 말하면, geolocation은 Geolocation Working Group (http://www.w3.org/2008/geolocation/)에 의해 표준화 되고 있고, 이것은 HTML Working Group과 분리되어 있다. 그러나 관련글 내에서는 geolocation에 대하여 얘기를 
할려고 한다.

웹의 진화에 있어서의 일부분이고 이런일이 현재 일어나고 있기 때문이다.
geolocation API(http://www.w3.org/TR/geolocation-API/)를 통해 믿을수 있는 웹사이트들과 함께 당신의 위치정보를 공유할 수 있다.
윈도, 경도는 javascript를 통해 가능하고, 이것은 지도를 통한 당신의 위치를 보여주고, 지역 회사등을 찾는 일과 같은 위치인식등을 원격의 웹서버를 통해 전달받을 수 있다.
궁금한 점이 생길 것이다.

Q.Geolocation이라는 기능이 왠지 섬뜻하다. 끌수도 있는 것인가?
개인정보에 대해서는 당신이 원격의 웹서버에 당신의 물리적 위치에 대한 공유를 얘기했을때 관계가 있다.
geolocation API explicitly states(http://www.w3.org/TR/geolocation-API/#security)에서 사용자의 허락과 관련된 표현없이 웹사이트들에서 위치 정보를 보내지 않는다. 다른말로 하면 당신의 위치정보를 공유하는것은 항상 옵션이다. 당신이 원하지 않는다면 하지 않을 것이다.

원서 : http://diveintohtml5.org/detect.html

HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (8 - input types) html5 

기존 방식의 web form을 작성하는 방식은 
<form>
    <input type="text" />
    <input type="password" />
    <input type="submit" />
</form>
으로 작성했었다.

하지만 HTML5에서는 form에서 사용할 수 있는 input typed의 형태가 12개 이상이 정의됐다.
<input type="search"> for search boxes
<input type="number"> for spinboxes
<input type="range"> for sliders
<input type="color"> for color pickers
<input type="tel"> for telephone numbers
<input type="url"> for web addresses
<input type="email"> for email addresses
<input type="date"> for calendar date pickers
<input type="month"> for months
<input type="week"> for weeks
<input type="time"> for timestamps
<input type="datetime"> for precise, absolute date+time stamps
<input type="datetime-local"> for local dates and times

이 내용들을 적용시키는 방법 :
첫째, <input>태그를 생성한다. <input>태그의 기본 type은 "text"이다. 
var i = document.createElement("input");

둘째, input type을 원하는 값으로 설정한다.
i.setAttribute("type", "color");

브라우져가 특별한 type을 지원한다면, 위와 같은 type="color"값으로 설정되지만, 아니라면 type값을 무시하거나 text속성으로 바꿔주어야 한다.
return i.type !== "text";

원서 : http://diveintohtml5.org/detect.html
HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (9 - Placeholder Text) html5 
HTML5는 존재하는 폼들중 몇가지 발전된 부분들을 포함하고있다. 그 중의 한가지 발전은 input에 기본적으로 입력되는 text(placeholder)이다.

placeholder text는 input내에 text를 보여주거나 focus가 활성화 되면 필드를 공백으로 만들어 주고, focus가 되지 않았을때는 기본적으로 입력된 내용이 보여지게 한다.

web forms 챕터(http://diveintohtml5.org/forms.html#placeholder)에서 screenshot으로 확인 가능하다. 브라우져에서 placeholder text를 지원한다면 DOM object로  placeholder속성을 가지고 있는 <input>태그를 생성한다.
브라우져에서 지원하지 않는다면 DOM object로 placeholder속성을 가지고 있지 않은 <input>태그를 생성한다.

function supports_input_placeholder() {
  var i = document.createElement('input');
  return 'placeholder' in i;
}

원서 : http://diveintohtml5.org/detect.html 
 
HTML5의 소개 및 지원되는 않는 브라우져에서의 사용법 (10 - Form Autofocus) html5 

대부분의 웹사이트들은 web form의 첫번째 input에 자동적으로 포커싱 시키는 자바스크립트를 사용한다.
예를 들어, google.com의 홈페이지는 사용자가 찾고 싶은 키워드를 입력할 수 있는 input box에 자동 포커싱 시킨다.
대부분의 사용자들은 편리해 하는 반면, 파워유저나 특정사용자들은 불편할 수 있다.
사용자가 페이지의 스크롤을 예상하고 스페이스바를 눌렀을때 페이지는 스크롤링이 되지 않을것이다. (input에 포커싱이 가 있기 때문이다.)
또, 페이지가 로딩되는 동안 사용자는 다른 input에 포커싱을 하지만, 사이트의 autofocus 스크립트는 스크립트에서 진행하는 대로 사용자가 선택하지 않은 기본 input에 포커싱이 되어 있을것이다.

이것은 사용자의 흐름을 혼란하게 한다.(사용자가 생각지도 못한 곳에 포커싱이 되기때문에)
autofocusing은 자바스크립트에 의해서 실행 되고, 이러한 방식은 로딩시 마지막에 다뤄지기 때문에 대부분 사용자들은 웹페이지의 focus가 이동되는것을 원하지 않는다.
이러한 문제를 해결하기 위해서 HTML5는 모든 web form control에서 autofocus를 사용할 수 있게했다. 
autofocus 속성은 특정 input태그에 focus를 이동시키지만, script가 아닌 마크업이기때문에 모든 웹사이트에서 동일한 동작을 한다.
또한, 브라우져 벤더들은  autofocusing 동작을 사용하지 않도록 제공할 수 있다.
브라우져에서 autofocusing web form controls을 지원한다면 DOM object는 autofocus 속성을 가진 input태그를 생성할 수 있다.
브라우져에서 지원하지 않는다면 DOM object는 autofocus속성을 가지고 있지 않은 input태그를 생성한다.

function supports_input_autofocus() {
  var i = document.createElement('input');
  return 'autofocus' in i;
}

원서 : http://diveintohtml5.org/detect.html 
 

