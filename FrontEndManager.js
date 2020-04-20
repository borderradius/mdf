// 테스트 프론트 엔드
const FrontEndMGR = function() {
  // 진행률 보관
  this.ProgressPool = {}; // 학과번호, 진행률

  // PackageLocation

  // 로컬테스트용 리소스 패키지 경로
  // var configURL =  "http://13.125.243.104:82/";

  // 내부테스트용 리소스 패키지 경로
  // var configURL =  "https://kumsung.m2mobile.co.kr/";

  // 금성통합 테스트용 리소스 패키지 경로
  const configURL = './';

  this.viewerConfig = configURL + 'viewer_package/';
  this.studyConfig = configURL + 'study_package/';
};

FrontEndMGR.prototype.resetProgress = function() {
  this.ProgressPool = {};
};
FrontEndMGR.prototype.getViewerConfigPath = function() {
  return this.viewerConfig;
};

// -----------------------------------------------------
// 연결 콜백
// -----------------------------------------------------
/**
 * 호출주체 : App->FrontEnd 
 * 내용     : 해당학과의 진행률을 FrontEnd에 업데이트 한다.
 
    * @param studyKey 학과키 ex)A01010101
    * @param v 진행률 정보 0~100 [v1,v2]
    */
FrontEndMGR.prototype.onSaveProgress = function(studyKey, progressList) {
  if (!this.ProgressPool.hasOwnProperty(studyKey)) {
    this.ProgressPool[studyKey] = [0, 0];
  }
  this.ProgressPool[studyKey][0] = progressList[0];
  this.ProgressPool[studyKey][1] = progressList[1];
};
/**
 * 호출주체 : App->FrontEnd 
 * 내용     : 학습창에서 현재 포커스된 학습들의 완료여부를 반환 
 
    * @param course 학과단계(a~g)
    * @param step 스텝단계(1~6)
    * @param week 주 단계(1~4)
    * @param day 날(1~5)
    * @param callback 완료여부 목록 반환.
    
    * callback parameter 설명
    *  - resultList: 학습의 완료여부 목록 [ true, false,... ]
    *  - errorMSG : 해당 요청을 수행할수 없는 에러발생시에 에러관련 메세지. 정상작동시에는 ""
    */
FrontEndMGR.prototype.onDayProgressFlagList = function(
  course,
  step,
  week,
  day,
  callback,
) {
  callback([true, true, true, true, true, false, true, true], '');
};
/**
 * 호출주체 : App->FrontEnd
 * 내용     : App종료시 호출. 학습창종료시의 외부처리를 위한 콜백
 */
FrontEndMGR.prototype.onCloseApp = function() {
  const viewer = document.getElementById('viewer');
  viewer.style.display = 'none';
};
/**
 * 호출주체 : App->FrontEnd
 * 내용     : 학습창에서 해당 학습을 클릭시에 호출
 * @param studykey 학과코드
 * @param callback 학과코드에 의해서 CDN의 해당학과 진행률과 config화일경로를 알아내여 전달해준다. configPath ex) https://kumsung.m2mobile.co.kr/study_package/a01010101/
 * callback parameter 설명
 *  - studykey: 요청한 학과코드 ex) a01010101
 *  - progress: 요청한 학과의 진행률 ex)[ 100, 50 ]
 *  - configPath : 요청한 학과의 패키지 CDN루트경로 ex) https://kumsung.m2mobile.co.kr/study_package/a01010101/
 *  - errorMSG : 해당 요청을 수행할수 없는 에러발생시에 에러관련 메세지. 정상작동시에는 ""
 */
FrontEndMGR.prototype.onStartView = function(studyKey, callback) {
  const _this = this;
  // 해당 학습키에 매칭되는 진행률, CDN url을 전달.
  // 테스트를 위해서 일부러 딜레이 걸어봄.
  setTimeout(function() {
    // 진행률 테이블에 값이 없으면 하나 생성.
    if (!_this.ProgressPool.hasOwnProperty(studyKey)) {
      _this.ProgressPool[studyKey] = [100, 100];
    }

    // 정상 경우
    callback(
      studyKey,
      [_this.ProgressPool[studyKey][0], _this.ProgressPool[studyKey][1]],
      _this.studyConfig + studyKey + '/',
      '',
    );

    // 에러경우
    // callback( studyKey, [0,0], _this.studyConfig +studyKey +"/","해당 경로를 가지고 오는데 실패했습니다.");
  }, 1000);
};

