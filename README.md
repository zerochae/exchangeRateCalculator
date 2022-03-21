# exchangeRateCalculator

|개발자|DEMO|제작기간|
|:---:|:---:|:---:|
|권영채|[link🚀](https://exchangecal-zerochae.herokuapp.com/)|2022-03-15 - 2022-03-21|

## 실행 방법

```
git clone https://github.com/zerochae/exchangeRateCalculator
npm install
npm run dev
```

## 사용 기술

React , Typescript, Redux, Styled Components

## 요구사항 정리

✔️ 송금국가는 미국, 호주 두 군데 중 하나를 select box로 선택합니다. 각각 통화는 USD, AUD 입니다.
✔️ 수취국가는 한국, 일본, 필리핀 세 군데 중 하나를 select box로 선택합니다. 각각 통화는 KRW, JPY, PHP 입니다.
✔️ 송금국가와 수취국가를 선택하면 아래 환율이 바뀌어나타나야 합니다. 환율은 1 USD/AUD 기준으로 각각 KRW, JPY, PHP의 대응 금액입니다.
✔️ 송금액을 USD/AUD로 입력하고 Submit을 누르면 아래 다음과 같이 수취금액이 KRW, JPY, PHP 중 하나로 계산되어서 나와야 합니다.
✔️ 환율과 수취금액은 소숫점 2째자리까지, 3자리 이상 되면 콤마를 가운데 찍어 보여줍니다. 예를 들어 1234라면 1,234.00으로 나타냅니다.

## 개발 중 이슈

![image](https://user-images.githubusercontent.com/84373490/159194789-79296c07-6504-4c6a-9335-5ad09b7faddb.png)

지금까지 잘 API 데이터를 Fetch 했지만, 오늘 갑자기 되지 않는 현상이 있었습니다. 여러 시도를 해보았지만, 계속 어려움이 있었고, 결국 `json-server`를 사용하여  대체하였습니다.
