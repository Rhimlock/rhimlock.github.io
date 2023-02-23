export const images = {
    humans: document.getElementById("humans") as HTMLImageElement,
    orks: document.getElementById("orks") as HTMLImageElement,
}

for (const [key, value] of Object.entries(images)) {
    if (!value)
        throw new Error(`Image with ID '${key}' not found`);
}
