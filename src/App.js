import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import {
  Button,
  Container,
  Navbar,
  Table,
  InputGroup,
  Form,
} from "react-bootstrap";

function App() {
  const [user, setUser] = useState(["박요도"]);
  const [name, setName] = useState([""]);
  const [modal, setModal] = useState("true");
  const [message, setMessage] = useState("화면을 클릭하여 시작");
  const [screenState, setScreenState] = useState("waiting");
  const [count, setCount] = useState(0);
  const [resultTime, setResultTime] = useState([]);
  const [resultAvg, setResultAvg] = useState([]);

  const timeOut = useRef();
  const startTime = useRef();
  const endTime = useRef();

  const AscendingArr = [...resultAvg].sort((a, b) => a[1] - b[1]);

  const screenClick = () => {
    if (count < 3) {
      if (screenState === "waiting") {
        setScreenState("ready");
        setMessage("초록색 화면으로 변하면 클릭!");

        timeOut.current = setTimeout(() => {
          setScreenState("go");
          setMessage("클릭!");
          startTime.current = new Date();
        }, Math.random() * 1 + 3000);
      } else if (screenState === "ready") {
        clearTimeout(timeOut.current);
        setScreenState("waiting");
        setMessage("클릭을 너무 일찍했음");
      } else if (screenState === "go") {
        endTime.current = new Date();
        clearTimeout(timeOut.current);
        setScreenState("waiting");
        setMessage("다시 시작하려면 화면 클릭");
        setResultTime((prev) => {
          return [...prev, endTime.current - startTime.current];
        });
        setCount(count + 1);
      }
    }
  };

  const Retry = () => {
    let avg = Math.floor((resultTime[0] + resultTime[1] + resultTime[2]) / 3);
    setResultAvg((prev) => {
      return [...prev, [user, avg]];
    });
    setResultTime([]);
    setCount(0);
  };

  return (
    <>
      {/* 상단 Navbar */}
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="./">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              반응속도 테스트
            </Navbar.Brand>
            <Navbar.Text>
              <div>{user}</div>
            </Navbar.Text>
          </Container>
        </Navbar>
      </div>

      <div className="all">
        <div className="left">
          {/* Modal창 */}
          {modal === "true" ? (
            <div className="mt-5 Modal">
              <h1>게임설명</h1>
              <p>
                3번의 반응속도를 측정 후 평균값을 보여줍니다
                <br />
                시작하려면 게임설명을 닫고 화면을 클릭하세요
              </p>
              <Button
                variant="info"
                className="mt-2"
                onClick={() => {
                  setModal(false);
                }}
              >
                닫기
              </Button>{" "}
            </div>
          ) : null}

          {/* Main Screen */}
          <div
            id="screen"
            className={"mt-5 " + screenState}
            onClick={screenClick}
          >
            <h1>{message}</h1>
            {message === "다시 시작하려면 화면 클릭" && count !== 0 ? (
              <div>
                {count}번째 시도는 {resultTime[count - 1]}ms입니다.
              </div>
            ) : null}
            {count === 3 ? (
              <div>
                평균값은{" "}
                {Math.floor(
                  (resultTime[0] + resultTime[1] + resultTime[2]) / 3
                )}
                ms입니다.
                <br />
                <Button variant="warning" className="mt-2" onClick={Retry}>
                  다시 시도
                </Button>{" "}
              </div>
            ) : null}
          </div>
        </div>

        <div className="right">
          {/* UserName 변경 */}
          <InputGroup
            className="mt-5 name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            <Form.Control placeholder="변경할 이름을 입력하세요" />
            <Button
              variant="outline-secondary"
              onClick={() => {
                setUser(name);
              }}
            >
              변경
            </Button>
          </InputGroup>

          {/* Score */}
          <Table
            className="mt-5 score"
            striped
            bordered
            hover
            style={{ borderRadius: "12px" }}
          >
            <thead>
              <tr>
                <th>순 위</th>
                <th>이 름</th>
                <th>시 간</th>
              </tr>
            </thead>
            <tbody>
              {AscendingArr.map((array, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{array[0]}</td>
                    <td>{array[1]}ms</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default App;
