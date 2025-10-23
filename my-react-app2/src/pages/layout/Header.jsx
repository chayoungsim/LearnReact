import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header>      
        <div className="header-top">
            <h1 className="logo"><Link to="/"><span className="blind">SK이노베이션 E&amp;S</span></Link></h1>
            <div className="gnb-wrap">
                <nav aria-label="주요 메뉴">                    
                    <ul className="gnb" role="menubar">
                        <li role="none">
                            <button type="button">기업정보</button>
                            <ul>
                                <li><Link to="/company/summary">회사소개</Link></li>
                                <li><Link to="/company/brand">브랜드</Link></li>
                            </ul>
                        </li>
                        <li role="none">
                            <button type="button">지속가능경영</button>
                            <ul>
                                <li><Link to="/sustainability/esg">ESG</Link></li>
                            </ul>
                        </li>
                        <li role="none">
                            <button type="button">사업소개</button>
                            <ul>
                                <li><Link to="/energy/lowCarbonLng">저탄소 LNG</Link></li>
                                <li><Link to="/energy/renewable">재생에너지</Link></li>
                            </ul>
                        </li>
                        <li role="none">
                            <button type="button">인재채용</button>
                            <ul>
                                <li><Link to="/recruit/welfare">복리후생</Link></li>
                                <li><Link to="/recruit/cultivation">인재육성</Link></li>
                            </ul>
                        </li>                       
                    </ul>           
                </nav>
            </div>
            <div className="util">
                <a href="https://skinnonews.com" target="_blank" className="news">Newsroom</a>            
                <div className="sns-area"> 
                    <button type="button" className="ico-sns"><span className="blind">SNS</span></button>
                    <ul className="sns">
                        <li><a href="https://www.youtube.com/@officialskinnovation" target="_blank"><i className="ico-youtube"></i><span>Youtube</span></a></li>
                        <li><a href="https://www.instagram.com/official.skinnovation" target="_blank"><i className="ico-instagram"></i><span>인스타그램</span></a></li>
                        <li><a href="https://www.linkedin.com/company/sk-innovation" target="_blank"><i className="ico-linkedin"></i><span>링크드인</span></a></li>
                        <li><a href="https://www.facebook.com/official.skinnovation" target="_blank"><i className="ico-facebook"></i><span>페이스북</span></a></li>                    
                    </ul> 
                </div>  
                <ul className="language">
                    <li><a href="../../kor/main/index.html" className="current" title="현재 페이지">KR</a></li>
                    <li><a href="../../eng/main/index.html" target="_blank" title="영문 홈페이지 (새 창에서 열림)">EN</a></li>
                </ul>
                <button type="button" className="btn-navbar">
                    <span className="blind">전체메뉴 열기</span>
                    <span className="line"><em></em></span>
                </button>

                <div id="navbar">
                    
                    <div className="navbar-sitemap">
                        <div className="sitemap-wrap">   
                            <div className="sitemap-logo">
                                <a href="/"><span className="blind">SK이노베이션 E&amp;S</span></a>
                            </div>                     
                            <nav className="sitemap-nav">
                                <ul>
                                    <li>
                                        <a href="#">기업정보</a>
                                        <ul>
                                            <li><a href="#">회사소개</a></li>
                                            <li>
                                                <a href="#">브랜드</a>
                                                <ul>
                                                    <li><a href="#">로고</a></li>
                                                    <li><a href="#">규정</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">연혁</a></li>
                                            <li><a href="#">전자공고</a></li>
                                            <li>
                                                <a href="#">네트워크</a>
                                                <ul>
                                                    <li><a href="#">해외</a></li>
                                                    <li><a href="#">국내</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">지속가능경영</a>
                                        <ul>
                                            <li>
                                                <a href="#">ESG경영</a>
                                                <ul>
                                                    <li><a href="#">넷제로(Net Zero)추진</a></li>
                                                    <li><a href="#">ESG 개선 활동</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">SHE</a>
                                                <ul>
                                                    <li><a href="#">안전관리 (S)</a></li>
                                                    <li><a href="#">보건관리 (H)</a></li>
                                                    <li><a href="#">환경관리 (E)</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">윤리경영</a></li>
                                            <li><a href="#">상생경영</a></li>
                                            <li>
                                                <a href="#">사회적가치</a>
                                                <ul>
                                                    <li><a href="#">지역재생 프로젝트</a></li>
                                                    <li><a href="#">Social Awareness 프로그램</a></li>
                                                    <li><a href="#">지역사회 공헌활동</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">지속가능경영보고서</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">사업소개</a>
                                        <ul>
                                            <li><a href="#">LNG Value Chain</a></li>
                                            <li><a href="#">재생에너지</a></li>
                                            <li>
                                                <a href="#">수소에너지</a>
                                                <ul>
                                                    <li><a href="#">1단계 사업</a></li>
                                                    <li><a href="#">2단계 사업</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">에너지설루션</a>
                                                <ul>
                                                    <li><a href="#">국내사업</a></li>
                                                    <li><a href="#">해외사업</a></li>
                                                </ul>
                                            </li>
                                            
                                            <li><a href="#">발전</a></li>
                                            <li><a href="#">도시가스</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">인재채용</a>
                                        <ul>
                                            <li><a href="">복리후생</a></li>
                                            <li><a href="">인재육성</a></li>
                                            <li><a href="">직무소개</a></li>
                                            <li><a href="">채용정보</a></li>
                                        </ul>
                                        <div className="sitemap-util">
                                            <ul>
                                                <li>
                                                    <a href="#" className="link-open"><span>Newsroom</span><i className="ico-link-open"></i></a>
                                                    <ul className="sns-list">
                                                        <li><a href="#"><i className="ico-youtube"></i><span>YouTube</span></a></li>    
                                                        <li><a href="#"><i className="ico-instagram"></i><span>Instagram</span></a></li>
                                                        <li><a href="#"><i className="ico-linkedin"></i><span>Linkedin</span></a></li>
                                                        <li><a href="#"><i className="ico-facebook"></i><span>Facebook</span></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#" className="link-open-skinno">
                                                        <div className="logo-skinno">
                                                            <span className="svg-inno"><em className="blind">SK이노베이션</em></span>
                                                            <span className="tx">홈페이지 바로가기</span>
                                                        </div>
                                                        <i className="ico-link-open"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className="family-site">
                                                        <button type="button"><span>패밀리 사이트</span><i className="ico-arrDown"></i></button>
                                                        <ul className="family-site-list">
                                                            <li><a href="/koone/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">코원에너지서비스</a></li>
                                                            <li><a href="/busan/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">부산도시가스</a></li>
                                                            <li><a href="/cheongju/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">충청에너지서비스</a></li>
                                                            <li><a href="/gumi/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">영남에너지서비스(구미)</a></li>
                                                            <li><a href="/pohang/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">영남에너지서비스(포항)</a></li>
                                                            <li><a href="/jeonnam/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">전남도시가스</a></li>
                                                            <li><a href="/jeonbuk/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">전북에너지서비스</a></li>
                                                            <li><a href="/gangwon/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">강원도시가스</a></li>
                                                            <li><a href="/jeongkwan/main/index2.do" target="_blank" title="홈페이지 바로가기(새창)">부산정관에너지</a></li>
                                                            <li><a href="/incheonge/main/index2.do" target="_blank" title="홈페이지 바로가기(새창)">아이지이</a></li>
                                                            <li><a href="/narae/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">나래에너지서비스</a></li>
                                                            <li><a href="/naraeonm/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">나래에너지서비스(O&amp;M)</a></li>
                                                            <li><a href="/paju/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">파주에너지서비스</a></li>
                                                            <li><a href="/yeoju/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">여주에너지서비스</a></li>
                                                            <li><a href="http://www.lng-tml.com/" target="_blank" title="홈페이지 바로가기(새창)" className="family-site-list-last">보령LNG터미널주식회사</a></li>
                                                        </ul>
                                                    </div>                                                
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>                        
                        </div>
                    </div>    

                    
                    <div className="navbar-mobile">
                        <div className="mobile-wrap">
                            <div className="mobile-logo">
                                <a href="/"><span className="blind">SK이노베이션 E&amp;S</span></a>
                            </div>
                            <nav className="mobile-nav">  
                                <div className="mobile-nav-fixed">
                                    <div className="inner">
                                        <div className="mobile-nav-list">
                                            <ul>
                                                <li className="current"><button type="button">기업정보</button></li>
                                                <li><button type="button">지속가능경영</button></li>
                                                <li><button type="button">사업소개</button></li>
                                                <li><button type="button">인재채용</button></li>
                                            </ul>
                                        </div>
                                        <div className="mobile-nav-util">
                                            <div className="mobile-nav-util-item">                                            
                                                <ul className="sns-list">
                                                    <li><a href="#" className="link-open"><span>Newsroom</span><i className="ico-link-open"></i></a></li>
                                                    <li><a href="#"><i className="ico-youtube"></i><span className="blind">YouTube</span></a></li>    
                                                    <li><a href="#"><i className="ico-instagram"></i><span className="blind">Instagram</span></a></li>
                                                    <li><a href="#"><i className="ico-linkedin"></i><span className="blind">Linkedin</span></a></li>
                                                    <li><a href="#"><i className="ico-facebook"></i><span className="blind">Facebook</span></a></li>
                                                </ul>
                                            </div>
                                            <div className="mobile-nav-util-item">
                                                <a href="#" className="link-open-skinno">
                                                    <div className="logo-skinno">
                                                        <span className="svg-inno"><em className="blind">SK이노베이션</em></span>
                                                        <span className="tx">홈페이지 바로가기</span>
                                                    </div>
                                                    <i className="ico-link-open"></i>
                                                </a>
                                            </div>
                                            <div className="mobile-nav-util-item">
                                                <button type="button" className="link-open-family"><span>패밀리 사이트</span><i className="ico-arrDown"></i></button>
                                                <div className="pop-family-site">
                                                    <ul>
                                                        <li><a href="/koone/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">코원에너지서비스</a></li>
                                                        <li><a href="/busan/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">부산도시가스</a></li>
                                                        <li><a href="/cheongju/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">충청에너지서비스</a></li>
                                                        <li><a href="/gumi/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">영남에너지서비스(구미)</a></li>
                                                        <li><a href="/pohang/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">영남에너지서비스(포항)</a></li>
                                                        <li><a href="/jeonnam/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">전남도시가스</a></li>
                                                        <li><a href="/jeonbuk/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">전북에너지서비스</a></li>
                                                        <li><a href="/gangwon/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">강원도시가스</a></li>
                                                        <li><a href="/jeongkwan/main/index2.do" target="_blank" title="홈페이지 바로가기(새창)">부산정관에너지</a></li>
                                                        <li><a href="/incheonge/main/index2.do" target="_blank" title="홈페이지 바로가기(새창)">아이지이</a></li>
                                                        <li><a href="/narae/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">나래에너지서비스</a></li>
                                                        <li><a href="/naraeonm/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">나래에너지서비스(O&amp;M)</a></li>
                                                        <li><a href="/paju/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">파주에너지서비스</a></li>
                                                        <li><a href="/yeoju/main/index.do" target="_blank" title="홈페이지 바로가기(새창)">여주에너지서비스</a></li>
                                                        <li><a href="http://www.lng-tml.com/" target="_blank" title="홈페이지 바로가기(새창)" className="family-site-list-last">보령LNG터미널주식회사</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mobile-nav-util-item">
                                                <button type="button" className="link-open-language"><span>Language</span><i className="ico-arrDown"></i></button>
                                                <div className="pop-language">
                                                    <ul>
                                                        <li><a href="javascript:changeLocale('ko')" className="current" title="현재 페이지">KOR</a></li>
                                                        <li><a href="javascript:changeLocale('en')" title="영문 홈페이지 (새 창 열림)">ENG</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                
                                </div> 
                                <div className="mobile-nav-scroll">
                                    <div className="lnb-depth2 active">
                                        <ul>
                                            <li><a href="#">회사소개</a></li>
                                            <li>
                                                <a href="#">브랜드</a>
                                                <ul>
                                                    <li><a href="#">로고</a></li>
                                                    <li><a href="#">규정</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">연혁</a></li>
                                            <li><a href="#">전자공고</a></li>
                                            <li>
                                                <a href="#">네트워크</a>
                                                <ul>
                                                    <li><a href="#">해외</a></li>
                                                    <li><a href="#">국내</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="lnb-depth2">
                                        <ul>
                                            <li>
                                                <a href="#">ESG경영</a>
                                                <ul>
                                                    <li><a href="#">넷제로(Net Zero)추진</a></li>
                                                    <li><a href="#">ESG 개선 활동</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">SHE</a>
                                                <ul>
                                                    <li><a href="#">안전관리 (S)</a></li>
                                                    <li><a href="#">보건관리 (H)</a></li>
                                                    <li><a href="#">환경관리 (E)</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">윤리경영</a></li>
                                            <li><a href="#">상생경영</a></li>
                                            <li>
                                                <a href="#">사회적가치</a>
                                                <ul>
                                                    <li><a href="#">지역재생 프로젝트</a></li>
                                                    <li><a href="#">Social Awareness 프로그램</a></li>
                                                    <li><a href="#">지역사회 공헌활동</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">지속가능경영보고서</a></li>
                                        </ul>
                                    </div>
                                    <div className="lnb-depth2">
                                        <ul>
                                            <li><a href="#">LNG Value Chain</a></li>
                                            <li><a href="#">재생에너지</a></li>
                                            <li>
                                                <a href="#">수소에너지</a>
                                                <ul>
                                                    <li><a href="#">1단계 사업</a></li>
                                                    <li><a href="#">2단계 사업</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">에너지설루션</a>
                                                <ul>
                                                    <li><a href="#">국내사업</a></li>
                                                    <li><a href="#">해외사업</a></li>
                                                </ul>
                                            </li>
                                            
                                            <li><a href="#">발전</a></li>
                                            <li><a href="#">도시가스</a></li>
                                        </ul>
                                    </div>
                                    <div className="lnb-depth2">
                                        <ul>
                                            <li><a href="">복리후생</a></li>
                                            <li><a href="">인재육성</a></li>
                                            <li><a href="">직무소개</a></li>
                                            <li><a href="">채용정보</a></li>
                                        </ul>
                                    </div>
                                </div>                            
                            </nav>
                        </div>
                    </div>
                </div>

            </div>

        </div> 
    </header>
  );
}