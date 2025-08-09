import "./App.css";
import HorizontalNav from "./components/HorizontalNav";
import VerticalNav from "./components/VerticalNav";
import HeartBurstCursor from "./components/HeartBurstCursor";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Cursor from "react-cursor-follow";
import theme from "./theme";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HorizontalNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <VerticalNav isOpen={isOpen} />
      <main>
        <Outlet />
      </main>
      <HeartBurstCursor />
      <Cursor
        hollow={false}
        duration={0.8}
        size={30}
        color={theme.palette.secondary.main}
        hoverSize={24}
        hoverColor={theme.palette.secondary.main}
        hoverClasses={["button", "MuiButton-root"]}
        smoothness={{
          movement: 0.05,
          scale: 0.1,
        }}
        position="fixed"
        offsetX={10}
        offsetY={10}
      />
    </>
  );
}

export default App;
