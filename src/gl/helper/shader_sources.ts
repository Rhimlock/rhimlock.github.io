export const SHADER_SOURCES = await fetchIndex() as any;
for (const [key, _value] of Object.entries(SHADER_SOURCES)) {
    SHADER_SOURCES[key] = await fetch(`shaders/${key}.glsl`)
        .then(result => result.text())
}

async function fetchIndex() {
    const listName = "_shaderlist.txt";
    return fetch(`shaders/${listName}`).then(result =>
        result.text().then((text: string) =>
            text.split("\n").filter(str => str.endsWith(".glsl"))
                .reduce((acc: any, curr) => (acc[curr.replace(".glsl", "")] = '', acc), {})
        )
    );
}