/**
 * 호출주체 : App->FrontEnd 
 * 내용     : 학습창에서 해당 testStudy학습을 클릭시에 호출 
 
    * @param studykey 학과코드
    * @param callback 학과코드에 의해서 CDN의 해당학과 진행률과 config화일경로를 알아내여 전달해준다. configPath ex) https://kumsung.m2mobile.co.kr/study_package/a01010101/
    * callback parameter 설명
    *  - studykey: 요청한 학과코드 ex) a01010101 
    *  - configPath : 요청한 학과의 패키지 CDN루트경로 ex) https://kumsung.m2mobile.co.kr/study_package/a01010101/
    *  - testResult : 테스트 오답결과를 제작하여 전달해줌
    *  - errorMSG : 해당 요청을 수행할수 없는 에러발생시에 에러관련 메세지. 정상작동시에는 ""
    */
FrontEndMGR.prototype.onStartWeeklyTestStudy = function(studyKey, callback) {
  console.log('weeklyTestStudy');
  const _this = this;
  // 해당 학습키에 매칭되는 CDN url을 전달. 테스트를 위해서 일부러 딜레이 걸어봄.
  callback(
    studyKey,
    _this.studyConfig + studyKey + '/',
    [true, true, false, true, false, false],
    '',
  );
};
FrontEndMGR.prototype.onStartMonthlyTestStudy = function(studyKey, callback) {
  console.log('MonthlyTestStudy');
  const _this = this;
  // 해당 학습키에 매칭되는 CDN url을 전달. 테스트를 위해서 일부러 딜레이 걸어봄.
  callback(
    studyKey,
    _this.studyConfig + studyKey + '/',
    [true, true, false, true, false, false],
    '',
  );
};

/**
 * 호출주체 : App->FrontEnd 
 * 내용     : 학습창에서 외부 설명(?)보기 버튼을 클릭할때 호출 
 
    * @param jsondata 디스플레이할 Note의 내용. 
    */
let popup;
FrontEndMGR.prototype.onViewExternalNote = function(jsondata) {
  if (popup) popup.close();
  if (!popup || popup.closed) {
    window.popupJsonData = jsondata;
    popup = window.open(
      './notes/form.html',
      'mypopup',
      'resizable=yes, scrollbars=yes, titlebar=yes, width=518, height=524, top=10, left=10',
    );
  }
  // note.style.display = 'block';
  // alert("외부 해설팝업 열기")
};

/**
 * 호출주체 : App->FrontEnd 
 * 내용     : 학습창에서 Monthly,Monthly Study를 클릭할때 호출 
 
    * @param course 코스이름(a~g).
    * @param step 스텝번호(1~6).
    * @param week 주번호(1~4).
    */
FrontEndMGR.prototype.onStartWeeklyTest = function(
  course,
  step,
  week,
  progressFlag,
) {
  // 여기서 테스트 페이지 가동
  console.log('위클리 테스트 가동', progressFlag);
};
FrontEndMGR.prototype.onStartMonthlyTest = function(
  course,
  step,
  progressFlag,
) {
  // 여기서 테스트 페이지 가동
  console.log('먼쓸리 테스트 가동', progressFlag);
};

/**
 * App->FrontEnd 타임드리딩에서 녹음된 결과 화일을 전송한다.
 
    * @param data 녹음된 사운드 데이터
    * @param callback 녹음결과전송  처리후 콜백. 에러가 있으면 true반환, 관련 에러메세지는 errmsg로 넘어옴
    */
FrontEndMGR.prototype.onSaveTimedReadingRecordResult = function(
  studyKey,
  data,
  callback,
) {
  console.log(data);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = window.URL.createObjectURL(data);
  link.download = 'TimedReading.wav';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(link.href);
  callback('');
};
FrontEndMGR.prototype.onSaveOralLanguageRecordResult = function(
  studyKey,
  data,
  callback,
) {
  console.log(data);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = window.URL.createObjectURL(data);
  link.download = 'OralLanguage.webm';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(link.href);
  callback('');
};

const FEMGR = new FrontEndMGR();
