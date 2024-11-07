import React, { useEffect, useRef } from 'react';
import { ArcRotateCamera, Color4, Engine, HemisphericLight, MeshBuilder, Scene, Vector3 } from '@babylonjs/core';


const BabylonComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
      "arcCamera",
      1,
      1.574,
      6,
      new Vector3(0, 1, 0),
      scene
    );

    camera.attachControl(canvasRef.current, true);

    scene.clearColor = new Color4(0.1, 0.2, 0.3, 1);

    const light1 = new HemisphericLight("light1", new Vector3(0, 3, 0), scene);
    light1.intensity = 0.7;

    const box = MeshBuilder.CreateBox("box",)

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    return () => {
      engine.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BabylonComponent;