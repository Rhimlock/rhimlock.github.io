#version 300 es
        precision mediump float;
        precision mediump int;
        in vec4 out_color;
        out vec4 color;

        void main()
        {
            color = out_color;
        }