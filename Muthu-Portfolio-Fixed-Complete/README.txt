MUTHU PORTFOLIO — COMPLETE PROJECT

DEPLOY TO NETLIFY
Extract the ZIP. Upload the extracted folder containing index.html, bavora.html, assets, and styles to Netlify manual deploy. No build is needed for the files at the ZIP root.

EDIT AND BUILD
The project-source folder is the editable project. Run npm ci, then npm run build:scene. The finished site is project-source/dist. Upload that dist folder after making changes. Use a local HTTP server to preview ES modules; opening index.html directly as a file can prevent 3D modules from loading.

CONTROLS
Drag the lantern horizontally or use the arrow buttons. Reset view restores the angle; Pause rotation stops automatic motion. A CSS 3D fallback stays interactive when WebGL is unavailable. Screenshot galleries support Previous/Next and arrow keys; Escape closes the viewer.

VERIFICATION
Build, JavaScript syntax, CSS syntax and simulated WebGL failure checks passed. Visual browser verification was unavailable.
