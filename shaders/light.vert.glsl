#version 300 es
      precision mediump float;
      precision mediump int;
      in vec2 pos;
      in float size;
      in vec3 color;
      out vec4 out_color;
      void main()
      {
            vec2 view = vec2(1.0/300.0,1.0/150.0);
            gl_Position = vec4(round(pos) * view, 0, 1);  // center

            out_color = vec4(color,1.0);
            gl_PointSize = size;
      }