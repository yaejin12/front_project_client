// 글로벌 스타일을 넣기 위한 파일
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

${reset}

*{
box-sizing: border-box;
text-shadow: 0px 0px 2px rgba(0,0,0,0.1);
line-height: 1.3;
letter-spacing: -0.5px;
text-decoration: none;

}


/* 모든 Device를 위한 공통 로드 */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
figure,
figcaption,
span {
  margin: 0;
  padding: 0;
  letter-spacing: 0;
}

body,
html,
div,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dt,
dd,
p hr,
button,
input,
form,
fieldset,
table,
caption,
th,
td,
header,
nav,
section,
article,
aside,
footer,
textarea {
  margin: 0;
  padding: 0;
}

html,
body {
  width: auto;
  height: 100%;
  font-size: 14px;
  color: var(--color-bk);
}

header,
nav,
section,
article,
aside,
footer {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

ol,
ul {
  list-style: none;
}

legend,
caption {
  text-indent: -100%;
  text-indent: 0;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  text-shadow: none;
  color: transparent;
}

img {
  max-width: 100%;
  border: 0;
  vertical-align: top;
}

table {
  border-spacing: 0;
  border-collapse: collapse;
}

table,
th,
td {
  border: none;
  text-align: left;
}

th,
label {
  font-weight: normal;
}

address {
  font-style: normal;
}

button,
input {
  border: none;
  background: none;
}

button:focus,
input:focus {
  outline: none;
}

button,
a,
input,
label {
  cursor: pointer;
  text-decoration: none;
  outline: 0;
  font-family: inherit;
  color: var(--color-bk);
}
*,
input[type="checkbox"],
input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input[type="checkbox"]:disabled,
input[type="radio"]:disabled,
button:disabled {
  cursor: no-drop;
}

input[type="checkbox"]:disabled + label,
input[type="radio"]:disabled + label {
  cursor: no-drop;
}

a {
  text-decoration: none;
  color: var(--color-dark);
}

input::-ms-clear {
  display: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

textarea {
  resize: none;
}

textarea::placeholder {
  color: #a2a2a2;
}

textarea:focus {
  outline: none;
}

/* select*/
select {
  border-radius: 0;
  /* 아이폰 사파리 보더 없애기 */
  -webkit-appearance: none;
  /* 화살표 없애기 for chrome*/
  -moz-appearance: none;
  /* 화살표 없애기 for firefox*/
  appearance: none;
  /* 화살표 없애기 공통*/
}

select::-ms-expand {
  display: none;
  /* 화살표 없애기 for IE10, 11*/
}


`;
export default GlobalStyle;
