#version 300 es
        precision mediump float;
        precision mediump int;
        in vec4 out_color;
        out vec4 color;

        void main()
        {
            color = out_color;
            color.a = 1.0 - distance(gl_PointCoord, vec2(0.5,0.5))*2.0;
            vec2 v = normalize(gl_PointCoord - 0.5);
            // if (dot(v,vec2(1.0,0.00)) < 0.5) {
            //     color.a = 0.0;
            // }
            //vec2 coord = gl_PointCoord;
            //float d = 1.0 - distance(coord, vec2(0.5,0.5))*2.0;
            //color = vec4(d,0.0,0.0,1.0);
            float size = 64.0;
            vec2 light = vec2(1.0,1.0);
            float dist = distance(vec2(0.0,0.0), light);
            float cone = dot(v,normalize(light));
            if (cone < -0.75) {

            color.a = 0.0;
            }
        }