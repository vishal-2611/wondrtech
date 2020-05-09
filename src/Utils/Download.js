export function downloadFile(absoluteUrl) {
  let link = document.createElement("a");
  link.href = absoluteUrl;
  link.download = "true";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link = null;
}
