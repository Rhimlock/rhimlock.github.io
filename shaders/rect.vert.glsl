#version 300 es
      precision mediump float;
      precision mediump int;
      in vec2 pos;
      in float size;
      uniform vec2 uViewSizeInv;
      void main()
      {
            vec2 view = vec2(1.0/300.0,1.0/150.0);
            gl_Position = vec4(pos * view, 0, 1);  // center
            //gl_Position = vec4(pos,0,1);
            
            gl_PointSize = size;
      }