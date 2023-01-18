#version 300 es
      precision mediump float;
      precision mediump int;
      in float size;
      void main()
      {
            gl_Position = vec4(0,0, 0, 1);  // center
            //gl_Position = vec4(pos,0,1);
            
            gl_PointSize = size;
      }