
export const SHADER_SOURCES = await fetchIndex() as any;
for (const [key, _value] of Object.entries(SHADER_SOURCES)) {
    SHADER_SOURCES[key] = await fetch(`shaders/${key}.glsl`)
        .then(result => result.text())
}

async function fetchIndex() {
    return fetch(`shaders/index.json`).then(result =>
        result.json().then((arr: any[]) =>
            arr.reduce((acc, curr) => (acc[curr] = '', acc), {})
        )
    );
}
