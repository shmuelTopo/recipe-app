export enum ImageSizes {
  xxs = "90x90",
  xs = "240x150",
  s = "312x150",
  m = "312x231",
  l = "480x360",
  xl = "556x370",
  xxl = "636x393",
}

export function changeImageDimensions(url: string, size: keyof typeof ImageSizes): string {
  const parts = url.split("-");
  const originalDimensions = parts[parts.length - 1].split(".")[0];
  const modifiedDimensions = ImageSizes[size];
  const newUrl = url.replace(originalDimensions, modifiedDimensions);
  return newUrl;
}
