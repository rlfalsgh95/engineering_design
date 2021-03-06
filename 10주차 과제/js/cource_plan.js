$("nav > ul > li > a").on("click", (event) => {
    event.preventDefault();
    const target = event.target
    const elemIndex = $("nav > ul > li > a").index(target)
    
    const content = [`
    <h3>교과목 개요</h3>
    컴퓨터를 통해 문제를 해결하는 것은 인간과 컴퓨터가 의사소통을 하는 것에서 시작한다. 의사소통을 하는 데에는 각자가 사용하는 언어가 필요한데 컴퓨터와 인간이 사용하는 언어는 다르기 때문에 이를 번역해주는 컴파일러가 필요하다. 본 교과목에서는 보다 심도있는 프로그래머가 되기 위한 컴파일러의 기초 이론과 다양한 예시를 학습한다.<br>
    <h3>교과목 목표</h3>
    1. 컴파일러의 기본적인 개념에 대해 이해한다.<br>
    2. 컴파일러의 구조나 동작에 대해 이해하고 다루어본다.<br>
    3. 컴파일러의 근간이 되는 물리적/논리적 구조에 대하여 이해한다.<br>
    <h3>주교재</h3>
    컴파일러의 이해, 한빛아카데미, 2020.<br>`, 

    `<h3>교과목 개요</h3>
    이 수업에서는 문제 해결을 위한 공학적 접근 방법을 다룹니다. 단순히 일회성 해결책을 찾는 것이 아닌, 가격 효율적으로 해결책의 소요자에게 필요한 프로젝트를 수행하기 위한 기법들을 배웁니다. <br>
    <h3>교과목 목표</h3>
    이 수업을 통해, 문제의 원인을 찾고 이에 대한 해결책을 설계, 시험하는 과정을 배웁니다. 장기적으로, 이후 배우게 될 컴퓨터 과학 이론을 이용해 프로젝트를 개발하는 기반 지식을 갖추게 됩니다. <br>
    <h3>주교재</h3>
    창의적 공학설계(개정판), 김은경, 한빛아카데미 <br>`, 

    `<h3>교과목 개요</h3>
    소프트웨어 공학기법을 이용한 실제문제해결<br>
        - 실용적인 보안소프트웨어 구현을 통한 문제해결<br>
    <h3>교과목 목표</h3>
    - 보안 알고리즘과 활용에 대한 강의 및 토론<br>
    - 해결하고자 하는 문제를 형식화하고 이론적 접근에 대한 토론<br>
    - 기존 지식을 활용한 문제해결 방법의 도출<br>
    - 이론적, 소프트웨어 구현상 해결방법에 대한 증명 <br>`, 

    `<h3>교과목 개요</h3>
    세계화, 정보화가 가속화되고 있는 현대사회에서는 불확실한 미래에 능동적으로 대처할 수 있는 창의적 사고력 및 의사소통능력이 반드시 필요하다.본 교과목의 대표 핵심역량은 창의적문제해결 역량이며, 본 교과는 창의적 사고의 기본 개념과 이를 구성하는 다양한 사고인 ‘논리적 사고(Logical Thinking)’, ‘비판적 사고(Critical Thinking)’, ‘시스템 사고(System Thinking)’, ‘시나리오 사고(Scenario Thinking)’에 관한 학습 및 실천을 통해 자신의 사고에 관해 생각할 수 있는 '메타 사고(metacognition)'을 기른다. 또한, 창의적 사고를 위한 다양한 기법(SCAMPER, 아이디어창출의 5단계 등)을 모둠활동을 통해  배우고 실천하여 창의적 사고력 향상과 함께 보편적・인간적 가치관에 대해 생각할 수 있는 기회를 갖는다.<br> 
    <h3>교과목 목표</h3>
    '창의적 사고'란 일상생활 속에서 직면하는 새로운 상황에 새로운 솔루션을 내놓는 것이며, 주변 사람들과 협력하고 공유하며 함께 쌓아가는 사회적 과정이다. 이를 향상시키기 위해 다양한 창의적 사고기법과 실제 생활을 바탕으로 한 구체적 활용 방법을 배우며 토론(모둠활동)을 통한 실천으로 격심하게 변화하는 미래에 대처할 수 있는 실행력을 갖출 수 있도록 하는 것이 본 수업의 목적이다. <br>
    <h3>주교재</h3>
    자체 제작 유인물<br>`, 
    

    `<h3>교과목 개요</h3>
    본 과목의 대표 핵심역량은 전문지식탐구역량으로 비전공자들에게 컴퓨터 프로그램에 관해 소개하는 과목이다. 단순히 컴퓨터 프로그램 언어를 배우는 것이 아니라 수강생의 전문 영역의 문제를 해결하는 데 있어 컴퓨터 기술을 이용하는 사고방식을 배운다. 컴퓨터와 소프트웨어에 관한 기본 지식을 포함하여 컴퓨터 프로그래밍의 원리와 이론의 기초적인 내용을 다룬다.  또한 비전공자들을 위해서 개발된 프로그래밍 언어인 Scratch와 범용 프로그래밍언어 중 쉽게 접근이 가능한 Python을 활용하여 프로그래밍 기법을 배우고, 프로그래밍 실습을 통하여 프로그래밍 기술을 익힌다. <br>
    <h3>교과목 목표</h3>
    이 과목을 통해 컴퓨터 분야를 전공하지 않는 학생들도 프로그램 작성의 기본 원리를 습득하고, 여러 가지 문제들을 컴퓨터 프로그램으로 해결하기 위한 능력을 키울 수 있다. <br>
    <h3>주교재</h3>
    창의적 프로그래밍을 위한 파이썬 (생능출판사)<br>`,

    `<h3>교과목 개요</h3>
    명저읽기와 토론을 연계하여 단순한 지식의 주입이 아니라 스스로 삶의 지혜를 얻고 삶에 대한 통찰력이 생기도록 하며 비판적 사고와 창의적 문제해결 역량을 키울수 있도록 한다. 이 강의는 총 4권의 책을 읽고, 팀별 토론 활동을 한 후 발표를 통해 전체의 생각을 교류하고, 그 결과를 보고서로 정리한다.<br>
    <h3>교과목 목표</h3>
    이 강좌에서는 인류가 지금까지 발견하고 발전시켜 온 지혜와 지식의 보고인 명저읽기를 통해 현대 사회가 요구하는 창조형 인재를 기르고자 한다.<br>
    <h3>주교재</h3>
    1. 코스모스(칼세이건, 홍승수 번역), 2. 과학콘서트(정재승,어크로스) 3. 욕망하는테크놀로지(이상욱 외, 동아시아), 4. 엔트로피(제레미리프킨, 세종연구원)<br>`,

    `<h3>교과목 개요</h3>
    패턴인식은 신호 또는 영상 형태의 raw data를 가공하여 데이터의 의미를 추론/인식하는 학문 분야이다. 본 강의에서는 디지털영상처리 기본 역량을 갖춘 학생들을 대상으로 패턴인식 분야 중 영상인식 기술의 이론적/실질적 내용을 전달한다.<br>
    <h3>교과목 목표</h3>
    영상에서 원하는 영역을 검출하고, 해당 영역에 어떠한 정보가 있는지 판단하는 알고리즘을 직접 구현할 수 있다.<br>
    <h3>주교재</h3>
    컴퓨터 비전 / 오일석 저 / 한빛아카데미<br>`]

    $contentElem = $(".content")
    $contentElem.html(content[elemIndex])
})