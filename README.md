# Convert API example

example by google font (Saraban) 

unicode-range: unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;

```css
/* file: https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500&display=swap */
/* thai */
@font-face {
  font-family: 'Sarabun';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sarabun/v13/DtVjJx26TKEr37c9aAFJn3YO5gjupg.woff2) format('woff2');
  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
}
@font-face {
  font-family: 'Sarabun';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sarabun/v13/DtVmJx26TKEr37c9YOZqik8s6yLUrwB0lw.woff2) format('woff2');
  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
}
```

simple api for generate text to font-unicode
- http://localhost:3000/api/convert-text

# run

```
$ cd src

$ yarn install

$ yarn dev
```