#version 300 es
        precision mediump float;
        precision mediump int;
        in vec4 out_color;
        out vec4 color;

        void main()
        {
            color = out_color;
            color.a = 1.0 - distance(gl_PointCoord, vec2(0.5,0.5))*2.0;
            //vec2 coord = gl_PointCoord;
            //float d = 1.0 - distance(coord, vec2(0.5,0.5))*2.0;
            //color = vec4(d,0.0,0.0,1.0);
        }