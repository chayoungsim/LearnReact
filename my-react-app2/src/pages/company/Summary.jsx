
import PageTitle from "../../components/PageTitle";
import SubLnb from "../../components/SubLnb";
import SubVisual from "../../components/SubVisual";

export default function Summary() {
  return (
    <div className="summary">
      <PageTitle />
      <SubLnb /> 
      <SubVisual />
      <div className="breadcrumb n-motion n-bottom">
          <ul>
            <li className="ico-home"><span className="blind">홈</span></li>
            <li>기업정보</li>
            <li>회사소개</li> 
          </ul>
      </div>
      <div className="sub-contents section">
        <div className="static">              
          <h3 className="blind">회사소개</h3>  
          <div className="sub-ment-box n-motion n-bottom">
              <p>SK이노베이션 E&S는 글로벌 에너지 시장의 변화와 고객의 요구에 맞는<br className="pc-only" />
                최적의 에너지를 공급하고자 지속적으로 혁신을 추구하고 있습니다.</p>
          </div>              
          <h4 className="shty1 n-motion n-bottom">사업현황</h4>
          <p className="p-desc n-motion n-bottom">
              <span className="hc1">LNG Value Chain을 글로벌로 확장</span>하고, 이를 다양한 저탄소 발전원(재생에너지, 수소 등)을 기반으로 한 <span className="hc1">글로벌 Power Value Chain 통합모델</span>과 결합하여, 미래에너지 문제의 지속 가능한 대안을 제시하는 Sustainable Energy Solution Optimizer로 성장해 나가겠습니다.
          </p>

          <div className="summary-sect1">
              <div className="summary-item1-wrap n-motion n-bottom">
                <a href="#" className="summary-item1" title="LNG Value Chain 상세보기">                        
                  <figure>
                    <div className="thumb">
                      <img src="../../resource/images/sub/summary-p4.png" alt="LNG수송선" />
                    </div>
                    <figcaption>SK이노베이션 E&S LNG수송선</figcaption>
                  </figure> 
                  <div className="desc">
                    <div className="tit">
                      <h5>LNG Value Chain</h5>
                      <i className="ico-plus" aria-hidden="true"></i>
                    </div>                       
                    <p className="tx-base">
                      CCUS 기술을 기반으로 low-carbon LNG 사업으로의 전환을 추진하고 이를 통해 LNG 사업의 지속가능성을 확보할 예정입니다.                          
                    </p>
                  </div>                        
                </a>
              </div>
              <a href="#" className="summary-item n-motion n-bottom" title="도시가스 사업 상세보기">
                  <div className="tit">
                      <h5>도시가스 사업</h5>
                      <i className="ico-plus" aria-hidden="true"></i>
                  </div>
                  <figure>
                    <div className="thumb">
                      <img src="../../resource/images/sub/summary-p6.png" alt="도시가스 설비" />
                    </div>
                    <figcaption>SK이노베이션 E&S 도시가스 설비</figcaption>
                  </figure>                        
                  <div className="desc">
                    <p>SK이노베이션 E&S는 1999년 도시가스 지주회사로 출범한 이래, 현재 전국 8개 지역에 안전하고 깨끗한 도시가스를 공급하고 있으며 국내 도시가스 사업자 가운데 시장점유율 1위를 기록하고 있습니다.</p>                            
                  </div>
              </a>                    
          </div>
          <div className="summary-items-wrap n-motion n-bottom">
            <div className="bg"></div>
            <ul className="summary-items">
              <li className="n-motion n-bottom">
                <a href="#" className="summary-item" title="재생에너지 상세보기">
                    <div className="tit">
                        <h5>재생에너지</h5>
                        <i className="ico-plus" aria-hidden="true"></i>
                    </div>
                    <figure>
                      <div className="thumb"><img src="../../resource/images/sub/summary-p1.png" alt="태양광 패널" /></div>
                      <figcaption>SK이노베이션 E&S 전남 태양광</figcaption>
                    </figure>           
                    <div className="desc">
                        매년 1GW 규모의 국내·외 재생에너지 사업 파이프라인을 확보하여 10GW 
                        파이프라인을 보유한 Global 재생에너지 Player로 자리매김 하겠습니다.
                    </div>
                </a>
              </li>
              <li className="n-motion n-bottom">
                <a href="#" className="summary-item" title="수소에너지 상세보기">
                    <div className="tit">
                        <h5>수소에너지</h5>
                        <i className="ico-plus" aria-hidden="true"></i>
                    </div>
                    <figure>
                      <div className="thumb"><img src="../../resource/images/sub/summary-p2.png" alt="블루수소플랜트 조감도" /></div>
                      <figcaption>보령 블루수소플랜트 조감도</figcaption>
                    </figure>                        
                    <div className="desc">
                      <p>기존 LNG 사업 인프라와 Value Chain 통합 역량을 활용해 글로벌 1위 수소 사업자로 도약하겠습니다.</p>                            
                    </div>
                </a>
              </li>
              <li className="n-motion n-bottom">
                <a href="#" className="summary-item" title="에너지설루션 상세보기">
                    <div className="tit">
                        <h5>에너지설루션</h5>
                        <i className="ico-plus" aria-hidden="true"></i>
                    </div>
                    <figure>
                      <div className="thumb">
                        <img src="../../resource/images/sub/summary-p3.png" alt="에너지저장장치" />
                      </div>
                      <figcaption>미국 KCE 에너지저장장치</figcaption>
                    </figure>                        
                    <div className="desc">
                        <p>SK이노베이션 E&S의 풍부한 전력거래 경험과 SK그룹의 배터리, IT 역량 등을 활용해 에너지설루션 분야의 Global Top-tier로 성장하겠습니다.</p>
                    </div>
                </a>
              </li>
              <li className="n-motion n-bottom">
                <a href="#" className="summary-item" title="발전 상세보기">
                    <div className="tit">
                        <h5>발전</h5>
                        <i className="ico-plus" aria-hidden="true"></i>
                    </div>
                    <figure>
                      <div className="thumb">
                        <img src="../../resource/images/sub/summary-p5.png" alt="광양천연가스발전소" />
                      </div>
                      <figcaption>SK이노베이션 E&S 광양천연가스발전소</figcaption>
                    </figure>                        
                    <div className="desc">
                      <p>해외 가스전에서 생산된 천연가스를 직도입하여 경제성 있는 가격의 전기를 안정적으로 생산하고 있습니다.</p>                            
                    </div>
                </a>
              </li>                  
            </ul>
          </div> 
          <div className="summary-sect2 n-motion n-bottom">
              <div className="summary-grp-wrap">
                <div className="summary-grp">
                  <div className="s-tit3">다양한 저탄소 전원 Mix</div>
                  <div className="grp-items-wrap1">
                    <ul className="grp-items">
                      <li>
                        <div className="grp-item1"><span className="tx">LNG</span></div>
                      </li>
                      <li>
                        <div className="grp-item2"><span className="tx">재생에너지</span></div>
                      </li>
                      <li>
                        <div className="grp-item3"><span className="tx">수소</span></div>
                      </li>
                      <li>
                        <div className="grp-item4"><span className="tx">+α</span></div>
                      </li>
                    </ul>
                  </div>
                  <div className="title">
                      <h4>글로벌 Power Value Chain 통합모델</h4>
                  </div>                        
                  <div className="grp-items-wrap2">
                      <ul className="grp-items">
                      <li>
                        <div className="grp-item5"><span className="tx"><em className="hc1">*</em>송배전<br /><span className="sm">(구역전기)</span></span></div>
                      </li>
                      <li>
                        <div className="grp-item6"><span className="tx">Energy Storage System<br /><span className="sm">(ESS)</span></span></div>
                      </li>
                      <li> 
                        <div className="grp-item7"><span className="tx">Software Solution<br /><span className="sm">(Energy Management System)</span></span></div>
                      </li>
                      <li> 
                        <div className="grp-item8"><span className="tx">전기차 충전</span></div>
                      </li>
                      </ul>
                  </div>
                  <div className="s-tit3">**지역별 고객별･맞춤형 분산전원 Solution Package 제공</div>
                </div>
              </div>
              <div className="summary-notis n-motion n-bottom">
                <p><em>*</em> 부산(엔솔브), 미국(PassKey) 거점의 분산발전 Value Chain 통합 운영 역량 확보(분산 전원 및 송배전 최적 운영 솔루션 개발)</p>
                <p><em>**</em> 동남아시아 LNG 및 전력 수요 성장 국가 대상으로 글로벌 Power Value Chain 통합모델 추진 → 다양한 지역/고객 대상으로 Customized된 Energy Solution Package 모델로 확대</p>
              </div>
          </div>               
        </div>
      </div>  
    </div>
  );
}