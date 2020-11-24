import MarkdownIt from 'markdown-it';
import * as React from 'react';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export function Markdown(props) {
  return (
    <div
      dangerouslySetInnerHTML={{__html: md.render(props.value)}}
    />
  );
}
