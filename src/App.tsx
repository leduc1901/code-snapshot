import { useRef, useState } from "react";
import "./App.css";
import { copyImage } from "./utils.ts/copyImage";
import { CodeEditor } from "./components/CodeEditor";
import { BsSun, BsMoonFill, BsDownload, BsCodeSlash } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  darkThemeStyle,
  DEFAULT_WRAPPER_WIDTH,
  LANGUAGES,
  lightThemeStyle,
  Theme,
} from "./utils.ts/constant";
import { Header } from "./components/Header";
import { useMouseMove } from "./hooks/useMouseMove";
import { downloadImage } from "./utils.ts/downloadImage";

export default function App() {
  const [theme, setTheme] = useState(Theme.DARK);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].value);
  const [wrapperWidth, setWrapperWidth] = useState(DEFAULT_WRAPPER_WIDTH);
  const isDarkTheme = theme === Theme.DARK;
  const wrapperRef = useRef<HTMLDivElement>(null);
  useMouseMove(setWrapperWidth);
  const textAreaBackground = isDarkTheme
    ? darkThemeStyle.backgroundColor
    : lightThemeStyle.backgroundColor;

  return (
    <>
      <ToastContainer />
      <div className="menu-container">
        <div
          className="menu-item"
          onClick={() => setTheme(isDarkTheme ? Theme.LIGHT : Theme.DARK)}
        >
          {isDarkTheme ? <BsMoonFill size={20} /> : <BsSun size={20} />}
          Theme
        </div>
        <div
          className="menu-item"
          onClick={() => copyImage(wrapperRef.current)}
        >
          <BiCopy size={20} />
          Copy
        </div>
        <div
          className="menu-item"
          onClick={() => downloadImage(wrapperRef.current)}
        >
          <BsDownload size={20} />
          Download
        </div>
      </div>

      <div className="editor">
        <div
          className="wrapper"
          style={{ width: wrapperWidth }}
          ref={wrapperRef}
        >
          <div id="left-handler"></div>
          <div id="right-handler"></div>
          <div
            className="container"
            style={{
              backgroundImage: textAreaBackground,
            }}
          >
            <Header />
            <CodeEditor isDarkTheme={isDarkTheme} />
          </div>
        </div>
      </div>
    </>
  );
}
