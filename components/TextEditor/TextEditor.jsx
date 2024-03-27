"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  }
);

export default function TextEditor() {
  const excalRef = useRef(null);

  const onChange = () => {
    // The ref will never get initialized with the API
    console.log(excalRef.current, "HEY");
  };

  return (
    <>
      <div style={{ height: "100%", margin: "10px" }}>
        <Excalidraw onChange={onChange} ref={excalRef} />
      </div>
    </>
  );
}
