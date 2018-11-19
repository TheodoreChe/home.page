import React, { Component } from "react";

import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";

import Layout from "Common/Layout";
import { Container } from "Common/Layout/style";
import { H1, H2 } from "Common/Typography";
import timeLoop from "Common/TimeLoop";

const shaders = Shaders.create({
  noise: {
    frag: GLSL`
        precision lowp float;
        varying vec2 uv;
        uniform vec2 style;
        uniform float time;
        float random (in vec2 st) {
            return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
        }

        float noise (in vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);

            // Four corners in 2D of a tile
            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) +
                    (c - a)* u.y * (1.0 - u.x) +
                    (d - b) * u.x * u.y;
        }

        float fbm (in vec2 st) {
            float v = 0.0;
            float a = 0.6;
            vec2 shift = vec2(100.0);

            mat2 rot = mat2(cos(.5), sin(.5),
                            -sin(.5), cos(.5));
            for (int i = 0; i < 6; ++i) {
                v += a * noise(st);
                st = rot * st * 1.3 + shift;
                a *= 0.5;
            }
            return v;
        }


        void main() {
            vec2 st = uv * 7.0;
            vec3 color = vec3(.0);
            float u_time = -time * 0.006;

            float rotation = -2.4;
            float mid = 0.;

            st = vec2(
              cos(rotation) * (uv.x - mid) + sin(rotation) * (uv.y - mid) + mid,
              cos(rotation) * (uv.y - mid) - sin(rotation) * (uv.x - mid) + mid
            );

            st *= 10.;

            vec2 q = vec2(0.);
            q.x = fbm( st );
            q.y = fbm( st + vec2(1.0));

            vec2 r = vec2(0.);
            r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*u_time);
            r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*u_time);

            float f = fbm(st+fbm(st+r))*0.6;

            color = mix(vec3(0.101961,0.619608,0.666667),vec3(0.666667,0.666667,0.498039),clamp((f*f)*4.0,0.0,1.0));
     
            color = mix(color,vec3(0.666667,1,1),clamp(length(r.x),0.0,1.0));

            gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color, 1.);
          }
            `
  }
});

const NoiseShader = ({ time }) => (
  <Node
    shader={shaders.noise}
    uniforms={{
      time: time
    }}
  />
);

const LoopNoiseShader = timeLoop(NoiseShader);

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <H1>Shaders</H1>
          <H2>Fractional Brownian motion</H2>
          <div>
            <Surface width={400} height={400}>
              <LoopNoiseShader />
            </Surface>
          </div>
        </Container>
      </Layout>
    );
  }
}
