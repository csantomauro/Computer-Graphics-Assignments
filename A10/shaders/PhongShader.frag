#version 450

layout(location = 0) in vec3 fragPos;

layout(location = 0) out vec4 outColor;

layout(set = 0, binding = 1) uniform GlobalUniformBufferObject {
	float time;

void main() {
	vec3 Norm = fragNorm;
