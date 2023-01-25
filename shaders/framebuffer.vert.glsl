#version 300 es
      precision mediump float;
      const mat4x2 coords = mat4x2(
            vec2(-1.0),
            vec2(-1.0,1.0),
            vec2(1.0),
            vec2(1.0,-1.0));
      void main()
      {
            gl_Position = vec4(coords[gl_VertexID] * .5,0.0,1.0);

      }