import React, { useEffect, useRef } from 'react';
import { Engine } from '@babylonjs/core';
import { Viewer } from '@babylonjs/viewer';

const ViewerOnlyTest: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const viewer = new Viewer(engine);

    viewer.loadModel('https://playground.babylonjs.com/scenes/BoomBox.glb');
    viewer.onModelChanged.add(() => {
      console.log('Model changed');
    });

    return () => {
      viewer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default ViewerOnlyTest;
