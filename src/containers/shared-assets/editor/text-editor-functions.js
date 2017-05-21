import React from 'react';
export const handleBBCodeClick = (e, textContainer, handleTagInsertion, id, previewId) =>{
  e.preventDefault();
  let bbcode = e.currentTarget.value;
  let selector = textContainer || '';

  let cursorPosStart = document.getElementById(id).selectionStart;
  let cursorPosEnd = document.getElementById(id).selectionEnd;

  let start = selector.substr(0, cursorPosStart);
  let selection = selector.substr(cursorPosStart, cursorPosEnd - cursorPosStart);
  let end = selector.substr(cursorPosEnd);

  switch(bbcode){
    case 'url': return handleTagInsertion({
      [id]: start + `[${bbcode}][li]` + selection + `[/li][/${bbcode}]` + end,
      [previewId]: start + `[${bbcode}][li]` + selection + `[/li][/${bbcode}]` + end
    });
    case 'ul':
    case 'ol': return handleTagInsertion({
      [id]: start + `[${bbcode}][li]` + selection + `[/li][/${bbcode}]` + end,
      [previewId]: start + `[${bbcode}][li]` + selection + `[/li][/${bbcode}]` + end
    });
    case 'card': return handleTagInsertion({
      [id]: start + `[${bbcode}]` + selection + end,
      [previewId]: start + `[${bbcode}]` + selection + end
    });
    case bbcode:  return handleTagInsertion({
      [id]: start + `[${bbcode}]` + selection + `[/${bbcode}]` + end,
      [previewId]: start + `[${bbcode}]` + selection + `[/${bbcode}]` + end
    });
  }
};



export const convertBBCode = (text) =>{
  if(text !== undefined) {
    let s = text.replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/\(/g, '(')
        .replace(/\)/g, ')')
        .replace(/;/g, ';')
        //affix
        .replace(/\[b]/g, '<b>')
        .replace(/\[i]/g, '<i>')
        .replace(/\[u]/g, '<u>')
        .replace(/\[s]/g, '<del>')
        .replace(/\[url]/g, '<a href="">')
        .replace(/\[q]/g, '<q>')
        .replace(/\[em]/g, '<iframe src="">')
        .replace(/\[ul]/g, '<ul><li>')
        .replace(/\[ol]/g, '<ol><li>')
        .replace(/\[li]/g, '<li>')
        .replace(/\[card]/g, '{card name}')
        //suffix
        .replace(/\[\/b]/g, '</b>')
        .replace(/\[\/i]/g, '</i>')
        .replace(/\[\/u]/g, '</u>')
        .replace(/\[\/s]/g, '</del>')
        .replace(/\[\/url]/g, '</a>')
        .replace(/\[\/q]/g, '</q>')
        .replace(/\[\/em]/g, '</iframe>')
        .replace(/\[\/ul]/g, '</li></ul>')
        .replace(/\[\/ol]/g, '</li></ol>')
        .replace(/\[\/li]/g, '</li>');

    function createMarkup(){
      return {__html: s}
    }
    return <div dangerouslySetInnerHTML={createMarkup()} />
  }
};