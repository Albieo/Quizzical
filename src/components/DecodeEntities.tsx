const decodeHtmlEntities = (str: string): string => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = str;
  return textArea.value;
};

export default decodeHtmlEntities;