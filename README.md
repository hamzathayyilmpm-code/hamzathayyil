# My Personal Website

A simple personal website made with plain HTML, CSS and JavaScript. It has no paid services, no API keys, no database and no frameworks.

## Files

| File | What it does |
|---|---|
| `index.html` | The content: all the text and the six sections |
| `style.css` | The look: colours, fonts, spacing, mobile layout |
| `script.js` | Small features: mobile menu, menu highlight, contact form |
| `README.md` | This guide |

Keep all files in the **same folder**.

## How to preview the website

1. Put `index.html`, `style.css` and `script.js` together in one folder.
2. Double-click `index.html`. It opens in your browser (Chrome, Edge, Firefox or Safari).
3. To see the mobile view, make the browser window narrow, or open the page on your phone after you publish it.

No installation is needed.

## How to update the text (no coding knowledge needed)

1. Right-click `index.html` and open it with a text editor (Notepad, TextEdit in plain-text mode, or free VS Code).
2. Press `Ctrl + F` (or `Cmd + F` on Mac) and search for `[` to find every placeholder in square brackets.
3. Replace the text **between** the tags only. For example:

   ```html
   <p>This sentence is what visitors see.</p>
   ```
   Change the sentence. Do not delete the `<p>` or `</p>`.
4. Save the file and refresh the browser tab (`F5`) to see your change.

### Things to replace before you publish

- **Email**: in `index.html`, search for `your.email@example.com` (two places: the Contact section, in the link text and in the link address). Also change `CONTACT_EMAIL` at the top of `script.js`.
- **LinkedIn**: search for `your-profile` and put your real profile address.
- **About Me and Career**: fill in the yellow placeholder notes. Check that every fact about you is correct. The text was written from the background you gave me, so edit anything you want to change.
- **Location**: add it only if you are comfortable sharing it. You can delete that whole line.

### Add your photos

1. Create a folder called `images` next to `index.html` and copy your pictures into it.
2. In `index.html`, find the placeholder (for example `Your photo here` or `Image 1`).
3. Below it is a comment with a ready-made `<img ...>` line. Copy that line, remove the placeholder `<div ...>...</div>` line above it, and change the file name and the `alt` text.
4. `alt` text should briefly describe the picture, for screen readers.

Use pictures under about 500 KB each so the site loads fast. Only publish photos you own or have permission to share, and avoid photos that show private information such as house numbers or documents.

### Change colours and fonts

Open `style.css`. At the top, the `:root` block has named colours such as `--primary`. Change the colour code (for example `#0f6b8f`) and the whole site updates. Keep strong contrast between text and background.

### Add or remove a gallery item

Copy one full `<li> ... </li>` block inside the Gallery list and paste it after another one, or delete a block you do not need.

## How to put it online for free

Any of these work: **GitHub Pages**, **Netlify Drop** (drag the folder onto the page) or **Cloudflare Pages**. Upload the folder, then copy the address you receive. After publishing, you can remove the `<!-- -->` marks around the `og:url` line in `index.html` and put your address there.

## Privacy checklist

- Do not publish your phone number, home address, salary or ID numbers.
- The contact form does not save anything. It opens the visitor's own email app with a ready message to your address. Anyone can still see the email address in the page, so use an address you are comfortable sharing.

## Testing notes and limitations

What was checked:
- All six menu links (`#home`, `#about`, `#interests`, `#career`, `#gallery`, `#contact`) point to sections that exist, and the footer "Back to top" link works.
- Every `id` is unique, the HTML tags are balanced, and the JavaScript has no syntax errors.
- The layout was written for three widths: desktop, tablet (under 900 px) and mobile (under 720 px).

What was **not** checked:
- It was not opened in real browsers or on real phones. Please preview it in your own browser and on your phone, and check the menu, the layout and the contact form.
- Colour contrast was chosen carefully but not measured with a tool. You can test it with the free WebAIM Contrast Checker or your browser's Lighthouse report.
- The contact form depends on the visitor having an email app set up. On some computers, nothing happens when the mail link opens. A hosted form service would fix this, but it is not free in every case, so it is not included.
- Fonts come from the visitor's device, so the look differs a little between Windows, Mac and phones.
